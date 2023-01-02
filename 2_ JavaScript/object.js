// In javascript object is the collection of data in key- value pair

let person = {
    name : 'peter',
    age : 20,
    gender : 'male'
} // declaration

console.log(person);

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
}

// Acessing the properties of an object-

// Dot Notation (.)

let nameOfCaptain = captainAmerica.name
console.log(nameOfCaptain);

let captainAmericaCity = captainAmerica.address.city.cityName
console.log(captainAmericaCity);