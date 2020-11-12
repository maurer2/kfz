class LicencePlate {
  constructor(key, { district = "", state = "", country = "de" }, isCurrent) {
    this.key = key;
    this.district = district;
    this.state = state;
    this.isCurrent = isCurrent;
    this.country = country;

    if (this.key.length > 3) {
      throw new Error("LicencePlate length error");
    }
  }

  getPlate() {
    return this.key;
  }

  getDistrict() {
    return this.district;
  }

  getState() {
    return this.country;
  }

  getIsCurrent() {
    return this.isCurrent;
  }

  getLetterAtPosition(position) {
    return this.key.charAt(position);
  }

  startsWith(letter) {
    return this.key.charAt(0) === letter.charAt(0);
  }

  hasLetterAtPosition(position, letter) {
    if (position > this.key.length) {
      return false;
    }

    return this.key.charAt(position) === letter;
  }
}

export default LicencePlate;
