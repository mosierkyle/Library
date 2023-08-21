'use strict'

let totalBooksCounter = 0;
let totalReadCounter = 0;
let totalReadingCounter = 0;
let totalNotReadCounter = 0;

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

function updateStats(status, status1) {
    totalBooksCounter += 1;
    if(status === 'read') {
        totalReadCounter += 1
        status1.classList.add('read')
        document.querySelector('#total-books')
    } else if (status === 'reading') {
        totalReadingCounter += 1;
        status1.classList.add('reading')
    } else if (status === 'not read') {
        totalNotReadCounter += 1;
        status1.classList.add('not-read')
    }
    document.querySelector('#total-books').textContent = `Books: ${totalBooksCounter}`
    document.querySelector('#total-read').textContent = `Books: ${totalReadCounter}`
    document.querySelector('#total-reading').textContent = `Books: ${totalReadingCounter}`
    document.querySelector('#total-not-read').textContent = `Books: ${totalNotReadCounter}`
}


//adding a book
addBookToLibrary('Unscripted', 'MJ Demarco', 432, 'reading')

addBookToLibrary('The Almanack of Naval Ravikant', 'Eric Jorgenson', 242, 'read')

function updateLibrary() {
    for(let i = 0; i < myLibrary.length; i++) {
        let book1 = document.createElement('div');
        books.appendChild(book1);
        book1.setAttribute('id', `book${i}`);
        book1.setAttribute('class', 'book');

        let title1 = document.createElement('p')
        let author1 = document.createElement('p')
        let pages1 = document.createElement('p')
        let statusButton = document.createElement('div')
        let status1 = document.createElement('button');
        let delete1 = document.createElement('button')

        book1.appendChild(title1)
        title1.setAttribute('id', `title${i}`)
        title1.setAttribute('class', 'book-title')
        title1.textContent = myLibrary[i].title

        book1.appendChild(author1)
        author1.setAttribute('id', `author${i}`)
        author1.setAttribute('class', 'book-author')
        author1.textContent = myLibrary[i].author

        book1.appendChild(pages1)
        pages1.setAttribute('id', `pages${i}`)
        pages1.setAttribute('class', 'book-pages')
        pages1.textContent = `${myLibrary[i].pages} pages`


        book1.appendChild(statusButton)
        statusButton.appendChild(status1)
        statusButton.setAttribute('id', `status-div${i}`)
        statusButton.setAttribute('class', 'book-status-div')
        status1.setAttribute('id', `status${i}`)
        status1.setAttribute('class', 'book-status')
        status1.textContent = myLibrary[i].status

        book1.appendChild(delete1)
        delete1.setAttribute('id', `delete${i}`)
        delete1.setAttribute('class', 'book-delete')
        delete1.textContent = 'remove'
        
        updateStats(myLibrary[i].status, status1)
    }
}

const libraryName = prompt(`What's your name?`)
document.querySelector('#library-name').textContent = `${libraryName}'s`
updateLibrary()
console.log(myLibrary[0].title)

