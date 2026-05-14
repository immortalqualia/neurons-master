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
  }
];
