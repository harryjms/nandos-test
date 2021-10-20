# Nando's code test

This is my solution to the Mars rover code test for Nando's.

## Installation

1. Clone the repo
2. Enter the cloned directory and run `yarn install`

## Build and run

1. Within the root directory of the project, run `yarn build` to build the project
2. Run `yarn start` to run the application
3. The Rover's final position will be outputted in the terminal

## Modify instruction set

To modify the instruction set, change the value of the `instructionSet` variable found in `src/index.ts`. Once saved, re-build the project.

The instruction set must follow the format:

```
5 5
1 2 E
MLRRM
3 4 S
MRMLLM
```

The first line of the instruction set sets up the grid for the plateau. Every 2 lines that follow represent an instruction for a rover, where the first line (number, number letter) is the starting position and the second line is the movement instruction.

```
M moves the rover forward one square in the direction it is facing.
L rotates the rover 90 degrees anti-clockwise
R rotates the rover 90 degrees clockwise
```

Should a movement be out of bound for the plateau grid, it will be skipped. This could be subsequent movements occur.

## Tests

Unit tests are provided with this project. To run them, you can run `yarn test`. To produce a coverage report, run `yarn test:coverage`. The report can then be found in `coverage/lcov-report/index.html` which you can open in your preferred browser.
