import Plateau from "../lib/Plateau";

describe("Plateau", () => {
  const plateau = new Plateau(5, 5);
  it("should create a new Plateau with given properties", () => {
    expect(plateau.x).toBe(5);
    expect(plateau.y).toBe(5);
  });

  it("should return false when a proposed move is outside of the grid range", () => {
    expect(plateau.onGrid(6, 4)).toBeFalsy();
  });

  it("should return true when a proposed move is within the grid range", () => {
    expect(plateau.onGrid(4, 3)).toBeTruthy();
  });
});
