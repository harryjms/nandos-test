import Rover from "../lib/Rover";
import Plateau from "../lib/Plateau";

describe("Plateau", () => {
  const plateau = new Plateau(5, 5);
  it("should create a new Plateau with given properties", () => {
    expect(plateau.x).toBe(5);
    expect(plateau.y).toBe(5);
  });

  it("should throw error when invalid grid size is supplied", () => {
    expect(() => {
      new Plateau(0, 2);
    }).toThrow("Invalid grid size");

    expect(() => {
      new Plateau(2, 0);
    }).toThrow("Invalid grid size");
  });
});
