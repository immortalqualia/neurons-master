window.PRESET_LIBRARY = [
  {
    "name": "Three Engines One Key",
    "file": "three-engines-one-key.json",
    "description": "One top-left trigger starts 3, 5, and 7 step loops with light blue braking.",
    "graph": {
      "version": 2,
      "preset": {
        "name": "Three Engines One Key",
        "description": "One top-left trigger starts 3, 5, and 7 step loops with light blue braking."
      },
      "nodes": [
        {
          "id": 1,
          "x": 70,
          "y": 70,
          "polarity": 1,
          "frequency": 180,
          "threshold": 3,
          "charge": 0
        },
        {
          "id": 2,
          "x": 240,
          "y": 170,
          "polarity": 1,
          "frequency": 180,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 3,
          "x": 330,
          "y": 250,
          "polarity": 1,
          "frequency": 270,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 4,
          "x": 260,
          "y": 350,
          "polarity": 1,
          "frequency": 360,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 5,
          "x": 510,
          "y": 130,
          "polarity": 1,
          "frequency": 225,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 6,
          "x": 620,
          "y": 190,
          "polarity": 1,
          "frequency": 300,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 7,
          "x": 650,
          "y": 320,
          "polarity": 1,
          "frequency": 450,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 8,
          "x": 520,
          "y": 390,
          "polarity": 1,
          "frequency": 600,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 9,
          "x": 430,
          "y": 270,
          "polarity": 1,
          "frequency": 375,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 10,
          "x": 260,
          "y": 610,
          "polarity": 1,
          "frequency": 160,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 11,
          "x": 370,
          "y": 690,
          "polarity": 1,
          "frequency": 240,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 12,
          "x": 500,
          "y": 700,
          "polarity": 1,
          "frequency": 320,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 13,
          "x": 620,
          "y": 625,
          "polarity": 1,
          "frequency": 480,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 14,
          "x": 650,
          "y": 500,
          "polarity": 1,
          "frequency": 640,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 15,
          "x": 525,
          "y": 450,
          "polarity": 1,
          "frequency": 400,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 16,
          "x": 390,
          "y": 505,
          "polarity": 1,
          "frequency": 266.67,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 17,
          "x": 820,
          "y": 230,
          "polarity": -1,
          "frequency": 520,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 18,
          "x": 820,
          "y": 360,
          "polarity": -1,
          "frequency": 390,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 19,
          "x": 780,
          "y": 520,
          "polarity": -1,
          "frequency": 260,
          "threshold": 1,
          "charge": 0
        }
      ],
      "edges": [
        {
          "id": 1,
          "fromId": 1,
          "toId": 2
        },
        {
          "id": 2,
          "fromId": 1,
          "toId": 5
        },
        {
          "id": 3,
          "fromId": 1,
          "toId": 10
        },
        {
          "id": 4,
          "fromId": 2,
          "toId": 3
        },
        {
          "id": 5,
          "fromId": 3,
          "toId": 4
        },
        {
          "id": 6,
          "fromId": 4,
          "toId": 2
        },
        {
          "id": 7,
          "fromId": 5,
          "toId": 6
        },
        {
          "id": 8,
          "fromId": 6,
          "toId": 7
        },
        {
          "id": 9,
          "fromId": 7,
          "toId": 8
        },
        {
          "id": 10,
          "fromId": 8,
          "toId": 9
        },
        {
          "id": 11,
          "fromId": 9,
          "toId": 5
        },
        {
          "id": 12,
          "fromId": 10,
          "toId": 11
        },
        {
          "id": 13,
          "fromId": 11,
          "toId": 12
        },
        {
          "id": 14,
          "fromId": 12,
          "toId": 13
        },
        {
          "id": 15,
          "fromId": 13,
          "toId": 14
        },
        {
          "id": 16,
          "fromId": 14,
          "toId": 15
        },
        {
          "id": 17,
          "fromId": 15,
          "toId": 16
        },
        {
          "id": 18,
          "fromId": 16,
          "toId": 10
        },
        {
          "id": 19,
          "fromId": 4,
          "toId": 17
        },
        {
          "id": 20,
          "fromId": 17,
          "toId": 8
        },
        {
          "id": 21,
          "fromId": 9,
          "toId": 18
        },
        {
          "id": 22,
          "fromId": 18,
          "toId": 12
        },
        {
          "id": 23,
          "fromId": 16,
          "toId": 19
        },
        {
          "id": 24,
          "fromId": 19,
          "toId": 3
        }
      ]
    }
  },
  {
    "name": "Prime Drift Manual",
    "file": "prime-drift-manual.json",
    "description": "5, 7, and 8 step circuits tuned in separated registers, started from one key node.",
    "graph": {
      "version": 2,
      "preset": {
        "name": "Prime Drift Manual",
        "description": "5, 7, and 8 step circuits tuned in separated registers, started from one key node."
      },
      "nodes": [
        {
          "id": 1,
          "x": 70,
          "y": 70,
          "polarity": 1,
          "frequency": 132,
          "threshold": 3,
          "charge": 0
        },
        {
          "id": 2,
          "x": 210,
          "y": 165,
          "polarity": 1,
          "frequency": 132,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 3,
          "x": 310,
          "y": 145,
          "polarity": 1,
          "frequency": 198,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 4,
          "x": 390,
          "y": 215,
          "polarity": 1,
          "frequency": 264,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 5,
          "x": 350,
          "y": 320,
          "polarity": 1,
          "frequency": 396,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 6,
          "x": 235,
          "y": 315,
          "polarity": 1,
          "frequency": 528,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 7,
          "x": 600,
          "y": 145,
          "polarity": 1,
          "frequency": 176,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 8,
          "x": 710,
          "y": 175,
          "polarity": 1,
          "frequency": 264,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 9,
          "x": 770,
          "y": 275,
          "polarity": 1,
          "frequency": 352,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 10,
          "x": 730,
          "y": 390,
          "polarity": 1,
          "frequency": 528,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 11,
          "x": 610,
          "y": 430,
          "polarity": 1,
          "frequency": 704,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 12,
          "x": 510,
          "y": 350,
          "polarity": 1,
          "frequency": 440,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 13,
          "x": 505,
          "y": 220,
          "polarity": 1,
          "frequency": 330,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 14,
          "x": 230,
          "y": 620,
          "polarity": 1,
          "frequency": 110,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 15,
          "x": 335,
          "y": 700,
          "polarity": 1,
          "frequency": 165,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 16,
          "x": 470,
          "y": 715,
          "polarity": 1,
          "frequency": 220,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 17,
          "x": 590,
          "y": 650,
          "polarity": 1,
          "frequency": 330,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 18,
          "x": 650,
          "y": 520,
          "polarity": 1,
          "frequency": 440,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 19,
          "x": 575,
          "y": 410,
          "polarity": 1,
          "frequency": 660,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 20,
          "x": 430,
          "y": 405,
          "polarity": 1,
          "frequency": 550,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 21,
          "x": 295,
          "y": 480,
          "polarity": 1,
          "frequency": 275,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 22,
          "x": 840,
          "y": 610,
          "polarity": -1,
          "frequency": 247,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 23,
          "x": 815,
          "y": 730,
          "polarity": -1,
          "frequency": 370,
          "threshold": 1,
          "charge": 0
        }
      ],
      "edges": [
        {
          "id": 1,
          "fromId": 1,
          "toId": 2
        },
        {
          "id": 2,
          "fromId": 1,
          "toId": 7
        },
        {
          "id": 3,
          "fromId": 1,
          "toId": 14
        },
        {
          "id": 4,
          "fromId": 2,
          "toId": 3
        },
        {
          "id": 5,
          "fromId": 3,
          "toId": 4
        },
        {
          "id": 6,
          "fromId": 4,
          "toId": 5
        },
        {
          "id": 7,
          "fromId": 5,
          "toId": 6
        },
        {
          "id": 8,
          "fromId": 6,
          "toId": 2
        },
        {
          "id": 9,
          "fromId": 7,
          "toId": 8
        },
        {
          "id": 10,
          "fromId": 8,
          "toId": 9
        },
        {
          "id": 11,
          "fromId": 9,
          "toId": 10
        },
        {
          "id": 12,
          "fromId": 10,
          "toId": 11
        },
        {
          "id": 13,
          "fromId": 11,
          "toId": 12
        },
        {
          "id": 14,
          "fromId": 12,
          "toId": 13
        },
        {
          "id": 15,
          "fromId": 13,
          "toId": 7
        },
        {
          "id": 16,
          "fromId": 14,
          "toId": 15
        },
        {
          "id": 17,
          "fromId": 15,
          "toId": 16
        },
        {
          "id": 18,
          "fromId": 16,
          "toId": 17
        },
        {
          "id": 19,
          "fromId": 17,
          "toId": 18
        },
        {
          "id": 20,
          "fromId": 18,
          "toId": 19
        },
        {
          "id": 21,
          "fromId": 19,
          "toId": 20
        },
        {
          "id": 22,
          "fromId": 20,
          "toId": 21
        },
        {
          "id": 23,
          "fromId": 21,
          "toId": 14
        },
        {
          "id": 24,
          "fromId": 6,
          "toId": 13
        },
        {
          "id": 25,
          "fromId": 13,
          "toId": 2
        },
        {
          "id": 26,
          "fromId": 11,
          "toId": 20
        },
        {
          "id": 27,
          "fromId": 20,
          "toId": 7
        },
        {
          "id": 28,
          "fromId": 18,
          "toId": 22
        },
        {
          "id": 29,
          "fromId": 22,
          "toId": 4
        },
        {
          "id": 30,
          "fromId": 21,
          "toId": 23
        },
        {
          "id": 31,
          "fromId": 23,
          "toId": 10
        }
      ]
    }
  },
  {
    "name": "Glass Ratchet Key",
    "file": "glass-ratchet-key.json",
    "description": "A compact 4/6/9 ratchet with high shimmer and explicit top-left entry.",
    "graph": {
      "version": 2,
      "preset": {
        "name": "Glass Ratchet Key",
        "description": "A compact 4/6/9 ratchet with high shimmer and explicit top-left entry."
      },
      "nodes": [
        {
          "id": 1,
          "x": 70,
          "y": 70,
          "polarity": 1,
          "frequency": 220,
          "threshold": 3,
          "charge": 0
        },
        {
          "id": 2,
          "x": 220,
          "y": 180,
          "polarity": 1,
          "frequency": 220,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 3,
          "x": 310,
          "y": 250,
          "polarity": 1,
          "frequency": 330,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 4,
          "x": 245,
          "y": 350,
          "polarity": 1,
          "frequency": 440,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 5,
          "x": 145,
          "y": 285,
          "polarity": 1,
          "frequency": 550,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 6,
          "x": 520,
          "y": 150,
          "polarity": 1,
          "frequency": 275,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 7,
          "x": 650,
          "y": 190,
          "polarity": 1,
          "frequency": 412.5,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 8,
          "x": 720,
          "y": 310,
          "polarity": 1,
          "frequency": 550,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 9,
          "x": 660,
          "y": 445,
          "polarity": 1,
          "frequency": 825,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 10,
          "x": 520,
          "y": 485,
          "polarity": 1,
          "frequency": 687.5,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 11,
          "x": 410,
          "y": 380,
          "polarity": 1,
          "frequency": 343.75,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 12,
          "x": 210,
          "y": 625,
          "polarity": 1,
          "frequency": 146.67,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 13,
          "x": 320,
          "y": 710,
          "polarity": 1,
          "frequency": 220,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 14,
          "x": 455,
          "y": 735,
          "polarity": 1,
          "frequency": 293.33,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 15,
          "x": 590,
          "y": 690,
          "polarity": 1,
          "frequency": 440,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 16,
          "x": 690,
          "y": 580,
          "polarity": 1,
          "frequency": 586.67,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 17,
          "x": 710,
          "y": 445,
          "polarity": 1,
          "frequency": 880,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 18,
          "x": 620,
          "y": 330,
          "polarity": 1,
          "frequency": 733.33,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 19,
          "x": 480,
          "y": 300,
          "polarity": 1,
          "frequency": 366.67,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 20,
          "x": 345,
          "y": 370,
          "polarity": 1,
          "frequency": 244.44,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 21,
          "x": 855,
          "y": 250,
          "polarity": -1,
          "frequency": 660,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 22,
          "x": 850,
          "y": 420,
          "polarity": -1,
          "frequency": 495,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 23,
          "x": 820,
          "y": 590,
          "polarity": -1,
          "frequency": 330,
          "threshold": 1,
          "charge": 0
        },
        {
          "id": 24,
          "x": 735,
          "y": 760,
          "polarity": -1,
          "frequency": 247.5,
          "threshold": 1,
          "charge": 0
        }
      ],
      "edges": [
        {
          "id": 1,
          "fromId": 1,
          "toId": 2
        },
        {
          "id": 2,
          "fromId": 1,
          "toId": 6
        },
        {
          "id": 3,
          "fromId": 1,
          "toId": 12
        },
        {
          "id": 4,
          "fromId": 2,
          "toId": 3
        },
        {
          "id": 5,
          "fromId": 3,
          "toId": 4
        },
        {
          "id": 6,
          "fromId": 4,
          "toId": 5
        },
        {
          "id": 7,
          "fromId": 5,
          "toId": 2
        },
        {
          "id": 8,
          "fromId": 6,
          "toId": 7
        },
        {
          "id": 9,
          "fromId": 7,
          "toId": 8
        },
        {
          "id": 10,
          "fromId": 8,
          "toId": 9
        },
        {
          "id": 11,
          "fromId": 9,
          "toId": 10
        },
        {
          "id": 12,
          "fromId": 10,
          "toId": 11
        },
        {
          "id": 13,
          "fromId": 11,
          "toId": 6
        },
        {
          "id": 14,
          "fromId": 12,
          "toId": 13
        },
        {
          "id": 15,
          "fromId": 13,
          "toId": 14
        },
        {
          "id": 16,
          "fromId": 14,
          "toId": 15
        },
        {
          "id": 17,
          "fromId": 15,
          "toId": 16
        },
        {
          "id": 18,
          "fromId": 16,
          "toId": 17
        },
        {
          "id": 19,
          "fromId": 17,
          "toId": 18
        },
        {
          "id": 20,
          "fromId": 18,
          "toId": 19
        },
        {
          "id": 21,
          "fromId": 19,
          "toId": 20
        },
        {
          "id": 22,
          "fromId": 20,
          "toId": 12
        },
        {
          "id": 23,
          "fromId": 5,
          "toId": 21
        },
        {
          "id": 24,
          "fromId": 21,
          "toId": 8
        },
        {
          "id": 25,
          "fromId": 10,
          "toId": 22
        },
        {
          "id": 26,
          "fromId": 22,
          "toId": 14
        },
        {
          "id": 27,
          "fromId": 18,
          "toId": 23
        },
        {
          "id": 28,
          "fromId": 23,
          "toId": 3
        },
        {
          "id": 29,
          "fromId": 20,
          "toId": 24
        },
        {
          "id": 30,
          "fromId": 24,
          "toId": 6
        },
        {
          "id": 31,
          "fromId": 4,
          "toId": 11
        },
        {
          "id": 32,
          "fromId": 11,
          "toId": 2
        },
        {
          "id": 33,
          "fromId": 16,
          "toId": 19
        }
      ]
    }
  },
  {
    "name": "Counter",
    "file": "counter.json",
    "description": "A larger threshold counter patch with rows, carry lines, and a reset-like blue inhibit stage.",
    "graph": {
      "version": 1,
      "nodes": [
        {
          "id": 6,
          "x": 495,
          "y": 414,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 7,
          "x": 533,
          "y": 415,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 8,
          "x": 572,
          "y": 414,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 9,
          "x": 607,
          "y": 412,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 10,
          "x": 653,
          "y": 413,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 11,
          "x": 697,
          "y": 414,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 12,
          "x": 736,
          "y": 415,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 13,
          "x": 779,
          "y": 415,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 15,
          "x": 488,
          "y": 453,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 16,
          "x": 531,
          "y": 451,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 17,
          "x": 570,
          "y": 451,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 18,
          "x": 610,
          "y": 451,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 19,
          "x": 652,
          "y": 451,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 20,
          "x": 697,
          "y": 448,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 21,
          "x": 736,
          "y": 451,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 22,
          "x": 782,
          "y": 451,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 24,
          "x": 492,
          "y": 495,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 25,
          "x": 536,
          "y": 493,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 26,
          "x": 576,
          "y": 493,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 27,
          "x": 617,
          "y": 491,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 28,
          "x": 657,
          "y": 489,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 29,
          "x": 699,
          "y": 488,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 30,
          "x": 740,
          "y": 486,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 31,
          "x": 786,
          "y": 487,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 33,
          "x": 493,
          "y": 534,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 34,
          "x": 538,
          "y": 534,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 35,
          "x": 576,
          "y": 535,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 36,
          "x": 620,
          "y": 533,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 37,
          "x": 656,
          "y": 532,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 38,
          "x": 700,
          "y": 532,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 39,
          "x": 744,
          "y": 530,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 40,
          "x": 784,
          "y": 528,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 48,
          "x": 456,
          "y": 570,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 49,
          "x": 489,
          "y": 567,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 50,
          "x": 537,
          "y": 566,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 51,
          "x": 574,
          "y": 568,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 52,
          "x": 617,
          "y": 573,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 53,
          "x": 650,
          "y": 567,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 54,
          "x": 695,
          "y": 568,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 55,
          "x": 736,
          "y": 571,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 56,
          "x": 776,
          "y": 571,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 58,
          "x": 448,
          "y": 532,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 59,
          "x": 452,
          "y": 487,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 60,
          "x": 454,
          "y": 453,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 62,
          "x": 202,
          "y": 327,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 64,
          "x": 209,
          "y": 234,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 65,
          "x": 208,
          "y": 277,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 66,
          "x": 273,
          "y": 275,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 67,
          "x": 270,
          "y": 327,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 69,
          "x": 143,
          "y": 325,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 70,
          "x": 139,
          "y": 275,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 72,
          "x": 448,
          "y": 413,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 74,
          "x": 367,
          "y": 319,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 76,
          "x": 420,
          "y": 319,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 78,
          "x": 472,
          "y": 318,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 79,
          "x": 476,
          "y": 267,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 83,
          "x": 423,
          "y": 259,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 84,
          "x": 71,
          "y": 60,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 87,
          "x": 933,
          "y": 479,
          "polarity": 1,
          "frequency": 0,
          "threshold": 3
        },
        {
          "id": 88,
          "x": 936,
          "y": 375,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 89,
          "x": 931,
          "y": 266,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 90,
          "x": 924,
          "y": 142,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 91,
          "x": 670,
          "y": 315,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 93,
          "x": 614,
          "y": 276,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 94,
          "x": 672,
          "y": 271,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 95,
          "x": 728,
          "y": 265,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 96,
          "x": 787,
          "y": 256,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 97,
          "x": 783,
          "y": 311,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 98,
          "x": 730,
          "y": 312,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 100,
          "x": 612,
          "y": 119,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 101,
          "x": 661,
          "y": 114,
          "polarity": 1,
          "frequency": 0,
          "threshold": 2
        },
        {
          "id": 102,
          "x": 723,
          "y": 115,
          "polarity": 1,
          "frequency": 0,
          "threshold": 3
        },
        {
          "id": 105,
          "x": 608,
          "y": 323,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 106,
          "x": 566,
          "y": 319,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 112,
          "x": 522,
          "y": 163,
          "polarity": -1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 114,
          "x": 370,
          "y": 256,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 115,
          "x": 144,
          "y": 228,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 117,
          "x": 875,
          "y": 304,
          "polarity": 1,
          "frequency": 0,
          "threshold": 2
        },
        {
          "id": 118,
          "x": 781,
          "y": 115,
          "polarity": 1,
          "frequency": 0,
          "threshold": 4
        },
        {
          "id": 119,
          "x": 691,
          "y": 45,
          "polarity": 1,
          "frequency": 0,
          "threshold": 4
        }
      ],
      "edges": [
        {
          "id": 7,
          "fromId": 6,
          "toId": 7
        },
        {
          "id": 8,
          "fromId": 7,
          "toId": 8
        },
        {
          "id": 9,
          "fromId": 8,
          "toId": 9
        },
        {
          "id": 10,
          "fromId": 9,
          "toId": 10
        },
        {
          "id": 11,
          "fromId": 10,
          "toId": 11
        },
        {
          "id": 12,
          "fromId": 11,
          "toId": 12
        },
        {
          "id": 13,
          "fromId": 12,
          "toId": 13
        },
        {
          "id": 15,
          "fromId": 15,
          "toId": 16
        },
        {
          "id": 17,
          "fromId": 16,
          "toId": 17
        },
        {
          "id": 18,
          "fromId": 17,
          "toId": 18
        },
        {
          "id": 19,
          "fromId": 18,
          "toId": 19
        },
        {
          "id": 20,
          "fromId": 19,
          "toId": 20
        },
        {
          "id": 21,
          "fromId": 20,
          "toId": 21
        },
        {
          "id": 22,
          "fromId": 21,
          "toId": 22
        },
        {
          "id": 25,
          "fromId": 24,
          "toId": 25
        },
        {
          "id": 26,
          "fromId": 25,
          "toId": 26
        },
        {
          "id": 27,
          "fromId": 26,
          "toId": 27
        },
        {
          "id": 28,
          "fromId": 27,
          "toId": 28
        },
        {
          "id": 29,
          "fromId": 28,
          "toId": 29
        },
        {
          "id": 30,
          "fromId": 29,
          "toId": 30
        },
        {
          "id": 31,
          "fromId": 30,
          "toId": 31
        },
        {
          "id": 34,
          "fromId": 33,
          "toId": 34
        },
        {
          "id": 35,
          "fromId": 34,
          "toId": 35
        },
        {
          "id": 36,
          "fromId": 35,
          "toId": 36
        },
        {
          "id": 37,
          "fromId": 36,
          "toId": 37
        },
        {
          "id": 38,
          "fromId": 37,
          "toId": 38
        },
        {
          "id": 39,
          "fromId": 38,
          "toId": 39
        },
        {
          "id": 40,
          "fromId": 39,
          "toId": 40
        },
        {
          "id": 49,
          "fromId": 48,
          "toId": 49
        },
        {
          "id": 50,
          "fromId": 49,
          "toId": 50
        },
        {
          "id": 51,
          "fromId": 50,
          "toId": 51
        },
        {
          "id": 52,
          "fromId": 51,
          "toId": 52
        },
        {
          "id": 53,
          "fromId": 52,
          "toId": 53
        },
        {
          "id": 54,
          "fromId": 53,
          "toId": 54
        },
        {
          "id": 55,
          "fromId": 54,
          "toId": 55
        },
        {
          "id": 56,
          "fromId": 55,
          "toId": 56
        },
        {
          "id": 57,
          "fromId": 58,
          "toId": 33
        },
        {
          "id": 58,
          "fromId": 60,
          "toId": 15
        },
        {
          "id": 59,
          "fromId": 59,
          "toId": 24
        },
        {
          "id": 62,
          "fromId": 64,
          "toId": 65
        },
        {
          "id": 63,
          "fromId": 65,
          "toId": 66
        },
        {
          "id": 64,
          "fromId": 66,
          "toId": 67
        },
        {
          "id": 65,
          "fromId": 67,
          "toId": 62
        },
        {
          "id": 70,
          "fromId": 69,
          "toId": 70
        },
        {
          "id": 73,
          "fromId": 62,
          "toId": 69
        },
        {
          "id": 74,
          "fromId": 62,
          "toId": 59
        },
        {
          "id": 75,
          "fromId": 78,
          "toId": 76
        },
        {
          "id": 76,
          "fromId": 76,
          "toId": 74
        },
        {
          "id": 80,
          "fromId": 79,
          "toId": 78
        },
        {
          "id": 81,
          "fromId": 76,
          "toId": 60
        },
        {
          "id": 82,
          "fromId": 76,
          "toId": 58
        },
        {
          "id": 88,
          "fromId": 83,
          "toId": 79
        },
        {
          "id": 89,
          "fromId": 84,
          "toId": 69
        },
        {
          "id": 93,
          "fromId": 84,
          "toId": 74
        },
        {
          "id": 94,
          "fromId": 40,
          "toId": 87
        },
        {
          "id": 95,
          "fromId": 31,
          "toId": 87
        },
        {
          "id": 96,
          "fromId": 22,
          "toId": 87
        },
        {
          "id": 97,
          "fromId": 87,
          "toId": 88
        },
        {
          "id": 98,
          "fromId": 88,
          "toId": 89
        },
        {
          "id": 99,
          "fromId": 89,
          "toId": 90
        },
        {
          "id": 100,
          "fromId": 97,
          "toId": 98
        },
        {
          "id": 101,
          "fromId": 98,
          "toId": 91
        },
        {
          "id": 104,
          "fromId": 93,
          "toId": 94
        },
        {
          "id": 105,
          "fromId": 94,
          "toId": 95
        },
        {
          "id": 106,
          "fromId": 95,
          "toId": 96
        },
        {
          "id": 107,
          "fromId": 96,
          "toId": 97
        },
        {
          "id": 108,
          "fromId": 93,
          "toId": 100
        },
        {
          "id": 109,
          "fromId": 94,
          "toId": 101
        },
        {
          "id": 110,
          "fromId": 93,
          "toId": 101
        },
        {
          "id": 111,
          "fromId": 93,
          "toId": 102
        },
        {
          "id": 113,
          "fromId": 94,
          "toId": 102
        },
        {
          "id": 115,
          "fromId": 95,
          "toId": 102
        },
        {
          "id": 118,
          "fromId": 90,
          "toId": 97
        },
        {
          "id": 119,
          "fromId": 91,
          "toId": 105
        },
        {
          "id": 120,
          "fromId": 105,
          "toId": 106
        },
        {
          "id": 121,
          "fromId": 106,
          "toId": 93
        },
        {
          "id": 122,
          "fromId": 106,
          "toId": 101
        },
        {
          "id": 123,
          "fromId": 105,
          "toId": 101
        },
        {
          "id": 124,
          "fromId": 91,
          "toId": 101
        },
        {
          "id": 125,
          "fromId": 98,
          "toId": 101
        },
        {
          "id": 126,
          "fromId": 97,
          "toId": 101
        },
        {
          "id": 127,
          "fromId": 96,
          "toId": 101
        },
        {
          "id": 128,
          "fromId": 95,
          "toId": 101
        },
        {
          "id": 129,
          "fromId": 96,
          "toId": 102
        },
        {
          "id": 130,
          "fromId": 97,
          "toId": 102
        },
        {
          "id": 131,
          "fromId": 98,
          "toId": 102
        },
        {
          "id": 132,
          "fromId": 91,
          "toId": 102
        },
        {
          "id": 133,
          "fromId": 105,
          "toId": 102
        },
        {
          "id": 134,
          "fromId": 106,
          "toId": 102
        },
        {
          "id": 140,
          "fromId": 94,
          "toId": 100
        },
        {
          "id": 141,
          "fromId": 95,
          "toId": 100
        },
        {
          "id": 142,
          "fromId": 96,
          "toId": 100
        },
        {
          "id": 143,
          "fromId": 106,
          "toId": 100
        },
        {
          "id": 144,
          "fromId": 105,
          "toId": 100
        },
        {
          "id": 145,
          "fromId": 91,
          "toId": 100
        },
        {
          "id": 146,
          "fromId": 98,
          "toId": 100
        },
        {
          "id": 147,
          "fromId": 97,
          "toId": 100
        },
        {
          "id": 161,
          "fromId": 112,
          "toId": 106
        },
        {
          "id": 162,
          "fromId": 112,
          "toId": 93
        },
        {
          "id": 163,
          "fromId": 112,
          "toId": 105
        },
        {
          "id": 164,
          "fromId": 112,
          "toId": 94
        },
        {
          "id": 165,
          "fromId": 112,
          "toId": 91
        },
        {
          "id": 166,
          "fromId": 112,
          "toId": 95
        },
        {
          "id": 167,
          "fromId": 112,
          "toId": 98
        },
        {
          "id": 168,
          "fromId": 112,
          "toId": 96
        },
        {
          "id": 169,
          "fromId": 112,
          "toId": 97
        },
        {
          "id": 170,
          "fromId": 74,
          "toId": 114
        },
        {
          "id": 171,
          "fromId": 114,
          "toId": 83
        },
        {
          "id": 172,
          "fromId": 70,
          "toId": 115
        },
        {
          "id": 173,
          "fromId": 115,
          "toId": 64
        },
        {
          "id": 174,
          "fromId": 72,
          "toId": 6
        },
        {
          "id": 175,
          "fromId": 90,
          "toId": 117
        },
        {
          "id": 176,
          "fromId": 96,
          "toId": 117
        },
        {
          "id": 177,
          "fromId": 117,
          "toId": 90
        },
        {
          "id": 178,
          "fromId": 93,
          "toId": 118
        },
        {
          "id": 179,
          "fromId": 94,
          "toId": 118
        },
        {
          "id": 180,
          "fromId": 95,
          "toId": 118
        },
        {
          "id": 181,
          "fromId": 96,
          "toId": 118
        },
        {
          "id": 182,
          "fromId": 106,
          "toId": 118
        },
        {
          "id": 183,
          "fromId": 105,
          "toId": 118
        },
        {
          "id": 184,
          "fromId": 91,
          "toId": 118
        },
        {
          "id": 185,
          "fromId": 98,
          "toId": 118
        },
        {
          "id": 186,
          "fromId": 97,
          "toId": 118
        },
        {
          "id": 187,
          "fromId": 100,
          "toId": 119
        },
        {
          "id": 188,
          "fromId": 101,
          "toId": 119
        },
        {
          "id": 189,
          "fromId": 102,
          "toId": 119
        },
        {
          "id": 190,
          "fromId": 118,
          "toId": 119
        },
        {
          "id": 191,
          "fromId": 119,
          "toId": 112
        }
      ]
    }
  },
  {
    "name": "Phase Gate Bloom",
    "file": "phase-gate-bloom.json",
    "description": "Two unequal loops only open a bright phrase when their phases meet; a blue pulse briefly shuts the gate after each bloom.",
    "graph": {
      "version": 2,
      "preset": {
        "name": "Phase Gate Bloom",
        "description": "Two unequal loops only open a bright phrase when their phases meet; a blue pulse briefly shuts the gate after each bloom."
      },
      "nodes": [
        {
          "id": 1,
          "x": 70,
          "y": 70,
          "polarity": 1,
          "frequency": 180,
          "threshold": 1
        },
        {
          "id": 2,
          "x": 190,
          "y": 150,
          "polarity": 1,
          "frequency": 180,
          "threshold": 1
        },
        {
          "id": 3,
          "x": 270,
          "y": 230,
          "polarity": 1,
          "frequency": 270,
          "threshold": 1
        },
        {
          "id": 4,
          "x": 190,
          "y": 310,
          "polarity": 1,
          "frequency": 360,
          "threshold": 1
        },
        {
          "id": 5,
          "x": 420,
          "y": 150,
          "polarity": 1,
          "frequency": 225,
          "threshold": 1
        },
        {
          "id": 6,
          "x": 520,
          "y": 220,
          "polarity": 1,
          "frequency": 300,
          "threshold": 1
        },
        {
          "id": 7,
          "x": 500,
          "y": 340,
          "polarity": 1,
          "frequency": 450,
          "threshold": 1
        },
        {
          "id": 8,
          "x": 380,
          "y": 380,
          "polarity": 1,
          "frequency": 600,
          "threshold": 1
        },
        {
          "id": 9,
          "x": 330,
          "y": 260,
          "polarity": 1,
          "frequency": 375,
          "threshold": 1
        },
        {
          "id": 10,
          "x": 680,
          "y": 145,
          "polarity": 1,
          "frequency": 240,
          "threshold": 2
        },
        {
          "id": 11,
          "x": 780,
          "y": 215,
          "polarity": 1,
          "frequency": 360,
          "threshold": 1
        },
        {
          "id": 12,
          "x": 820,
          "y": 335,
          "polarity": 1,
          "frequency": 480,
          "threshold": 1
        },
        {
          "id": 13,
          "x": 710,
          "y": 420,
          "polarity": 1,
          "frequency": 720,
          "threshold": 1
        },
        {
          "id": 14,
          "x": 610,
          "y": 300,
          "polarity": -1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 15,
          "x": 610,
          "y": 500,
          "polarity": 1,
          "frequency": 540,
          "threshold": 1
        },
        {
          "id": 16,
          "x": 500,
          "y": 560,
          "polarity": 1,
          "frequency": 405,
          "threshold": 1
        },
        {
          "id": 17,
          "x": 385,
          "y": 530,
          "polarity": 1,
          "frequency": 270,
          "threshold": 1
        },
        {
          "id": 18,
          "x": 880,
          "y": 500,
          "polarity": 1,
          "frequency": 660,
          "threshold": 2
        },
        {
          "id": 19,
          "x": 925,
          "y": 610,
          "polarity": -1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 20,
          "x": 760,
          "y": 600,
          "polarity": 1,
          "frequency": 330,
          "threshold": 1
        }
      ],
      "edges": [
        {
          "id": 1,
          "fromId": 1,
          "toId": 2
        },
        {
          "id": 2,
          "fromId": 2,
          "toId": 3
        },
        {
          "id": 3,
          "fromId": 3,
          "toId": 4
        },
        {
          "id": 4,
          "fromId": 4,
          "toId": 2
        },
        {
          "id": 5,
          "fromId": 1,
          "toId": 5
        },
        {
          "id": 6,
          "fromId": 5,
          "toId": 6
        },
        {
          "id": 7,
          "fromId": 6,
          "toId": 7
        },
        {
          "id": 8,
          "fromId": 7,
          "toId": 8
        },
        {
          "id": 9,
          "fromId": 8,
          "toId": 9
        },
        {
          "id": 10,
          "fromId": 9,
          "toId": 5
        },
        {
          "id": 11,
          "fromId": 3,
          "toId": 10
        },
        {
          "id": 12,
          "fromId": 6,
          "toId": 10
        },
        {
          "id": 13,
          "fromId": 10,
          "toId": 11
        },
        {
          "id": 14,
          "fromId": 11,
          "toId": 12
        },
        {
          "id": 15,
          "fromId": 12,
          "toId": 13
        },
        {
          "id": 16,
          "fromId": 13,
          "toId": 10
        },
        {
          "id": 17,
          "fromId": 8,
          "toId": 14
        },
        {
          "id": 18,
          "fromId": 14,
          "toId": 12
        },
        {
          "id": 19,
          "fromId": 4,
          "toId": 15
        },
        {
          "id": 20,
          "fromId": 15,
          "toId": 16
        },
        {
          "id": 21,
          "fromId": 16,
          "toId": 17
        },
        {
          "id": 22,
          "fromId": 17,
          "toId": 15
        },
        {
          "id": 23,
          "fromId": 13,
          "toId": 18
        },
        {
          "id": 24,
          "fromId": 17,
          "toId": 18
        },
        {
          "id": 25,
          "fromId": 18,
          "toId": 19
        },
        {
          "id": 26,
          "fromId": 19,
          "toId": 10
        },
        {
          "id": 27,
          "fromId": 18,
          "toId": 20
        },
        {
          "id": 28,
          "fromId": 20,
          "toId": 7
        }
      ]
    }
  },
  {
    "name": "Mirror Latch",
    "file": "mirror-latch.json",
    "description": "Two mirrored loops feed a threshold latch; blue feedback knocks one side out of phase instead of counting steps.",
    "graph": {
      "version": 2,
      "preset": {
        "name": "Mirror Latch",
        "description": "Two mirrored loops feed a threshold latch; blue feedback knocks one side out of phase instead of counting steps."
      },
      "nodes": [
        {
          "id": 1,
          "x": 70,
          "y": 70,
          "polarity": 1,
          "frequency": 160,
          "threshold": 1
        },
        {
          "id": 2,
          "x": 180,
          "y": 170,
          "polarity": 1,
          "frequency": 160,
          "threshold": 1
        },
        {
          "id": 3,
          "x": 280,
          "y": 170,
          "polarity": 1,
          "frequency": 240,
          "threshold": 1
        },
        {
          "id": 4,
          "x": 380,
          "y": 170,
          "polarity": 1,
          "frequency": 320,
          "threshold": 1
        },
        {
          "id": 5,
          "x": 480,
          "y": 170,
          "polarity": 1,
          "frequency": 400,
          "threshold": 1
        },
        {
          "id": 6,
          "x": 180,
          "y": 330,
          "polarity": 1,
          "frequency": 200,
          "threshold": 1
        },
        {
          "id": 7,
          "x": 280,
          "y": 330,
          "polarity": 1,
          "frequency": 300,
          "threshold": 1
        },
        {
          "id": 8,
          "x": 380,
          "y": 330,
          "polarity": 1,
          "frequency": 450,
          "threshold": 1
        },
        {
          "id": 9,
          "x": 480,
          "y": 330,
          "polarity": 1,
          "frequency": 600,
          "threshold": 1
        },
        {
          "id": 10,
          "x": 610,
          "y": 250,
          "polarity": 1,
          "frequency": 360,
          "threshold": 2
        },
        {
          "id": 11,
          "x": 700,
          "y": 250,
          "polarity": 1,
          "frequency": 540,
          "threshold": 1
        },
        {
          "id": 12,
          "x": 790,
          "y": 250,
          "polarity": 1,
          "frequency": 720,
          "threshold": 1
        },
        {
          "id": 13,
          "x": 610,
          "y": 420,
          "polarity": -1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 14,
          "x": 700,
          "y": 420,
          "polarity": 1,
          "frequency": 270,
          "threshold": 1
        },
        {
          "id": 15,
          "x": 790,
          "y": 420,
          "polarity": 1,
          "frequency": 405,
          "threshold": 1
        },
        {
          "id": 16,
          "x": 880,
          "y": 330,
          "polarity": 1,
          "frequency": 520,
          "threshold": 2
        },
        {
          "id": 17,
          "x": 930,
          "y": 210,
          "polarity": -1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 18,
          "x": 930,
          "y": 470,
          "polarity": 1,
          "frequency": 650,
          "threshold": 1
        }
      ],
      "edges": [
        {
          "id": 1,
          "fromId": 1,
          "toId": 2
        },
        {
          "id": 2,
          "fromId": 2,
          "toId": 3
        },
        {
          "id": 3,
          "fromId": 3,
          "toId": 4
        },
        {
          "id": 4,
          "fromId": 4,
          "toId": 5
        },
        {
          "id": 5,
          "fromId": 5,
          "toId": 2
        },
        {
          "id": 6,
          "fromId": 1,
          "toId": 6
        },
        {
          "id": 7,
          "fromId": 6,
          "toId": 7
        },
        {
          "id": 8,
          "fromId": 7,
          "toId": 8
        },
        {
          "id": 9,
          "fromId": 8,
          "toId": 9
        },
        {
          "id": 10,
          "fromId": 9,
          "toId": 6
        },
        {
          "id": 11,
          "fromId": 4,
          "toId": 10
        },
        {
          "id": 12,
          "fromId": 8,
          "toId": 10
        },
        {
          "id": 13,
          "fromId": 10,
          "toId": 11
        },
        {
          "id": 14,
          "fromId": 11,
          "toId": 12
        },
        {
          "id": 15,
          "fromId": 12,
          "toId": 10
        },
        {
          "id": 16,
          "fromId": 5,
          "toId": 13
        },
        {
          "id": 17,
          "fromId": 13,
          "toId": 8
        },
        {
          "id": 18,
          "fromId": 9,
          "toId": 14
        },
        {
          "id": 19,
          "fromId": 14,
          "toId": 15
        },
        {
          "id": 20,
          "fromId": 15,
          "toId": 6
        },
        {
          "id": 21,
          "fromId": 12,
          "toId": 16
        },
        {
          "id": 22,
          "fromId": 15,
          "toId": 16
        },
        {
          "id": 23,
          "fromId": 16,
          "toId": 17
        },
        {
          "id": 24,
          "fromId": 17,
          "toId": 10
        },
        {
          "id": 25,
          "fromId": 16,
          "toId": 18
        },
        {
          "id": 26,
          "fromId": 18,
          "toId": 3
        },
        {
          "id": 27,
          "fromId": 18,
          "toId": 7
        }
      ]
    }
  },
  {
    "name": "Canon Switcher",
    "file": "canon-switcher.json",
    "description": "Three canons share one entry; phase coincidences open a lower phrase while blue gates redirect the long loop.",
    "graph": {
      "version": 2,
      "preset": {
        "name": "Canon Switcher",
        "description": "Three canons share one entry; phase coincidences open a lower phrase while blue gates redirect the long loop."
      },
      "nodes": [
        {
          "id": 1,
          "x": 70,
          "y": 70,
          "polarity": 1,
          "frequency": 220,
          "threshold": 1
        },
        {
          "id": 2,
          "x": 190,
          "y": 120,
          "polarity": 1,
          "frequency": 220,
          "threshold": 1
        },
        {
          "id": 3,
          "x": 280,
          "y": 180,
          "polarity": 1,
          "frequency": 330,
          "threshold": 1
        },
        {
          "id": 4,
          "x": 250,
          "y": 280,
          "polarity": 1,
          "frequency": 440,
          "threshold": 1
        },
        {
          "id": 5,
          "x": 150,
          "y": 260,
          "polarity": 1,
          "frequency": 550,
          "threshold": 1
        },
        {
          "id": 6,
          "x": 420,
          "y": 120,
          "polarity": 1,
          "frequency": 275,
          "threshold": 1
        },
        {
          "id": 7,
          "x": 530,
          "y": 170,
          "polarity": 1,
          "frequency": 385,
          "threshold": 1
        },
        {
          "id": 8,
          "x": 560,
          "y": 280,
          "polarity": 1,
          "frequency": 495,
          "threshold": 1
        },
        {
          "id": 9,
          "x": 470,
          "y": 360,
          "polarity": 1,
          "frequency": 660,
          "threshold": 1
        },
        {
          "id": 10,
          "x": 370,
          "y": 290,
          "polarity": 1,
          "frequency": 770,
          "threshold": 1
        },
        {
          "id": 11,
          "x": 700,
          "y": 130,
          "polarity": 1,
          "frequency": 330,
          "threshold": 1
        },
        {
          "id": 12,
          "x": 810,
          "y": 180,
          "polarity": 1,
          "frequency": 495,
          "threshold": 1
        },
        {
          "id": 13,
          "x": 850,
          "y": 300,
          "polarity": 1,
          "frequency": 660,
          "threshold": 1
        },
        {
          "id": 14,
          "x": 770,
          "y": 410,
          "polarity": 1,
          "frequency": 880,
          "threshold": 1
        },
        {
          "id": 15,
          "x": 650,
          "y": 380,
          "polarity": 1,
          "frequency": 440,
          "threshold": 1
        },
        {
          "id": 16,
          "x": 620,
          "y": 240,
          "polarity": 1,
          "frequency": 550,
          "threshold": 1
        },
        {
          "id": 17,
          "x": 500,
          "y": 500,
          "polarity": 1,
          "frequency": 520,
          "threshold": 2
        },
        {
          "id": 18,
          "x": 620,
          "y": 570,
          "polarity": 1,
          "frequency": 650,
          "threshold": 1
        },
        {
          "id": 19,
          "x": 740,
          "y": 560,
          "polarity": 1,
          "frequency": 780,
          "threshold": 1
        },
        {
          "id": 20,
          "x": 860,
          "y": 515,
          "polarity": -1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 21,
          "x": 910,
          "y": 390,
          "polarity": 1,
          "frequency": 990,
          "threshold": 2
        },
        {
          "id": 22,
          "x": 940,
          "y": 260,
          "polarity": -1,
          "frequency": 0,
          "threshold": 1
        }
      ],
      "edges": [
        {
          "id": 1,
          "fromId": 1,
          "toId": 2
        },
        {
          "id": 2,
          "fromId": 2,
          "toId": 3
        },
        {
          "id": 3,
          "fromId": 3,
          "toId": 4
        },
        {
          "id": 4,
          "fromId": 4,
          "toId": 5
        },
        {
          "id": 5,
          "fromId": 5,
          "toId": 2
        },
        {
          "id": 6,
          "fromId": 1,
          "toId": 6
        },
        {
          "id": 7,
          "fromId": 6,
          "toId": 7
        },
        {
          "id": 8,
          "fromId": 7,
          "toId": 8
        },
        {
          "id": 9,
          "fromId": 8,
          "toId": 9
        },
        {
          "id": 10,
          "fromId": 9,
          "toId": 10
        },
        {
          "id": 11,
          "fromId": 10,
          "toId": 6
        },
        {
          "id": 12,
          "fromId": 1,
          "toId": 11
        },
        {
          "id": 13,
          "fromId": 11,
          "toId": 12
        },
        {
          "id": 14,
          "fromId": 12,
          "toId": 13
        },
        {
          "id": 15,
          "fromId": 13,
          "toId": 14
        },
        {
          "id": 16,
          "fromId": 14,
          "toId": 15
        },
        {
          "id": 17,
          "fromId": 15,
          "toId": 16
        },
        {
          "id": 18,
          "fromId": 16,
          "toId": 11
        },
        {
          "id": 19,
          "fromId": 4,
          "toId": 17
        },
        {
          "id": 20,
          "fromId": 9,
          "toId": 17
        },
        {
          "id": 21,
          "fromId": 17,
          "toId": 18
        },
        {
          "id": 22,
          "fromId": 18,
          "toId": 19
        },
        {
          "id": 23,
          "fromId": 19,
          "toId": 17
        },
        {
          "id": 24,
          "fromId": 14,
          "toId": 20
        },
        {
          "id": 25,
          "fromId": 20,
          "toId": 17
        },
        {
          "id": 26,
          "fromId": 13,
          "toId": 21
        },
        {
          "id": 27,
          "fromId": 19,
          "toId": 21
        },
        {
          "id": 28,
          "fromId": 21,
          "toId": 22
        },
        {
          "id": 29,
          "fromId": 22,
          "toId": 11
        },
        {
          "id": 30,
          "fromId": 21,
          "toId": 6
        }
      ]
    }
  },
  {
    "name": "Phase Sieve",
    "file": "phase-sieve.json",
    "description": "Three silent rings of length 2, 3, and 5 feed threshold gates that compute phase coincidences at 6, 10, 15, and 30 ticks.",
    "graph": {
      "version": 2,
      "preset": {
        "name": "Phase Sieve",
        "description": "Three silent rings of length 2, 3, and 5 feed threshold gates that compute phase coincidences at 6, 10, 15, and 30 ticks."
      },
      "nodes": [
        {
          "id": 1,
          "x": 70,
          "y": 70,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 2,
          "x": 185,
          "y": 165,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 3,
          "x": 185,
          "y": 275,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 4,
          "x": 345,
          "y": 140,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 5,
          "x": 425,
          "y": 235,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 6,
          "x": 310,
          "y": 330,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 7,
          "x": 560,
          "y": 120,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 8,
          "x": 685,
          "y": 185,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 9,
          "x": 655,
          "y": 330,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 10,
          "x": 510,
          "y": 370,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 11,
          "x": 465,
          "y": 235,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 12,
          "x": 760,
          "y": 155,
          "polarity": 1,
          "frequency": 0,
          "threshold": 2
        },
        {
          "id": 13,
          "x": 760,
          "y": 275,
          "polarity": 1,
          "frequency": 0,
          "threshold": 2
        },
        {
          "id": 14,
          "x": 760,
          "y": 395,
          "polarity": 1,
          "frequency": 0,
          "threshold": 2
        },
        {
          "id": 15,
          "x": 760,
          "y": 540,
          "polarity": 1,
          "frequency": 0,
          "threshold": 3
        },
        {
          "id": 16,
          "x": 860,
          "y": 145,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 17,
          "x": 930,
          "y": 145,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 18,
          "x": 860,
          "y": 265,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 19,
          "x": 930,
          "y": 265,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 20,
          "x": 860,
          "y": 385,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 21,
          "x": 930,
          "y": 385,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 22,
          "x": 850,
          "y": 525,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 23,
          "x": 910,
          "y": 565,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        },
        {
          "id": 24,
          "x": 970,
          "y": 525,
          "polarity": 1,
          "frequency": 0,
          "threshold": 1
        }
      ],
      "edges": [
        {
          "id": 1,
          "fromId": 1,
          "toId": 2
        },
        {
          "id": 2,
          "fromId": 2,
          "toId": 3
        },
        {
          "id": 3,
          "fromId": 3,
          "toId": 2
        },
        {
          "id": 4,
          "fromId": 1,
          "toId": 4
        },
        {
          "id": 5,
          "fromId": 4,
          "toId": 5
        },
        {
          "id": 6,
          "fromId": 5,
          "toId": 6
        },
        {
          "id": 7,
          "fromId": 6,
          "toId": 4
        },
        {
          "id": 8,
          "fromId": 1,
          "toId": 7
        },
        {
          "id": 9,
          "fromId": 7,
          "toId": 8
        },
        {
          "id": 10,
          "fromId": 8,
          "toId": 9
        },
        {
          "id": 11,
          "fromId": 9,
          "toId": 10
        },
        {
          "id": 12,
          "fromId": 10,
          "toId": 11
        },
        {
          "id": 13,
          "fromId": 11,
          "toId": 7
        },
        {
          "id": 14,
          "fromId": 3,
          "toId": 12
        },
        {
          "id": 15,
          "fromId": 6,
          "toId": 12
        },
        {
          "id": 16,
          "fromId": 3,
          "toId": 13
        },
        {
          "id": 17,
          "fromId": 11,
          "toId": 13
        },
        {
          "id": 18,
          "fromId": 6,
          "toId": 14
        },
        {
          "id": 19,
          "fromId": 11,
          "toId": 14
        },
        {
          "id": 20,
          "fromId": 3,
          "toId": 15
        },
        {
          "id": 21,
          "fromId": 6,
          "toId": 15
        },
        {
          "id": 22,
          "fromId": 11,
          "toId": 15
        },
        {
          "id": 23,
          "fromId": 12,
          "toId": 16
        },
        {
          "id": 24,
          "fromId": 16,
          "toId": 17
        },
        {
          "id": 25,
          "fromId": 13,
          "toId": 18
        },
        {
          "id": 26,
          "fromId": 18,
          "toId": 19
        },
        {
          "id": 27,
          "fromId": 14,
          "toId": 20
        },
        {
          "id": 28,
          "fromId": 20,
          "toId": 21
        },
        {
          "id": 29,
          "fromId": 15,
          "toId": 22
        },
        {
          "id": 30,
          "fromId": 22,
          "toId": 23
        },
        {
          "id": 31,
          "fromId": 23,
          "toId": 24
        }
      ]
    }
  }
];
