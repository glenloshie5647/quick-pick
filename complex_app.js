/* complex_app.js */

// This JavaScript code represents a complex application that manages a library.

// Library class
class Library {
  constructor(name, address) {
    this.name = name;
    this.address = address;
    this.books = [];
    this.patrons = [];
    this.staff = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  removeBook(book) {
    const index = this.books.indexOf(book);
    this.books.splice(index, 1);
  }

  addPatron(patron) {
    this.patrons.push(patron);
  }

  removePatron(patron) {
    const index = this.patrons.indexOf(patron);
    this.patrons.splice(index, 1);
  }

  hireStaff(staffMember) {
    this.staff.push(staffMember);
  }

  fireStaff(staffMember) {
    const index = this.staff.indexOf(staffMember);
    this.staff.splice(index, 1);
  }
}

// Book class
class Book {
  constructor(title, author, genre) {
    this.title = title;
    this.author = author;
    this.genre = genre;
  }

  displayInfo() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
    console.log(`Genre: ${this.genre}`);
  }
}

// Patron class
class Patron {
  constructor(name, age, address, phoneNumber) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.phoneNumber = phoneNumber;
    this.borrowedBooks = [];
  }

  borrowBook(book) {
    this.borrowedBooks.push(book);
  }

  returnBook(book) {
    const index = this.borrowedBooks.indexOf(book);
    this.borrowedBooks.splice(index, 1);
  }
}

// Staff class
class Staff {
  constructor(name, position, salary) {
    this.name = name;
    this.position = position;
    this.salary = salary;
  }

  promoteStaff(newPosition) {
    this.position = newPosition;
  }
}

// Create a library
const library = new Library("Awesome Library", "123 Main St");

// Create books
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "Classic");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "Fiction");
const book3 = new Book("1984", "George Orwell", "Dystopian");

// Add books to the library
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

// Create patrons
const patron1 = new Patron("John Smith", 25, "456 Elm St", "555-1234");
const patron2 = new Patron("Jane Doe", 32, "789 Oak Ave", "555-5678");

// Add patrons to the library
library.addPatron(patron1);
library.addPatron(patron2);

// Create staff members
const staff1 = new Staff("Alice Johnson", "Librarian", 50000);
const staff2 = new Staff("Bob Davis", "Assistant Librarian", 30000);

// Hire staff members at the library
library.hireStaff(staff1);
library.hireStaff(staff2);

// Perform some operations
console.log(`Welcome to ${library.name}!`);

patron1.borrowBook(book1);
patron1.borrowBook(book2);
patron2.borrowBook(book3);

book1.displayInfo();

library.removeBook(book2);

staff1.promoteStaff("Head Librarian");

patron1.returnBook(book1);

console.log(`Thank you for visiting ${library.name}!`);

// Output:
// Welcome to Awesome Library!
// Title: The Great Gatsby
// Author: F. Scott Fitzgerald
// Genre: Classic
// Thank you for visiting Awesome Library!