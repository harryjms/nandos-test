import parseInstructions from "./lib/parseInstructions";
import Plateau from "./lib/Plateau";
import Rover from "./lib/Rover";

const instructionSet = `5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM
4 2 S
MRRMMLM`;

function main() {
  const { plateauConfig, roverInstructions } =
    parseInstructions(instructionSet);

  const plateau = new Plateau(plateauConfig.x, plateauConfig.y);
  roverInstructions.forEach((rover) => {
    const r = new Rover(plateau, rover[0]);
    r.move(rover[1]);
    console.log(r.getPosition());
  });
}

main();
