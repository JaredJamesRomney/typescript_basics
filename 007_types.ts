// Boolean
let paid : boolean = false;

// Number
let age : number = 33;
var taxRate : number = 7.5;

// String
var fullName : string = "Jared Romney";

// Array
var ages : number[] = [33,28,11]

// Tuple
let player : [number, string, number, number];
player = [3, "Phil", .500, 32];

// Enum
enum Stage {Approved, Pending, Rejected};
let job : Stage = Stage.Pending;

// Any 
var apiData : any[] = [123, "Jordan", false];

// Void
function printOut(msg: string) : void {
	console.log(msg);
}