// In javascript object is the collection of data in key- value pair

let person = {
    name : 'peter',
    age : 20,
    gender : 'male',
    "college name" :    "MIT",
}; // declaration

console.log(person);
// acessing property from object->
 console.log(person.gender);
 console.log(person["college name"]); // square bracket notation
//  console.log(person.college name);  // syntax error

let captainAmerica = {
    name : 'Steve Rogers',
    age : 102,
    friends : ['Bucky' , 'Banner' , 'Thor' , 'Tony'],
    address : {
        country : 'USA',
        state : 'New York',
        city : {
            cityName : 'Manhatton',
            pincode : 1234,
        }
    },
    isAvenger : 'true',
    
};


// Acessing the properties of an object-

// Dot Notation (.)

let nameOfCaptain = captainAmerica.name
console.log(nameOfCaptain);

let captainAmericaCity = captainAmerica.address.city.cityName
console.log(captainAmericaCity);

// Square bracket Notation

var ageOfCaptain = captainAmerica["age"]
console.log(ageOfCaptain);