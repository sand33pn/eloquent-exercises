function SmartPlantEater() {
  this.energy = 30;
}
SmartPlantEater.prototype.act = function(view){
  var space = view.find(" ");
  if (this.energy > 60 && space)
    return {type: "reproduce", direction: space};
  var plant = view.find("*");
  var plants = view.findAll("*");
  if (plants.length > 1)
    return {type: "eat", direction: plant};
  if (space)
    return {type: "move", direction: space};
};

animateWorld(new LifelikeWorld(
  ["############################",
   "#####                 ######",
   "##   ***                **##",
   "#   *##**         **  O  *##",
   "#    ***          ##**    *#",
   "#                 ##***    #",
   "#                 ##**     #",
   "#           #*             #",
   "#*          #**            #",
   "#***        ##**         **#",
   "##****     ###***       *###",
   "############################"],
  {"#": Wall,
   "O": SmartPlantEater,
   "*": Plant}
));
