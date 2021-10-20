import Plateau from "../lib/Plateau";

describe("Plateau", () => {
  const plateau = new Plateau(5, 5);
  it("should create a new Plateau with given properties", () => {
    expect(plateau.x).toBe(5);
    expect(plateau.y).toBe(5);
  });
});
