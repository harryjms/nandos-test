import Plateau from "./lib/Plateau";
import Rover from "./lib/Rover";

const instructionSet = `5 5
1 2 N
LMLMLMLMM
3 3 E
MMRMMRMRRM`;

function parseInstructions(instructions: string) {
  let plateauConfig: { x: number; y: number } = { x: 0, y: 0 };
  let rover = 0;
  let roverInstructions: [
    { x: number; y: number; heading: string },
    string[]
  ][] = [];
  const lines = instructions.split(/\n/g);

  lines.forEach((line) => {
    if (/^\d \d$/.test(line)) {
      const [x, y] = line.split(" ");
      plateauConfig.x = parseInt(x);
      plateauConfig.y = parseInt(y);
    }
    if (/^\d \d \w$/.test(line)) {
      const roverProps = line.split(" ");
      const heading = roverProps[2];
      roverInstructions[rover] = [
        { x: parseInt(roverProps[0]), y: parseInt(roverProps[1]), heading },
        [],
      ];
    }
    if (/^\w{1,}$/.test(line)) {
      roverInstructions[rover][1] = line.split("");
      rover++;
    }
  });
  return { plateauConfig, roverInstructions };
}

function main() {
  const { plateauConfig, roverInstructions } =
    parseInstructions(instructionSet);

  const plateau = new Plateau(plateauConfig.x, plateauConfig.y);

  //   let parseInstructions = instructionSet.split("\n");
  //   const plateauConfig = parseInstructions[0];
  //   parseInstructions.shift();
  //   const rovers = createRovers(parseInstructions);
  //   console.log(rovers);
}

main();
