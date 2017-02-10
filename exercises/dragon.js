function Dragon(name, rider, color) {
    this.name = name;
    this.rider = rider;
    this.color = color;


    if (this.hungry === undefined) {
        this.hungry = true;
    } else {
        this.hungry = false;
    }

    this.eatCount = 0;

}

Dragon.protoype.eat = function() {
    this.eatCount += 1;
    if (this.eatCount <3) {
      this.hungry = tru e;
    } else {
      this.hungry = false;
    }
  }
}

module.exports = Dragon;
