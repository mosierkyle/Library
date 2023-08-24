'use strict'

let totalReadCounter = 0;
let totalReadingCounter = 0;
let totalNotReadCounter = 0;
let totalBooksCounter = 0;
const books = document.querySelector('#books');
const addBookBtn = document.querySelector('#add-book-btn');
const dialog = document.querySelector('#new-book-dialog')
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
    totalBooksCounter = myLibrary.length
    if(status === 'read') {
        totalReadCounter += 1;
        status1.classList.add('read')
        document.querySelector('#total-books')
    } else if (status === 'reading') {
        totalReadingCounter += 1;
        status1.classList.add('reading')
    } else if (status === 'not-read') {
        totalNotReadCounter += 1;
        status1.classList.add('not-read')
    }
    document.querySelector('#total-books').textContent = `Books: ${totalBooksCounter}`
    document.querySelector('#total-read').textContent = `Books Read: ${totalReadCounter}`
    document.querySelector('#total-reading').textContent = `Books Reading: ${totalReadingCounter}`
    document.querySelector('#total-not-read').textContent = `Books to Read: ${totalNotReadCounter}`
}

function changeStatus(i) {
    const bookStatusButton = document.querySelector(`#status${i}`)
    bookStatusButton.addEventListener('click', ()=> {
        const currentStatus = bookStatusButton.textContent
        if(currentStatus === 'read') {
            bookStatusButton.className = 'book-status reading'
            bookStatusButton.textContent = 'reading'
            totalReadCounter--
            totalReadingCounter++
        } else if(currentStatus === "reading") {
            bookStatusButton.className = 'book-status not-read'
            bookStatusButton.textContent = 'not-read'
            totalReadingCounter--
            totalNotReadCounter++
        } else if(currentStatus === 'not-read') {
            bookStatusButton.className = 'book-status read'
            bookStatusButton.textContent = 'read'
            totalNotReadCounter--
            totalReadCounter++
        }
        document.querySelector('#total-books').textContent = `Books: ${totalBooksCounter}`
        document.querySelector('#total-read').textContent = `Books Read: ${totalReadCounter}`
        document.querySelector('#total-reading').textContent = `Books Reading: ${totalReadingCounter}`
        document.querySelector('#total-not-read').textContent = `Books to Read: ${totalNotReadCounter}`
    })
}

//adding a book
function updateLibrary() {
    totalReadingCounter = 0;
    totalNotReadCounter = 0;
    totalReadCounter = 0;
    totalBooksCounter = 0;
    while(books.firstChild) {
        books.removeChild(books.firstChild);
    }
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
        changeStatus(i)

        book1.appendChild(delete1)
        delete1.setAttribute('id', `delete${i}`)
        delete1.setAttribute('class', 'book-delete')
        delete1.textContent = 'remove';
        delete1.addEventListener('click', ()=> {
            myLibrary.splice(i, 1)
            if(status1.textContent === 'read') {
                totalReadCounter--;
                status1.classList.add('read')
                document.querySelector('#total-books')
            } else if (status1.textContent === 'reading') {
                totalReadingCounter--;
                status1.classList.add('reading')
            } else if (status1.textContent === 'not-read') {
                totalNotReadCounter--;
                status1.classList.add('not-read')
            }
            updateLibrary()
            document.querySelector('#total-books').textContent = `Books: ${totalBooksCounter}`
            document.querySelector('#total-read').textContent = `Books Read: ${totalReadCounter}`
            document.querySelector('#total-reading').textContent = `Books Reading: ${totalReadingCounter}`
            document.querySelector('#total-not-read').textContent = `Books to Read: ${totalNotReadCounter}`
        })
        updateStats(myLibrary[i].status, status1)
    }
}

addBookBtn.addEventListener('click', ()=> {
    dialog.showModal()
})

add.addEventListener('click', (event)=> {
    event.preventDefault();
    dialog.close()
    const value1 = document.querySelector('#new-book-title').value
    const value2 = document.querySelector('#new-book-author').value
    const value3 = document.querySelector('#new-book-pages').value
    const value4 = document.querySelector('#new-book-status').value
    const addNewBook = new book(value1, value2, value3, value4);
    myLibrary.push(addNewBook);
    updateLibrary()
    document.querySelector('#new-book-title').value = ''
    document.querySelector('#new-book-author').value = ''
    document.querySelector('#new-book-pages').value = ''
    document.querySelector('#new-book-status').value = ''
})

addBookToLibrary('Unscripted', 'MJ Demarco', 432, 'reading')
addBookToLibrary('The Almanack of Naval Ravikant', 'Eric Jorgenson', 242, 'read')
addBookToLibrary('The Way of the Superior Man', 'David Deida', 224, 'not-read');
addBookToLibrary('100M offers', 'Alex Hormozi', 210, 'read');
addBookToLibrary('How to Win Friends and Influence People', 'Dale Carnegie', 320, 'read');
addBookToLibrary('Millionare Fastlane', 'MJ Demarco', 336, 'read');
addBookToLibrary('Rich Dad Poor Dad', 'Rober Kiyosaki', 336, 'read');
addBookToLibrary('The Alchemist', 'Paulo Coelho', 87, 'read');
addBookToLibrary('Dune', 'Frank Herbert', 897, 'read');
addBookToLibrary('Dune Messiah', 'Frank Herbert', 304, 'read');
addBookToLibrary('The Children of Dune', 'Frank Herbert', 444, 'read');
addBookToLibrary('Never Finished', 'David Goggins', 312, 'read');
addBookToLibrary('48 Laws of Power', 'Robert Greene', 484, 'read');
addBookToLibrary('Meditations', 'Marcus Aurelius', 410, 'read');
addBookToLibrary("Can't Hurt Me", 'David Goggins', 320, 'read');
addBookToLibrary('100M leads', 'Alex Hormozi', 482, 'reading');

const libraryName = 'Kyle'
document.querySelector('#library-name').textContent = `${libraryName}'s`
updateLibrary()

