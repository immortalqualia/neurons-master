(function () {
  "use strict";

  const FREQUENCIES = [110, 220, 330, 440, 550, 660, 880];

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function clamp01(value) {
    return clamp(value, 0, 1);
  }

  function toInt(value, fallback) {
    const n = Number(value);
    return Number.isFinite(n) ? Math.trunc(n) : fallback;
  }

  function toFloat(value, fallback) {
    const n = Number(value);
    return Number.isFinite(n) ? n : fallback;
  }

  function mulberry32(seed) {
    let t = seed >>> 0;
    return function random() {
      t += 0x6D2B79F5;
      let r = t;
      r = Math.imul(r ^ (r >>> 15), r | 1);
      r ^= r + Math.imul(r ^ (r >>> 7), r | 61);
      return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
    };
  }

  function makeRng(seed) {
    const normalized = Number.isFinite(seed) ? seed : Math.floor(Math.random() * 0xFFFFFFFF);
    const random = mulberry32(normalized);
    return {
      random,
      int(min, max) {
        return Math.floor(random() * (max - min + 1)) + min;
      },
      float(min, max) {
        return min + (max - min) * random();
      },
      choice(items) {
        return items[this.int(0, items.length - 1)];
      },
      shuffle(items) {
        for (let i = items.length - 1; i > 0; i--) {
          const j = this.int(0, i);
          [items[i], items[j]] = [items[j], items[i]];
        }
        return items;
      }
    };
  }

  function sanitizeOptions(raw = {}) {
    const nodeCount = clamp(toInt(raw.nodeCount, 222), 1, 5000);
    const canvasWidth = clamp(toInt(raw.canvasWidth, 2200), 100, 20000);
    const canvasHeight = clamp(toInt(raw.canvasHeight, 2200), 100, 20000);
    const edgesMin = Math.max(0, toInt(raw.edgesMin, 1));
    const edgesMax = Math.max(edgesMin, toInt(raw.edgesMax, 3));
    const weightMin = Math.max(1, toInt(raw.weightMin, 1));
    const weightMax = Math.max(weightMin, toInt(raw.weightMax, 3));
    const thresholdMin = Math.max(0.000001, toFloat(raw.thresholdMin, 1));
    const thresholdMax = Math.max(thresholdMin, toFloat(raw.thresholdMax, 1));

    return {
      mode: raw.mode === "backbone" ? "backbone" : "random",
      seed: raw.seed === "" || raw.seed === null || raw.seed === undefined ? null : toInt(raw.seed, null),
      nodeCount,
      canvasWidth,
      canvasHeight,
      blueRatio: clamp01(toFloat(raw.bluePercent, 40) / 100),
      outputMag: Math.max(0, toFloat(raw.outputMag, 1)),
      edgesMin,
      edgesMax,
      extraEdges: Math.max(0, toInt(raw.extraEdges, 200)),
      weightMin,
      weightMax,
      thresholdMin,
      thresholdMax,
      muteProb: clamp01(toFloat(raw.muteProb, 0.5))
    };
  }

  function rounded(value, digits = 2) {
    const p = 10 ** digits;
    return Math.round(value * p) / p;
  }

  function addPair(pairs, fromId, toId) {
    if (fromId === toId) return false;
    const key = `${fromId}->${toId}`;
    if (pairs.has(key)) return false;
    pairs.add(key);
    return true;
  }

  function makeNode(rng, id, output, opts) {
    const margin = 20;
    const frequency = rng.random() < opts.muteProb ? 0 : rng.choice(FREQUENCIES);
    return {
      id,
      x: rounded(rng.float(margin, Math.max(margin, opts.canvasWidth - margin))),
      y: rounded(rng.float(margin, Math.max(margin, opts.canvasHeight - margin))),
      output,
      frequency,
      threshold: rounded(rng.float(opts.thresholdMin, opts.thresholdMax), 6),
      charge: 0
    };
  }

  function buildEdges(rng, pairs, opts) {
    let id = 1;
    return Array.from(pairs)
      .map((key) => key.split("->").map(Number))
      .sort((a, b) => (a[0] - b[0]) || (a[1] - b[1]))
      .map(([fromId, toId]) => ({
        id: id++,
        fromId,
        toId,
        weight: rng.int(opts.weightMin, opts.weightMax)
      }));
  }

  function generateRandom(opts) {
    const rng = makeRng(opts.seed);
    const positiveCount = clamp(Math.round(opts.nodeCount * (1 - opts.blueRatio)), 0, opts.nodeCount);
    const outputs = [
      ...Array(positiveCount).fill(Math.abs(opts.outputMag)),
      ...Array(opts.nodeCount - positiveCount).fill(-Math.abs(opts.outputMag))
    ];
    rng.shuffle(outputs);

    const nodes = [];
    for (let id = 1; id <= opts.nodeCount; id++) {
      nodes.push(makeNode(rng, id, outputs[id - 1], opts));
    }

    const pairs = new Set();
    for (let fromId = 1; fromId <= opts.nodeCount; fromId++) {
      const maxPossible = Math.max(0, opts.nodeCount - 1);
      const minEdges = Math.min(opts.edgesMin, maxPossible);
      const maxEdges = Math.min(opts.edgesMax, maxPossible);
      const k = maxEdges <= 0 ? 0 : rng.int(minEdges, maxEdges);
      const candidates = [];
      for (let toId = 1; toId <= opts.nodeCount; toId++) {
        if (toId !== fromId) candidates.push(toId);
      }
      rng.shuffle(candidates);
      for (const toId of candidates.slice(0, k)) addPair(pairs, fromId, toId);
    }

    return { version: 2, nodes, edges: buildEdges(rng, pairs, opts) };
  }

  function generateBackbone(opts) {
    const rng = makeRng(opts.seed);
    const ids = Array.from({ length: opts.nodeCount }, (_, i) => i + 1);
    rng.shuffle(ids);

    const chainLength = opts.nodeCount <= 1
      ? opts.nodeCount
      : clamp(Math.max(3, Math.floor(opts.nodeCount * 0.6)), 3, opts.nodeCount);
    const backbone = ids.slice(0, chainLength);
    const backboneIds = new Set(backbone);
    const nodes = [];

    for (let id = 1; id <= opts.nodeCount; id++) {
      const output = backboneIds.has(id)
        ? Math.abs(opts.outputMag)
        : (rng.random() < opts.blueRatio ? -Math.abs(opts.outputMag) : Math.abs(opts.outputMag));
      nodes.push(makeNode(rng, id, output, { ...opts, thresholdMin: 1, thresholdMax: 1 }));
    }

    const pairs = new Set();
    for (let i = 0; i < backbone.length - 1; i++) {
      addPair(pairs, backbone[i], backbone[i + 1]);
    }

    const outCount = new Map();
    for (let id = 1; id <= opts.nodeCount; id++) outCount.set(id, 0);
    for (const key of pairs) {
      const fromId = Number(key.split("->")[0]);
      outCount.set(fromId, (outCount.get(fromId) || 0) + 1);
    }

    for (let fromId = 1; fromId <= opts.nodeCount; fromId++) {
      if (opts.nodeCount <= 1) break;
      if ((outCount.get(fromId) || 0) > 0) continue;
      let toId = fromId;
      while (toId === fromId) toId = rng.int(1, opts.nodeCount);
      if (addPair(pairs, fromId, toId)) outCount.set(fromId, (outCount.get(fromId) || 0) + 1);
    }

    const targetTotal = pairs.size + opts.extraEdges;
    const maxAttempts = Math.max(2000, opts.extraEdges * 200);
    let attempts = 0;
    while (pairs.size < targetTotal && attempts < maxAttempts) {
      attempts++;
      addPair(pairs, rng.int(1, opts.nodeCount), rng.int(1, opts.nodeCount));
    }

    return { version: 2, nodes, edges: buildEdges(rng, pairs, opts) };
  }

  function generateGraph(rawOptions) {
    const opts = sanitizeOptions(rawOptions);
    return opts.mode === "backbone" ? generateBackbone(opts) : generateRandom(opts);
  }

  window.GraphGenerator = {
    generateGraph,
    sanitizeOptions
  };
})();
