#!/usr/bin/env python3
import argparse
import json
import random
from pathlib import Path
from typing import Dict, List, Set, Tuple


def rfloat(rng: random.Random, a: float, b: float) -> float:
    return a + (b - a) * rng.random()


def clamp_int(x: int, lo: int, hi: int) -> int:
    return max(lo, min(hi, x))


def add_edge_unique(pairs: Set[Tuple[int, int]], a: int, b: int) -> bool:
    if a == b:
        return False
    if (a, b) in pairs:
        return False
    pairs.add((a, b))
    return True


def generate_graph(
    rng: random.Random,
    n_nodes: int,
    canvas_w: int,
    canvas_h: int,
    extra_edges: int,
    pos_frac: float,
    weight_min: int,
    weight_max: int,
) -> Dict:
    ids = list(range(1, n_nodes + 1))
    rng.shuffle(ids)

    # backbone chain (guarantees propagation)
    chain_len = clamp_int(max(3, int(n_nodes * 0.6)), 3, n_nodes)
    backbone = ids[:chain_len]

    nodes: List[Dict] = []
    for nid in range(1, n_nodes + 1):
        threshold = 1.0          # allow single +1 to trigger
        charge = 0.0
        output = 1.0 if nid in backbone else (1.0 if rng.random() < pos_frac else -1.0)
        frequency = 0.0 if rng.random() < 0.5 else float(rng.choice([110, 220, 330, 440, 550, 660, 880]))

        nodes.append({
            "id": nid,
            "x": round(rfloat(rng, 20, canvas_w - 20), 2),
            "y": round(rfloat(rng, 20, canvas_h - 20), 2),
            "output": output,
            "frequency": frequency,
            "threshold": threshold,
            "charge": charge,
        })

    pairs: Set[Tuple[int, int]] = set()

    # chain edges
    for a, b in zip(backbone, backbone[1:]):
        add_edge_unique(pairs, a, b)

    # ensure at least 1 outgoing edge from every node (avoid dead ends)
    out_count = {nid: 0 for nid in range(1, n_nodes + 1)}
    for a, _ in pairs:
        out_count[a] += 1

    for nid in range(1, n_nodes + 1):
        if out_count[nid] > 0:
            continue
        target = nid
        while target == nid:
            target = rng.randint(1, n_nodes)
        if add_edge_unique(pairs, nid, target):
            out_count[nid] += 1

    # add exactly extra_edges edges (bounded attempts)
    target_total = len(pairs) + max(0, extra_edges)
    attempts = 0
    max_attempts = max(2000, extra_edges * 200)

    while len(pairs) < target_total and attempts < max_attempts:
        attempts += 1
        a = rng.randint(1, n_nodes)
        b = rng.randint(1, n_nodes)
        add_edge_unique(pairs, a, b)

    edges: List[Dict] = []
    eid = 1
    for a, b in sorted(pairs):
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

    ap.add_argument("--nodes-min", type=int, default=99)
    ap.add_argument("--nodes-max", type=int, default=99)
    ap.add_argument("--extra-edges-min", type=int, default=100)
    ap.add_argument("--extra-edges-max", type=int, default=400)

    ap.add_argument("--canvas-w", type=int, default=2200)
    ap.add_argument("--canvas-h", type=int, default=2200)

    ap.add_argument("--pos-frac", type=float, default=0.00)
    ap.add_argument("--weight-min", type=int, default=1)
    ap.add_argument("--weight-max", type=int, default=3)

    args = ap.parse_args()

    outdir = Path(args.outdir)
    outdir.mkdir(parents=True, exist_ok=True)

    base_seed = args.seed if args.seed is not None else random.randrange(1 << 30)

    nodes_lo, nodes_hi = sorted([args.nodes_min, args.nodes_max])
    extra_lo, extra_hi = sorted([args.extra_edges_min, args.extra_edges_max])
    wmin, wmax = sorted([max(1, args.weight_min), max(1, args.weight_max)])

    for i in range(args.count):
        rng = random.Random(base_seed + i)
        n_nodes = rng.randint(nodes_lo, nodes_hi)
        extra_edges = rng.randint(extra_lo, extra_hi)

        graph = generate_graph(
            rng=rng,
            n_nodes=n_nodes,
            canvas_w=args.canvas_w,
            canvas_h=args.canvas_h,
            extra_edges=extra_edges,
            pos_frac=args.pos_frac,
            weight_min=wmin,
            weight_max=wmax,
        )

        path = outdir / f"{args.prefix}_{i:03d}.json"
        path.write_text(json.dumps(graph, ensure_ascii=False, indent=2), encoding="utf-8")


if __name__ == "__main__":
    main()
