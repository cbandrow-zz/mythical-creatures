function Hobbit(name, disposition, age) {
  this.name = name;
  this.disposition = 'homebody';
  this.age = 0;
  this.isShort = true;
  this.old = false;

  if (this.name === "Frodo"){
    this.hasRing = true;
  } else {
    this.hasRing = false;
  }

}
Hobbit.prototype.celebrateBirthday = function() {
  this.age += 1;
  if (this.age <= 32){
    this.adult = false;
  } else if (this.age >=33){
    this.adult = true;
  }

  if(this.age <=100){
    this.old = false;
  } else if (this.age >=100){
    this.old = true;
  }

}





module.exports = Hobbit;
