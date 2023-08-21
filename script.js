'use strict'

const books = document.querySelector('#books');
const myLibrary = [];

function book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = () => `${this.title} by ${this.author} with ${this.pages} pages. ${this.status}`
}

function addBookToLibrary(title,author,pages,status) {
    let newBook = new book(title, author, pages, status)
    myLibrary.push(newBook);
}


//adding a book
addBookToLibrary('The Almanack of Naval Ravikant', 'Eric Jorgenson', 242, 'read')
console.log(myLibrary[0].title)

let book1 = document.createElement('div')
books.appendChild(book1)
book1.setAttribute('id', 'book1')
book1.setAttribute('class', 'book')

let title1 = document.createElement('p')
let author1 = document.createElement('p')
let pages1 = document.createElement('p')
let status1 = document.createElement('button')
let delete1 = document.createElement('button')

book1.appendChild(title1)
title1.setAttribute('id', 'title1')
title1.setAttribute('class', 'book-title')
title1.textContent = myLibrary[0].title

book1.appendChild(author1)
author1.setAttribute('id', 'author1')
author1.setAttribute('class', 'book-author')
author1.textContent = myLibrary[0].author

book1.appendChild(pages1)
pages1.setAttribute('id', 'pages1')
pages1.setAttribute('class', 'book-pages')
pages1.textContent = `${myLibrary[0].pages} pages`

book1.appendChild(status1)
status1.setAttribute('id', 'status1')
status1.setAttribute('class', 'book-status')
status1.classList.add('read')
status1.textContent = myLibrary[0].status

book1.appendChild(delete1)
delete1.setAttribute('id', 'delete1')
delete1.setAttribute('class', 'book-delete')
delete1.textContent = 'X'


const unscripted = new book('Unscripted', 'Mj Demarco', 350, true);
const neverFinished = new book('Never Finished', 'David Goggins', 300, true);

