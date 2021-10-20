import Rover, { RoverInstruction } from "./Rover";

class Plateau {
  public x: number;
  public y: number;
  public rovers: Rover[] = [];

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  /**
   * Adds a rover to the grid
   */
  addRover(rover: RoverInstruction) {
    this.rovers.push(new Rover(this, rover[0]));
  }

  /**
   * Checks if given square is occupied
   */
  squareOccupied(x: number, y: number) {
    return this.rovers.find((rover) => rover.x === x && rover.y === y) !== null;
  }
}

export default Plateau;
