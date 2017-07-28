class Invoice {
	companyProfile : string;

	constructor(public name, public city, public state){
		this.companyProfile = name + ", " + city + ", " + state;
	}
}

var googleInvoice = new Invoice('Google', 'South Jordan', 'Utah');
var yahooInvoice = new Invoice('Yahoo', 'SF', 'Arizona');

console.log(googleInvoice.companyProfile);
console.log(yahooInvoice.companyProfile);
