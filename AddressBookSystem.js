const Contact = require('./Contact.js');
console.log("Welcome Address Book System");


let addressBook = new Array();

function editContact(firstName, instanceVariable, newValue){
    if(addressBook.some(contact => contact.firstName == firstName)){
        let contact = addressBook.find(contact => contact.firstName == firstName);
        switch(instanceVariable){
            case "lastName":
                contact.lastName = newValue;
                break;
            case "address":
                contact.address = newValue;
                break;
            case "city":
                contact.city = newValue;
                break;
            case "state":
                contact.state = newValue;
                break;
            case "zip":
                contact.zip = newValue;
                break;
            case "phone":
                contact.phoneNumber = newValue;
                break;
            case "email":
                contact.email = newValue;
                break;
            default:
                console.log("Invalid Entry");
        }
    }else{
        console.log("Not Exist");
    }
}

function deleteContact(firstName){
    addressBook = addressBook.filter(contact => contact.firstName != firstName);
}

function counter(count){
    return ++count;
}

function getCount(){
    return addressBook.reduce(counter, 0);
}

function isExist(firstName){
    return addressBook.some(contact => contact.firstName == firstName);
}

function addContact(contact){
    if (!isExist(contact.firstName)){
        addressBook.push(contact);
    }
    else{
        console.log("Already Exist");
    }
}

function searchContactsByCity(city){
    return addressBook.filter(contact => contact.city == city);
}

function searchContactsByState(state){
    return addressBook.filter(contact => contact.state == state);
}

try{
    addContact(new Contact("Balram", "Singh", "no location","Jaipur", "Rajasthan", "301234", "91 9812345678","bal@gmail.com"));
    addContact(new Contact("Akshit", "Singh", "no location","Mumbai", "Maharashtra", "401234", "91 9912345678","akshit@gmail.com"));
}
catch(e){
    console.error(e);
}
console.log(addressBook);


editContact("Balram", "lastName", "Singh Rathore");
editContact("Akshit", "address", "Earth");
// console.log(addressBook);

// deleteContact("Balram");
// console.log("after deletion")
// console.log(addressBook);
console.log(getCount());

console.log(searchContactsByCity("Jaipur"));
console.log(searchContactsByState("Maharashtra"));