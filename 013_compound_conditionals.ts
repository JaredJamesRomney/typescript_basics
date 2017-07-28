let password : string = 'asdfasdf';
let email : string = 'test@test.com';

if (password == 'asdfasdf' || password == 'qwerqwer') {
	console.log('Password is correct');
} else {
	console.log('Permission Denied');
}

if (password == 'asdfasdf' && email == 'test@test.com') {
	console.log('Password is correct');
} else {
	console.log('Permission Denied');
}

if (!(email == 'test@test.com')) {
	console.log('You are authorized');
}