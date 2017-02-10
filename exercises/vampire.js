function Vampire(name, pet) {
  this.name = name;
  this.pet = pet;
  this.thirsty = true;
  if (this.pet === undefined){
    this.pet = "bat";
  } else {
    this.pet = pet;
  }

}

Vampire.prototype.drink = function() {
  this.thirsty = false;
}
module.exports = Vampire;
