// prototypes

function Data(name, age, email, year){
    this.name = name;
    this.age = age;
    this.email = email;
    this.year = year;
    };

    // getdata

    Data.prototype.getdata = function(){
        return `your name is ${this.name} and age is ${this.age}`;
    }

    // getage
    Data.prototype.getage = function(){
        const year = new Date().getFullYear() - this.year;
        return `${this.name} is ${year} years old`;
    }

    // revise i.e change year
    Data.prototype.revise = function(newyear){
        this.year = newyear;
        this.revise = true;
    }
    
    // instatiation i.e (creating an instance of something)
    const d1 = new Data('Boluwatife', '21', '1xpredictz@gmail.com', '2013');
    console.log(d1);

    d1.revise('2015');
    console.log(d1.getage());