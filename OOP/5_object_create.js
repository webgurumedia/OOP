// Objects prototypes
/*
This is all about creating object's properties
e.g getdata & getage are objects that consists a function
but we also have this.title and this.year that are properties but lack values and so 
we create them by creating Protos object and its properties
*/


const Protos = {
    getdata: function(){
        return `${this.title} was founded in the year ${this.year}`;
    },

    getage: function(){
        const year = new Date().getFullYear() - this.year;
        return `${this.title} is ${year} years old`;
    }
}

// const dat = Object.create(Protos);
// dat.title = "Monexity";
// dat.year = "2014";
// console.log(dat.getdata());
 
const dat = Object.create(Protos, {
    title: {value : "Monexity"},
    year: {value : "2012"}
});

console.log(dat.getage());
console.log(dat.getdata());