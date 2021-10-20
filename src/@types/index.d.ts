interface IPosition {
  x: number;
  y: number;
  heading: Heading;
}

type Moves =
  /**
   * Rotate left 90 degrees
   */
  | "L"
  /**
   * Rotate right 90 degrees
   */
  | "R"
  /**
   * Move forward 1 square
   */
  | "M";

type Heading = "N" | "E" | "S" | "W";
