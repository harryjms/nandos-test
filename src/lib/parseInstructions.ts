import { RoverInstruction } from "./Rover";

function parseInstructions(instructions: string) {
  let plateauConfig: { x: number; y: number } = { x: 0, y: 0 };
  let rover = 0;
  let roverInstructions: RoverInstruction[] = [];
  const lines = instructions.split(/\n/g);

  lines.forEach((l) => {
    const line = l.trim();
    if (/^[0-9]{1,} [0-9]{1,}$/.test(line)) {
      const [x, y] = line.split(" ");
      plateauConfig.x = parseInt(x);
      plateauConfig.y = parseInt(y);
    }
    if (/^[0-9]{1,} [0-9]{1,} [NESW]$/.test(line)) {
      const roverProps = line.split(" ");
      const heading = roverProps[2] as RoverInstruction[0]["heading"];
      roverInstructions[rover] = [
        { x: parseInt(roverProps[0]), y: parseInt(roverProps[1]), heading },
        [],
      ];
    }
    if (/^[LRM]{1,}$/.test(line)) {
      roverInstructions[rover][1] = line.split("") as RoverInstruction[1];
      rover++;
    }
  });
  return { plateauConfig, roverInstructions };
}

export default parseInstructions;
