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

  /**
   * Adds a rover to the grid
   */
  addRover(rover: RoverInstruction) {
    this.rovers.push(new Rover(this, rover[0]));
  }
}

export default Plateau;
