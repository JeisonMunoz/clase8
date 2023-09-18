let book = {
    title: "1984",
    author: "George Orwell",
    yearPublished: 1949,
    getDescription: function() {
      return `${this.title} by ${this.author}, published in ${this.yearPublished}`;
    }
  }

  console.log(book.getDescription());