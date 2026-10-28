import * as bookModel from '../models/bookModel.js';

export const fetchAllBooks = async () => {
  const book = await bookModel.fetch();
  return book;
}

export const createBook = async (book) => {
  const bookId = await bookModel.insert(book);
  return bookId;
}