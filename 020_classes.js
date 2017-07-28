var Invoice = (function () {
    function Invoice(name, city, state) {
        this.name = name;
        this.city = city;
        this.state = state;
        this.companyProfile = name + ", " + city + ", " + state;
    }
    return Invoice;
}());
var googleInvoice = new Invoice('Google', 'South Jordan', 'Utah');
var yahooInvoice = new Invoice('Yahoo', 'SF', 'Arizona');
console.log(googleInvoice.companyProfile);
console.log(yahooInvoice.companyProfile);
//# sourceMappingURL=020_classes.js.map