const Contact = require('./Contact.js');
console.log("Welcome Address Book System");

try{
    let contact = new Contact("Balram", "Singh", "no location","Jaipur", "Rajasthan", "301234", "91 9812345678","bal@gmail.com");
    console.log(contact);
}
catch(e){
    console.error(e);
}