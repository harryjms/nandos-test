import parseInstructions from "../lib/parseInstructions";

describe("parseInstructions", () => {
  let instructionSet = `6 6
    1 3 N
    MMRMRML
    5 1 E
    MMLMRMLMM
    1
    4 2 N
    MML`;

  const { plateauConfig, roverInstructions } =
    parseInstructions(instructionSet);

  it("should parse the plateau grid", () => {
    expect(plateauConfig).toEqual({ x: 6, y: 6 });
  });

  it("should parse the rover instructions", () => {
    expect(roverInstructions).toEqual([
      [{ x: 1, y: 3, heading: "N" }, ["M", "M", "R", "M", "R", "M", "L"]],
      [
        { x: 5, y: 1, heading: "E" },
        ["M", "M", "L", "M", "R", "M", "L", "M", "M"],
      ],
      [{ x: 4, y: 2, heading: "N" }, ["M", "M", "L"]],
    ]);
  });
});
