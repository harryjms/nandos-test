import Rover from "../lib/Rover";
import Plateau from "../lib/Plateau";

describe("Plateau", () => {
  const plateau = new Plateau(5, 5);
  it("should create a new Plateau with given properties", () => {
    expect(plateau.x).toBe(5);
    expect(plateau.y).toBe(5);
  });

  it("should add rover to the rovers array", () => {
    plateau.addRover([{ x: 3, y: 4, heading: "N" }, ["M", "L", "R"]]);
    expect(plateau.rovers).toEqual([
      new Rover(plateau, { x: 3, y: 4, heading: "N" }),
    ]);
  });
});
