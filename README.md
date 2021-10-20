# Nando's code test

This is my solution to the Mars rover code test for Nando's. This task took around 3 hours to complete.

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

## Approach

I started by drawing a grid on some paper and physically drawing the movement of a Rover following the example input. This gave me the understanding of the instruction set I needed in order to write code to automate this.

Next, I setup the environment, installing required node modules and setting up a basic typescript and jest configuration.

The first thing I created was a class for the Plateau, as I knew this would be very simple. It would simple have the grid configuration. I then created a unit test for this.

Next I started to figure out how to produce a class for a Rover. The Rover would need to remember where it is on the grid, as well as its heading. It would also need the ability to calculate its new position as instructions are parsed.

I started by creating a method to calculate the new heading when rotating the rover. I then went on to create the methods for calculating the new position when a move instruction was recieved and then the method that would bring these together to return the new position object for the rover. Finally I created a move method that would loop through the instructions, updating the current coordinates and heading of the rover as it went.

As I created a new method, I would also create the associated unit test to check the functionality as I developed the method, known as Test Driven Development.

After the Rover class was created and tests passing, I moved on to what would be the main function. I started by creating a method to parse the incoming instruction set and return an array, with the first element being the plateau configuration and the second an array of instructions for each rover found in the instruction set string. I also created the test for this method.

Finally, I pieced it all together in the main method in `src/index.ts`, parsing the instructions, creating an instance of the Plateau class to share with each Rover, and finally looping through the rover instructions to produce the resulting position for each one.

At the end, I ran the test coverage to ensure all the code had been covered in unit tests.
