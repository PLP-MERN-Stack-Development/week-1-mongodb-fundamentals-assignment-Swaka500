// Script to insert 10 book documents into the 'books' collection in MongoDB

db.books.insertMany([
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Adventure",
    published_year: 1988,
    price: 16.99,
    in_stock: true,
    pages: 208,
    publisher: "HarperOne"
  },
  {
    title: "The Enemy",
    author: "James Maina",
    genre: "Adventure",
    published_year: 1980,
    price: 500,
    in_stock: true,
    pages: 218,
    publisher: "Dan Rue"
  },
  {
    title: "The Big Boys",
    author: "Paul Kimani",
    genre: "Adventure",
    published_year: 1986,
    price: 300,
    in_stock: true,
    pages: 150,
    publisher: "Henry Tai"
  },
  {
    title: "The Lion",
    author: "Swaka Jai",
    genre: "Adventure",
    published_year: 2014,
    price: 800,
    in_stock: true,
    pages: 201,
    publisher: "HongKong"
  },
  {
    title: "The Twin Sisters",
    author: "Kibe Lyn",
    genre: "Adventure",
    published_year: 1975,
    price: 130,
    in_stock: true,
    pages: 150,
    publisher: "Longhorn"
  },
  {
    title: "The Mission Part",
    author: "Wiles Jenga",
    genre: "Adventure",
    published_year: 1990,
    price: 150,
    in_stock: true,
    pages: 308,
    publisher: "Harp"
  },
  {
    title: "The Tiger",
    author: "Filex Malex",
    genre: "Adventure",
    published_year: 1989,
    price: 176,
    in_stock: true,
    pages: 100,
    publisher: "Harperty"
  },
  {
    title: "The Red Sea",
    author: "Paulo Kimani",
    genre: "Adventure",
    published_year: 1999,
    price: 400,
    in_stock: true,
    pages: 299,
    publisher: "PerOne"
  },
  {
    title: "The Mum Story",
    author: "Swaka Jai",
    genre: "Adventure",
    published_year: 2011,
    price: 750,
    in_stock: true,
    pages: 104,
    publisher: "Hadrix"
  },
  {
    title: "The Mold",
    author: "Lenox Mwike",
    genre: "Adventure",
    published_year: 2018,
    price: 600,
    in_stock: true,
    pages: 169,
    publisher: "Frigon"
  }
]);



// Find all books in the Adventure genre
db.books.find({ genre: "Adventure" });

// Find books published after 2010
db.books.find({ published_year: { $gt: 2010 } });

// Find books by a specific author (Swaka Jai)
db.books.find({ author: "Swaka Jai" });

// Update the price of a specific book
db.books.updateOne(
  { title: "The Enemy" },
  { $set: { price: 800 } }
);

// Delete a book by its title
db.books.deleteOne({ title: "The Enemy" });


// Task 3: Advanced Queries

// 1. Find books that are both in stock and published after 2010
db.books.find(
  {
    in_stock: true,
    published_year: { $gt: 2010 }
  }
);

// 2. Use projection to return only the title, author, and price fields
db.books.find(
  {},
  {
    title: 1,
    author: 1,
    price: 1,
    _id: 0
  }
);

// 3. Sort books by price in ascending order
db.books.find().sort({ price: 1 });

// 4. Sort books by price in descending order
db.books.find().sort({ price: -1 });

// 5. Pagination - Page 1 (first 5 books)
db.books.find().limit(5);

// 6. Pagination - Page 2 (skip first 5 books, then show next 5)
db.books.find().skip(5).limit(5);

// Task 4: Aggregation Pipeline

// 1. Calculate the average price of books by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" }
    }
  }
]);

// 2. Find the author with the most books in the collection
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      bookCount: { $sum: 1 }
    }
  },
  {
    $sort: { bookCount: -1 }
  },
  {
    $limit: 1
  }
]);

// 3. Group books by publication decade and count them
db.books.aggregate([
  {
    $project: {
      decade: {
        $concat: [
          { $toString: { $multiply: [{ $floor: { $divide: ["$published_year", 10] } }, 10] } },
          "s"
        ]
      }
    }
  },
  {
    $group: {
      _id: "$decade",
      count: { $sum: 1 }
    }
  },
  {
    $sort: { _id: 1 }
  }
]);

// Task 5: Indexing

// 1. Create an index on the `title` field for faster searches
db.books.createIndex({ title: 1 });

// 2. Create a compound index on `author` and `published_year`
db.books.createIndex({ author: 1, published_year: -1 });

// 3. Use the `explain()` method to demonstrate performance improvement
// Example: Find a book by title and explain query performance
db.books.find({ title: "The Alchemist" }).explain("executionStats");

// Example: Use compound index to find books by author and year, and explain
db.books.find({ author: "Swaka Jai", published_year: 2014 }).explain("executionStats");

