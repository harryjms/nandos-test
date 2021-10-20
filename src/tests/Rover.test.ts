import Plateau from "../lib/Plateau";
import Rover from "../lib/Rover";

describe("Rover", () => {
  let rover: Rover;
  beforeAll(() => {
    rover = new Rover(new Plateau(5, 5), { x: 0, y: 0, heading: "N" });
  });

  // Rotation
  it("should rotate 90 degrees right and be facing East", () => {
    expect(rover.rotate("R")).toBe("E");
  });

  it("should rotate 90 degrees left and be facing West", () => {
    expect(rover.rotate("L")).toBe("W");
  });

  // Forward
  it("should increase y coordinate by 1 when heading is North", () => {
    expect(rover.forward()).toEqual({ x: 0, y: 1 });
  });

  it("should increase x by 1 when heading is East", () => {
    rover.heading = "E";
    expect(rover.forward()).toEqual({ x: 1, y: 0 });
  });

  it("should decrease x by 1 when heading is W", () => {
    rover.x = 3;
    rover.y = 4;
    rover.heading = "W";
    expect(rover.forward()).toEqual({ x: 2, y: 4 });
  });

  it("should decrease y by 1 when heading is South", () => {
    rover.heading = "S";
    expect(rover.forward()).toEqual({ x: 3, y: 3 });
  });

  it("should return 0 when the move takes the next coordinate to a negative", () => {
    rover.x = 0;
    rover.y = 0;
    rover.heading = "S";
    expect(rover.forward()).toEqual({ x: 0, y: 0 });
    rover.heading = "W";
    expect(rover.forward()).toEqual({ x: 0, y: 0 });
  });
});
