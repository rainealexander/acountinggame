
//  .-----------------------.
//  |  Game stages (w.i.p)  |
//  |_______________________|


// will need function to "dispatch" current stage

// testing data structure for stages and their requirements
const stages = {
  stage1: {
    requirements: 0,
    methods: [
      {
        things: {
          requirements: 0
        }
      }
    ]
  },
  stage2: [fingers, tallies_single, tallies_grouped]
}

const stageFunctions = {
  // Stage 1, no concept of numbers or counting. Each number is a single "thing".
  // Quickly moves on to basic grouping with finger counting
  // # 1-10?
  things: (num) => {
    // display "thing"
  },

  // Stage 2, early grouping of things using tallies and finger counting.
  fingers: () => {
    // can only count up to 10
  },

  tallies_single: () => {
    // can count to any number, but no groupings
  },

  tallies_grouped: () => {
    // grouped tallies - easier to read
  },

  // Tokens, "addition" of subtraction
  // (trading mini game?)

  // Sumerian clay tablets, rise of writing

  // Rise of measurement in Egypt - Cubits
  // Egyptian make symbols for different numbers

  // THEORETICAL MATH

  // Pythagoras - odd and even numbers
  // Archimedes - many contributions to math ("math games") ("Archimedes Screw")

  // Death of Archimedes - end of Greek Math's "Golden Age"

  // Roman Numerals - counting board

  // 000~ AGE OF ZERO ~000

  // Indians invent Zero, create individual symbols for 1-9
}