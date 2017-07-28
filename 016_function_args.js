// function printAddress(street: string, streetTwo?: string, state = 'AZ') {  
// 	// (have you have it after any declared arguments if its optional, like streetTwo)
// 	console.log(street);       
// 	if (streetTwo) {
// 		console.log(streetTwo)
// 	}
// 	console.log(state);
// }
// printAddress('123 any street')
// printAddress('123 any street', 'Philly')
// printAddress('123 any street', 'Philly', 'UT')
function lineupCard(team) {
    var players = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        players[_i - 1] = arguments[_i];
    }
    console.log('Team: ' + team);
    for (var _a = 0, players_1 = players; _a < players_1.length; _a++) {
        var player = players_1[_a];
        console.log(player);
    }
}
lineupCard('Astros', 'Altuve', 'Correa', 'Bregman');
//# sourceMappingURL=016_function_args.js.map