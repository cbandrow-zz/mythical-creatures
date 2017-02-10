function Pirate(name, job) {
  this.name = name;
  this.cursed = false;
  this.acts = 1;
  this.booty = 0;

  if (job === undefined){
    this.job = "Scallywag"
  } else{
    this.job = job;
  }
}

Pirate.prototype.commitHeinousAct = function(){
  this.acts += 1;
  if (this.acts <= 3){
    this.cursed = false;
  } else if (this.acts >= 4){
    this.cursed = true;
  }
}

Pirate.prototype.robShip = function(){
  return "YAARRR!";
  this.booty = 100;
}

module.exports = Pirate;
