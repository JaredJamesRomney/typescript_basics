	console.log(fullName('Jared', 'Romney')); 
	console.log(otherFullName('Jared', 'Romney'));
	console.log(thirdFullName('Jared', 'Romney'));
	// ONLY fullName will work

// Function declaration
function fullName(first : string, last : string) : string {
	return first + " " + last;
}



// Function Expression
var otherFullName : (first : string, last : string) => string;

otherFullName = function (first : string, last : string) {
	return first + " " + last;
}

var thirdFullName : (first : string, last : string) => string = function (first : string, last : string) {
	return first + " " + last;
	}

	console.log(fullName('Jared', 'Romney'));
	console.log(otherFullName('Jared', 'Romney'));
	console.log(thirdFullName('Jared', 'Romney'));
	// ALL will work