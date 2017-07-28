
// While loop
var x : number = 0;

while (x < 10) {
	console.log(x);
	x++;
}

let players : number[] = [3, 24, 324, 5];

// for in (for index)
console.log("For/in")

for (let player in players) {
	console.log(player);
}

// for of (for values)
console.log("For/of")
for (let player of players) {
	console.log(player);
}