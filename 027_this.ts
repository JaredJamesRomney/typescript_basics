class Invoice {
	total : number;

	constructor(total : number) {
		this.total = total;
	}

	printTotal() {
		console.log(this.total);
	}

// Will not work, because "This" will look into this function
	printLater(time: number) {
		setTimeout(function() {
			console.log(this.total);
		}, time);
	}


// This WILL work. Because the function "Arrow, =>" will allow it to work around, and pull the "this" from the class, not this specific function
		printLater(time: number) {
		setTimeout(() => {
			console.log(this.total);
		}, time);
	}
}

var invoice = new Invoice(4435);
invoice.printTotal();
invoice.printLater(1000);