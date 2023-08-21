'use strict'

const myLibray = [];

function book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = () => `${this.title} by ${this.author} with ${this.pages} pages. ${this.status}`
}

function addBookToLibrary(title,author,pages,status) {
    let newBook = new book(title, author, pages, status)
    myLibray.push(newBook);
    console.log(myLibray);
}

addBookToLibrary('The Almanack of Naval Ravikant', 'Eric Jorgenson', 242, 'read')

const unscripted = new book('Unscripted', 'Mj Demarco', 350, true);
const neverFinished = new book('Never Finished', 'David Goggins', 300, true);

