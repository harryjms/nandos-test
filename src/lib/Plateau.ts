import Rover, { RoverInstruction } from "./Rover";

class Plateau {
  public x: number;
  public y: number;
  public rovers: Rover[] = [];

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    if (x === 0 || y === 0) throw new Error("Invalid grid size");
  }
}

export default Plateau;
