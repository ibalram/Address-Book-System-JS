const Contact = require('./Contact.js');
console.log("Welcome Address Book System");


let addressBook = new Array();

try{
    addressBook.push(new Contact("Balram", "Singh", "no location","Jaipur", "Rajasthan", "301234", "91 9812345678","bal@gmail.com"));
    addressBook.push(new Contact("Akshit", "Singh", "no location","Mumbai", "Maharashtra", "401234", "91 9912345678","akshit@gmail.com"));
}
catch(e){
    console.error(e);
}
console.log(addressBook);