// Creating object literals
const Biodata = {
    name: "Boluwatife",
    age: "21",
    email: "webgurumedia@gmail.com",

    // we can add functions to our object literals
    getData: function(){
        return `your name is ${this.name} and your age is ${this.age}`;
    }
};


// using objects.assign this is used to easily inherit * from an object
var obj = Object.assign({}, Biodata);

// checking the differnce between the inh object and the main object
console.log(obj.getData());
console.log(Biodata.getData());

// getting object's values
console.log(Object.values(Biodata));
console.log(Object.keys(Biodata));