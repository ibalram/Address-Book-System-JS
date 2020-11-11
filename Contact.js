const namePattern = RegExp("^[A-Z]{1}[a-z]{2,}$");
const addressPattern = RegExp("^[a-zA-Z0-9-, ]+");
const phonePattern = RegExp("^[0-9]{1,}[ ][1-9][0-9]{9}$");
const emailPattern = RegExp("^[a-zA-Z0-9+_-]+([.][a-zA-Z0-9]+)*@([a-zA-Z0-9]+)([.][a-z]+)?[.][a-z]{2,}$");
const zipPattern = RegExp("^[0-9]{2,}");


class Contact{
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email){
        if (namePattern.test(firstName)) this.firstName = firstName;
        else throw "Invalid First Name";
        if (namePattern.test(lastName)) this.lastName = lastName;
        else throw "Invalid Last Name";
        if(addressPattern.test(address))this.address = address; 
        else throw "Invalid Address";
        if(namePattern.test(city))this.city = city; 
        else throw "Invalid City";
        if(namePattern.test(state))this.state = state; 
        else throw "Invalid State";
        if(zipPattern.test(zip))this.zip = zip;
        else throw "Invalid Zip";
        if(phonePattern.test(phoneNumber)) this.phoneNumber = phoneNumber;
        else throw "Invalid Phone Number";
        if(emailPattern.test(email)) this.email = email;
        else throw "Invalid Email";
    }

    get firstName() {return this._firstName;}
    set firstName(firstName) { 
        if (namePattern.test(firstName)) this._firstName = firstName;
        else throw "Invalid First Name";
    }
    
    get lastName() {return this._lastName;}
    set lastName(lastName) {
        if (namePattern.test(lastName)) this._lastName = lastName;
        else throw "Invalid Last Name";
    }
    
    get address() {return this._address;}
    set address(address) {
        if(addressPattern.test(address))this._address = address; 
        else throw "Invalid Address";
    }
    
    get city() {return this._city;}
    set city(city) {
        if(namePattern.test(city))this._city = city; 
        else throw "Invalid City";
    }
    
    get state() {return this._state;}
    set state(state) {
        if(namePattern.test(state))this._state = state; 
        else throw "Invalid State";
    }
    
    get zip() {return this._zip;}
    set zip(zip) {
        if(zipPattern.test(zip))this._zip = zip;
        else throw "Invalid Zip";
    }
    
    get phoneNumber() {return this._phoneNumber;}
    set phoneNumber(phoneNumber) {
        if(phonePattern.test(phoneNumber)) this._phoneNumber = phoneNumber;
        else throw "Invalid Phone Number";
    }
    
    get email() {return this._email;}
    set email(email) {
        if(emailPattern.test(email)) this._email = email;
        else throw "Invalid Email";
    }

    toString(){
        return "First name: "+this.firstName+", Last name: "+this.lastName+", Address: "+this.address+", City: "+this.city
        +", State: "+this.state+", Zip: "+this.zip+", Phone number: "+this.phoneNumber+", Email: "+this.email;
    }
}

module.exports = Contact