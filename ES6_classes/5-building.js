export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    if (this.constructor !== Building) {
      if (this.evacuationWarningMessage === undefined) {
        throw new Error(
          'Class extending Building must override evacuationWarningMessage',
        );
      }
    }
  }

  // Getter për sqft
  get sqft() {
    return this._sqft;
  }
}
