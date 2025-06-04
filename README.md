# MongoDB Bookstore Assignment

## Overview
This project demonstrates the use of MongoDB for managing a bookstore database. It covers creating a collection of book documents and performing various queries, updates, deletions, aggregations, and indexing operations.

## Contents
- Inserting book documents with multiple fields
- Basic CRUD operations (Create, Read, Update, Delete)
- Advanced queries including filtering, projection, sorting, and pagination
- Aggregation pipelines for data analysis
- Index creation for performance improvement

## Database Structure

Each book document includes the following fields:
- `title` (string)
- `author` (string)
- `genre` (string)
- `published_year` (number)
- `price` (number)
- `in_stock` (boolean)
- `pages` (number)
- `publisher` (string)

## Scripts

- **Insert Books**: Inserts 10 book documents into the `books` collection.
- **Queries**: Contains various queries demonstrating CRUD operations and advanced MongoDB features.
- **Aggregation Pipelines**: Groups data to calculate averages, counts, and other statistics.
- **Indexing**: Creates indexes and shows performance benefits with explain plans.

## How to Use

1. Ensure MongoDB is installed and running locally, or use a MongoDB Atlas cluster.
2. Run the insert script to populate the database:
   ```js
   db.books.insertMany([...]);


## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB University](https://university.mongodb.com/)
- [MongoDB Node.js Driver](https://mongodb.github.io/node-mongodb-native/) 