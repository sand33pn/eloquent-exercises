var size = 8;
var string = "";
for(var i = 0; i < size; i++){
	for(var j = 0; j < size; j++){
		if((i+j)% 2 == 0)
			string += " ";
		else
			string += "#";
	}
	string += "\n";
}
console.log(string);
