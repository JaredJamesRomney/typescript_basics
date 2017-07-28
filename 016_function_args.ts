function printAddress(street: string, streetTwo?: string, state = 'AZ') {  
	// (have you have it after any declared arguments if its optional, like streetTwo)
	console.log(street);       
	if (streetTwo) {
		console.log(streetTwo)
	}
	console.log(state);
}

printAddress('123 any street')
printAddress('123 any street', 'Philly')
printAddress('123 any street', 'Philly', 'UT')



// REST ARGUMENT
function lineupCard(team: string, ...players: string[]) {
	console.log('Team: ' + team);
	for (let player of players) {
		console.log(player);
	}
}

lineupCard('Astros', 'Altuve', 'Correa', 'Bregman');