module.exports = class LicencePlate {
  constructor(key, { district, state, country = 'de' }) {
    this.key = key;
    this.district = district;
    this.state = state;
    this.country = country;

    if (this.key.length > 3) {
      throw new Error('LicencePlate length error');
    }
  }

  getPlate() {
    return this.key;
  }

  getDistrict() {
    return this.district;
  }

  getState() {
    return this.country
  }

  getFirstLetter() {
    return this.key.charAt(0);
  }

  isSingleLetter() {
    return this.key.length === 1;
  }

  isDoubleLetter() {
    return this.key.length === 2;
  }

  isTrippleLetter() {
    return this.key.length === 3;
  }

  startsWith(letter) {
    return this.key.charAt(0) === letter.charAt(0)
  }
}
