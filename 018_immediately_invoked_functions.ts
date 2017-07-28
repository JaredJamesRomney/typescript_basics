var names : string[] = ["Jared", "Bill", "ben"];
var counter : number = 0;

(function(){
	for (let name in names) {
		counter++;
	}
})();

console.log(counter);