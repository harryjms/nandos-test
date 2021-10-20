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
    expect(rover.forward("N")).toEqual({ x: 0, y: 1 });
  });

  it("should increase x by 1 when heading is East", () => {
    expect(rover.forward("E")).toEqual({ x: 1, y: 0 });
  });

  it("should decrease x by 1 when heading is W", () => {
    rover.x = 3;
    rover.y = 4;
    expect(rover.forward("W")).toEqual({ x: 2, y: 4 });
  });

  it("should decrease y by 1 when heading is South", () => {
    expect(rover.forward("S")).toEqual({ x: 3, y: 3 });
  });

  it("should return 0 when the move takes the next coordinate to a negative", () => {
    rover.x = 0;
    rover.y = 0;
    expect(rover.forward("S")).toEqual({ x: 0, y: 0 });
    expect(rover.forward("W")).toEqual({ x: 0, y: 0 });
  });

  it("should return 5 when trying to move beyond the grid boundaries when facing E", () => {
    rover.x = 5;
    rover.y = 3;
    expect(rover.forward("E")).toEqual({ x: 5, y: 3 });
  });

  it("should return 5 when trying to move beyond the grid boundaries when facing N", () => {
    rover.x = 3;
    rover.y = 5;
    expect(rover.forward("N")).toEqual({ x: 3, y: 5 });
  });

  // Move calculation
  it("should set heading to W when facing N and given the L instruction", () => {
    rover = new Rover(new Plateau(5, 5), { x: 3, y: 3, heading: "N" });
    expect(rover.calculateMove("L")).toEqual({ x: 3, y: 3, heading: "W" });
  });

  it("should set heading to E when facing N and given the R instruction", () => {
    expect(rover.calculateMove("R")).toEqual({ x: 3, y: 3, heading: "E" });
  });

  it("should set y to 4 when facing N and given the M instruction", () => {
    expect(rover.calculateMove("M")).toEqual({ x: 3, y: 4, heading: "N" });
  });

  it("should set x to 4 when facing E and given the M instruction", () => {
    rover.heading = "E";
    expect(rover.calculateMove("M")).toEqual({ x: 4, y: 3, heading: "E" });
  });

  it("should set y to 2 when facing S and given the M instruction", () => {
    rover.heading = "S";
    expect(rover.calculateMove("M")).toEqual({ x: 3, y: 2, heading: "S" });
  });

  it("should set x to 2 when facing W and given the M instruction", () => {
    rover.heading = "W";
    expect(rover.calculateMove("M")).toEqual({ x: 2, y: 3, heading: "W" });
  });

  it("should set x to 4 when facing E and given the M instruction", () => {
    rover.heading = "E";
    expect(rover.calculateMove("M")).toEqual({ x: 4, y: 3, heading: "E" });
  });

  // Complete move
  it("should end at 1 3 N", () => {
    rover.x = 1;
    rover.y = 2;
    rover.heading = "N";
    expect(rover.move(["L", "M", "L", "M", "L", "M", "L", "M", "M"])).toEqual({
      x: 1,
      y: 3,
      heading: "N",
    });
  });

  it("should end at 5 1 E", () => {
    rover.x = 3;
    rover.y = 3;
    rover.heading = "E";
    expect(
      rover.move(["M", "M", "R", "M", "M", "R", "M", "R", "R", "M"])
    ).toEqual({
      x: 5,
      y: 1,
      heading: "E",
    });
  });

  it("should return the string of the current rover position", () => {
    expect(rover.getPosition()).toBe("5 1 E");
  });
});
