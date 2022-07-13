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
    console.log(newBook);
    console.log(myLibrary);
    addBox()

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
    bookInfo.append(titleInfo, pagesInfo, authorInfo);
    bookInfo.classList.add('book-info')
    document.querySelector('.right-container').appendChild(outputBox);
    outputBox.appendChild(bookInfo);

    myLibrary.forEach((book) => {
        titleInfo.textContent = `${book.title}`;
        authorInfo.textContent = `${book.author}`;
        pagesInfo.textContent = `${book.pages}`;
    })
    
    
    // function createBoxText() {
    //     for (let i = 0; i < myLibrary.length; i++) {
    //     let obj = myLibrary[i]; 
    //     bookInfo.textContent = obj.title;
    }

//     createBoxText();
// }
