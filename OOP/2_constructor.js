// working with constructors

function Data(name, age, email){
this.name = name;
this.age = age;
this.email = email;

this.getdata = function(){
    return `your name is ${this.name} and age is ${this.age}`;
}
};

var a = "James";
var b = "17";
var c = "1xpredictz@gmail.com";
// instatiation i.e (creating an instance of something)
const d1 = new Data(a, b, c);
console.log(d1.getdata());
