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
    
    if(document.getElementById('title').value == '' || document.getElementById('author').value == '' || document.getElementById('pages').value == '') {
        alert('Please fill out all fields')
    } else {
    let newBook = new Book();
    newBook.title = document.getElementById('title').value;
    newBook.author = document.getElementById('author').value;
    newBook.pages = document.getElementById('pages').value;

    myLibrary.push(newBook);
    document.querySelector('form').reset();
    addBox()
    }
}

document.getElementById('btn').addEventListener('click', addBook)

function addBox() {

    let outputBox = document.createElement('div');
    outputBox.classList.add('output-box');
    let bookInfo = document.createElement('p');
    let titleInfo = document.createElement('span')
    let authorInfo = document.createElement('span')
    let pagesInfo = document.createElement('span')
    titleInfo.classList.add('info-styling');
    authorInfo.classList.add('info-styling');
    pagesInfo.classList.add('info-styling');
    bookInfo.append(titleInfo, authorInfo, pagesInfo);
    bookInfo.classList.add('book-info')
    document.querySelector('.right-container').appendChild(outputBox);
    outputBox.appendChild(bookInfo);

    myLibrary.forEach((book) => {
        titleInfo.textContent = `Title: ${book.title}`;
        authorInfo.textContent = `Author: ${book.author}`;
        pagesInfo.textContent = `Pages: ${book.pages}`;
    })
}
