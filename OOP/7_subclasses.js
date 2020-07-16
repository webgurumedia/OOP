class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary(){
        return `${this.title} is written by ${this.author} in the year ${this.year} in the month ${this.month}`;
    }

    revise(newyear){
        this.year = newyear;
        this.revised = true;
    }
}

class Blog extends Book {
    constructor(title, author, year, month){
/*calls the parent constructor*/ super(title, author, year);
    this.month = month
    }
}

const blog1 = new Blog('Ronaldo turns 35', 'Livshenko', '2019', 'February');
blog1.revise('2020');
console.log(blog1.getSummary());