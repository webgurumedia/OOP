class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary(){
        return `${this.title} is written by ${this.author} in the year ${this.year}`;
    }

    revise(newyear){
        this.year = newyear;
        this.revised = true;
    }

    // using static method means we don't need instantiation

    static Topstories(){
    return "Today's Top Stories";
    }
}

const book1 = new Book('Rich Dad Poor Dad', 'John Hopkins', '2014');
console.log(book1);

book1.revise('2019');

console.log(book1);

// we call the static method directy since it doesn't need instantiation;
console.log(Book.Topstories());