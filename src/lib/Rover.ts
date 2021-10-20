import Plateau from "./Plateau";

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

  public forward() {
    let coords = { x: this.x, y: this.y };

    switch (this.heading) {
      case "N":
        coords.y++;
        break;
      case "E":
        coords.x++;
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
}

export default Rover;
