class Plateau {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  /**
   * Tests if the given coordinates exist on the Plateau
   */
  public onGrid(x: number, y: number) {
    return x <= this.x && y <= this.y;
  }
}

export default Plateau;
