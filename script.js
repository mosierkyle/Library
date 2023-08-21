'use strict'

const myLibray = [];

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => `${this.title} by ${this.author} with ${this.pages} pages. ${this.read ? 'Read.' : "Havn't read."} `
}

const unscripted = new book('Unscripted', 'Mj Demarco', 350, true);
const neverFinished = new book('Never Finished', 'David Goggins', 300, true);

