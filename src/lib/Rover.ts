import Plateau from "./Plateau";

export type RoverInstruction = [
  { x: number; y: number; heading: Heading },
  Moves[]
];

class Rover {
  public x: number;
  public y: number;
  public heading: Heading;
  public plateau: Plateau;

  constructor(
    /**
     * Plateau object Rover is on
     */
    plateau: Plateau,
    /**
     * Starting position of the Rover
     */
    startPosition: IPosition
  ) {
    this.x = startPosition.x;
    this.y = startPosition.y;
    this.heading = startPosition.heading;
    this.plateau = plateau;
  }

  public rotate(rotate: "L" | "R") {
    const compass: Heading[] = ["N", "E", "S", "W"];
    let heading = this.heading;
    const currentHeadingIndex = compass.findIndex((c) => c === heading);

    switch (rotate) {
      case "R": {
        if (currentHeadingIndex === compass.length - 1) {
          heading = compass[0];
        } else {
          heading = compass[currentHeadingIndex + 1];
        }
        break;
      }

      case "L": {
        if (currentHeadingIndex === 0) {
          heading = compass[compass.length - 1];
        } else {
          heading = compass[currentHeadingIndex - 1];
        }
        break;
      }
    }

    return heading;
  }

  public forward(heading: Heading) {
    let coords = { x: this.x, y: this.y };
    switch (heading) {
      case "N":
        coords.y++;
        if (coords.y > this.plateau.y) coords.y = this.plateau.y;
        break;
      case "E":
        coords.x++;
        if (coords.x > this.plateau.x) coords.x = this.plateau.x;
        break;
      case "S":
        coords.y--;
        if (coords.y < 0) coords.y = 0;
        break;
      case "W":
        coords.x--;
        if (coords.x < 0) coords.x = 0;
        break;
    }

    return coords;
  }

  public calculateMove(move: Moves): IPosition {
    let np = { x: this.x, y: this.y, heading: this.heading };

    switch (move) {
      case "L":
      case "R":
        np.heading = this.rotate(move);
        break;
      case "M":
        const { x, y } = this.forward(np.heading);
        np.x = x;
        np.y = y;
        break;
    }

    return np;
  }

  public move(moves: Moves[]): IPosition {
    moves.forEach((move) => {
      const { x, y, heading } = this.calculateMove(move);
      this.x = x;
      this.y = y;
      this.heading = heading;
    });
    return { x: this.x, y: this.y, heading: this.heading };
  }

  public getPosition() {
    return `${this.x} ${this.y} ${this.heading}`;
  }
}

export default Rover;
