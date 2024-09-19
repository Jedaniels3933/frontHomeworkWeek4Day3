// Exploring JavaScript Objects


// Task 1 : 

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages

}

//Task 2: 

Book.prototype.displayInfo = function(){
    console.log(`${this.title} by ${this.author}, ${this.pages} pages`)
}

//Task 3 (Bonus): 

let library = [];

function addBook(title, author, pages){
    let newBook = new Book(title, author, pages);
    library.push(newBook);
}

function searchByTitle(title){
    return library.filter(book => book.title === title);
}

function searchByAuthor(author){
    return library.filter(book => book.author === author);
}

addBook("American Gods", "Neil Gaiman", 465);    // Example 

//Task 4 (Bonus): Create functions that utilize the filter method to filter out books that contain more than 100 pages and the map method to add "Title: " and "Author: " to the book's title and author properties respectably.

function filterByPages(){
    return library.filter(book => book.pages > 100);
}

function addTitleAndAuthor(){
    return library.map(book => {
        book.title = `Title: ${book.title}`;
        book.author = `Author: ${book.author}`;
        return book;
    });
}

//Exploring Objects and Math in JavaScript

//Task 1: 

function Account(accountNumber, balance, owner){
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
}

// Task 2: 

Account.prototype.deposit = function(amount){
    this.balance += amount;
    console.log(`Deposited $${amount}. New balance: $${this.balance}`);
}

Account.prototype.withdraw = function(amount){
    if(amount > this.balance){
        console.log("Insufficient funds");
    } else {
        this.balance -= amount;
        console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
    }
}

// - Task 3: 
// A=P(1+nr​)^nt

function calculateInterest(years, rate){
    let P = this.balance;
    let n = 12;
    let r = rate / 100;
    let t = years;
    let A = P * Math.pow(1 + r/n, n*t);
    return Math.ceil(A);
}
