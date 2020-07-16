// INHERITANCE

// constructor
function Data(name, age, email, year){
    this.name = name;
    this.age = age;
    this.email = email;
    this.year = year;
    };

    // getdata

    Data.prototype.getdata = function(){
        return `your name is ${this.name} and year is ${this.year}`;
    }

    Data.prototype.getage = function(){
        var year = new Date().getFullYear() - this.year;
        return `${this.name} is ${year} years old`;
    }

        // Instantiate Object: Data
    const d2 = new Data('Bolu', '21', 'bolu@yahoo.com', '2014');
    console.log(d2.getdata());
    console.log(d2.getage());

    function Magazine(name, age, email, year){
        this.name = name;
        this.age = age;
        this.email = email;
        this.year = year;
    }

    // inherit method from Object: Data

    Magazine.prototype = Object.create(Data.prototype);

    // Instantiate Object: Magazine 
    const maga = new Magazine('City people', '5', 'cpeople@yahoo.com', '2016');
    console.log(maga.getdata());
    console.log(maga.getage());

    // // using magazines constructor
    // // by default magazine will inherit data's consructor so i have to fix that
    // Magazine.prototype.constructor = Magazine;
    // console.log(maga);
    