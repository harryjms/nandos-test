declare interface IPosition {
  x: number;
  y: number;
  heading: Heading;
}

declare type Moves =
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

declare type Heading = "N" | "E" | "S" | "W";
