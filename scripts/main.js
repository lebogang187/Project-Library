const myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// toggle whether the book was read or not
Book.prototype.toggleRead = function () {
  this.read = !this.read;
};

function toggleRead(index) {
  myLibrary[index].toggleRead();
  render();
}

function render() {
  let libraryBook = document.querySelector("#library");
  libraryBook.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookElement = document.createElement("div");
    bookElement.setAttribute("class", "book-card");
    bookElement.innerHTML = `
    <div class="card-header">
      <h3 class="title">${book.title}</h3>
      <h4 class="author">${book.author}</h4>
    </div>
    <div class="card-body">
      <p>${book.pages} pages</p>
      <p class="read-status">${book.read ? "Read" : "Not Read yet"}</p>
      <button class="remove-btn" onclick="removeBook(${i})">Remove</button>
      <button class="toggle-read-btn" onclick="toggleRead(${i})">Toggle Me</button>
    </div>
    `;
    libraryBook.appendChild(bookElement);
  }
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  render();
}

function addBookToLibrary() {
  // do stuff here
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;
  let newBook = new Book(title, author, pages, read);
  //console.log(newBook);
  myLibrary.push(newBook);
  render();
}

let newBookBtn = document.querySelector("#new-book-btn");
newBookBtn.addEventListener("click", function () {
  let newBookForm = document.querySelector("#new-book-form");
  newBookForm.style.display = "block";
});

document
  .querySelector("#new-book-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    addBookToLibrary();
    alert("You have successfully submitted your book!");
  });
