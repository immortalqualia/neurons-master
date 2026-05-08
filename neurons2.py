#!/usr/bin/env python3
# Random JSON graph generator (version: 2)
# - Generate N nodes randomly on canvas (W x H)
# - Assign outputs by ratio: pos_ratio positives, rest negatives
# - For each node: create random number of outgoing edges in [edges_min, edges_max]
# - Always writes files to outdir

import argparse
import json
import random
from pathlib import Path
from typing import Dict, List, Set, Tuple


def clamp01(x: float) -> float:
    return max(0.0, min(1.0, x))


def rfloat(rng: random.Random, a: float, b: float) -> float:
    return a + (b - a) * rng.random()


def gen_outputs(rng: random.Random, n: int, pos_ratio: float, mag: float) -> List[float]:
    pos_ratio = clamp01(pos_ratio)
    pos_count = int(round(n * pos_ratio))
    pos_count = max(0, min(n, pos_count))
    neg_count = n - pos_count
    outs = ([+abs(mag)] * pos_count) + ([-abs(mag)] * neg_count)
    rng.shuffle(outs)
    return outs


def generate_graph(
    rng: random.Random,
    n_nodes: int,
    canvas_w: int,
    canvas_h: int,
    pos_ratio: float,
    output_mag: float,
    edges_min: int,
    edges_max: int,
    weight_min: int,
    weight_max: int,
    threshold_min: float,
    threshold_max: float,
    freq_mute_prob: float,
) -> Dict:
    n_nodes = max(1, n_nodes)
    edges_min = max(0, edges_min)
    edges_max = max(edges_min, edges_max)
    weight_min = max(1, weight_min)
    weight_max = max(weight_min, weight_max)

    margin = 20.0

    outputs = gen_outputs(rng, n_nodes, pos_ratio, output_mag)

    nodes: List[Dict] = []
    for i in range(1, n_nodes + 1):
        thr = rfloat(rng, threshold_min, threshold_max)
        thr = max(1e-6, thr)

        freq = 0.0
        if rng.random() >= clamp01(freq_mute_prob):
            freq = float(rng.choice([110, 220, 330, 440, 550, 660, 880]))

        nodes.append({
            "id": i,
            "x": round(rfloat(rng, margin, max(margin, canvas_w - margin)), 2),
            "y": round(rfloat(rng, margin, max(margin, canvas_h - margin)), 2),
            "output": float(outputs[i - 1]),
            "frequency": freq,
            "threshold": round(thr, 6),
            "charge": 0.0,
        })

    # edges: for each node choose k targets in [edges_min, edges_max]
    pairs: Set[Tuple[int, int]] = set()
    for from_id in range(1, n_nodes + 1):
        max_possible = max(0, n_nodes - 1)
        k = rng.randint(edges_min, min(edges_max, max_possible))
        if k <= 0:
            continue

        candidates = list(range(1, n_nodes + 1))
        candidates.remove(from_id)
        rng.shuffle(candidates)

        chosen = candidates[:k]
        for to_id in chosen:
            pairs.add((from_id, to_id))

    edges: List[Dict] = []
    eid = 1
    for (a, b) in sorted(pairs):
        edges.append({
            "id": eid,
            "fromId": a,
            "toId": b,
            "weight": int(rng.randint(weight_min, weight_max)),
        })
        eid += 1

    return {"version": 2, "nodes": nodes, "edges": edges}


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--count", type=int, default=1)
    ap.add_argument("--outdir", type=str, default="graphs_out")
    ap.add_argument("--prefix", type=str, default="graph")
    ap.add_argument("--seed", type=int, default=None)

    ap.add_argument("--nodes", type=int, default=222)
    ap.add_argument("--canvas-w", type=int, default=2200)
    ap.add_argument("--canvas-h", type=int, default=2200)

    ap.add_argument("--pos-ratio", type=float, default=0.6, help="fraction of positive (red) nodes: 0..1")
    ap.add_argument("--output-mag", type=float, default=1.0, help="magnitude for output (+mag/-mag)")

    ap.add_argument("--edges-min", type=int, default=1, help="min outgoing edges per node")
    ap.add_argument("--edges-max", type=int, default=3, help="max outgoing edges per node")

    ap.add_argument("--weight-min", type=int, default=1)
    ap.add_argument("--weight-max", type=int, default=3)

    ap.add_argument("--threshold-min", type=float, default=1.0)
    ap.add_argument("--threshold-max", type=float, default=1.0)

    ap.add_argument("--mute-prob", type=float, default=0.5, help="probability frequency=0.0")

    args = ap.parse_args()

    outdir = Path(args.outdir)
    outdir.mkdir(parents=True, exist_ok=True)

    base_seed = args.seed if args.seed is not None else random.randrange(1 << 30)

    for i in range(max(1, args.count)):
        rng = random.Random(base_seed + i)
        g = generate_graph(
            rng=rng,
            n_nodes=args.nodes,
            canvas_w=args.canvas_w,
            canvas_h=args.canvas_h,
            pos_ratio=args.pos_ratio,
            output_mag=args.output_mag,
            edges_min=args.edges_min,
            edges_max=args.edges_max,
            weight_min=args.weight_min,
            weight_max=args.weight_max,
            threshold_min=min(args.threshold_min, args.threshold_max),
            threshold_max=max(args.threshold_min, args.threshold_max),
            freq_mute_prob=args.mute_prob,
        )
        path = outdir / f"{args.prefix}_{i:03d}.json"
        path.write_text(json.dumps(g, ensure_ascii=False, indent=2), encoding="utf-8")


if __name__ == "__main__":
    main()
