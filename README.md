# Signal Graph

An interactive pulse-based graph automaton that runs entirely in the browser.

Signal Graph is somewhere between a cellular automaton, a threshold logic network, and a visual signal playground. Nodes live on a directed graph. An active node emits a one-tick pulse through its outgoing edges. A receiving node sums incoming pulses and activates on the next tick if the sum reaches its threshold.

## Demo

GitHub Pages:

```text
https://immortalqualia.github.io/neurons-master/
```

## Core Rules

- Red nodes emit `+1`.
- Blue nodes emit `-1`.
- Each node has a `threshold`.
- The engine updates synchronously on a global tick.
- Active nodes last for one tick.
- Loops, thresholds, and feedback create rhythms, memory, counters, and phase coincidences.

On each tick:

```text
input(node) = sum of signals from active incoming nodes
node activates if input(node) >= threshold(node)
```

The automaton has no hidden per-node memory by default. Persistent behavior emerges from the graph structure itself.

## Features

- Manual graph editing
- Directed signal edges
- Excitatory and inhibitory nodes
- Threshold logic
- Synchronous pulse engine
- Preset graph library
- Random graph generator
- JSON save/load
- Dark UI

## Controls

- Click empty space: create a node
- Click a node: activate it
- Shift + click a node, then release on another node: create an edge
- Delete / Backspace: delete the hovered node
- Save / Load: export or import graph JSON

## Presets

The project includes several bundled presets:

- `Counter` - a larger threshold counter patch
- `1bit` - a one-bit memory cell
- `3bit Ripple Counter` - a three-bit counter built from `1bit` cells

Other presets are included as experiments with loops, phase interactions, and graph rhythm.

## Local Usage

Open `index.html` in a browser.

No build step is required for local use.

## GitHub Pages

This project is static and can be hosted directly on GitHub Pages. Put the files in a public repository and enable Pages for the branch that contains `index.html`.
