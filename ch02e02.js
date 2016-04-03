for(var i = 1; i < 101; i++){
	var string = "";
	if (i%3 == 0) 
		string += "Fizz";
	if (i%5 == 0)
		string += "Buzz";
	console.log(string || i)
}
