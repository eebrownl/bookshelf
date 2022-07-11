let myLibrary = [];

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}

const addBook = (e) => {
    e.preventDefault();
    
    let newBook = new Book();
    newBook.title = document.getElementById('title').value;
    newBook.author = document.getElementById('author').value;
    newBook.pages = document.getElementById('pages').value;

    myLibrary.push(newBook);
    document.querySelector('form').reset();
    console.log(newBook)
}

document.getElementById('btn').addEventListener('click', addBook)
