// Function Expression
var fullName;
fullName = function (first, last) {
    return first + " " + last;
};
console.log(fullName('Jared', 'Romney'));
// Immediately invoked version
(function (first, last) {
    console.log(first + " " + last);
})('Ben', 'Dummy');
//# sourceMappingURL=018_5_immediately_invoked_arguments.js.map