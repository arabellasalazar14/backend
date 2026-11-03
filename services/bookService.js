import * as bookModel from '../models/bookModel.js';

export const fetchAllBooks = async () => {
  const book = await bookModel.fetch();
  return book;
}

// insert
export const createBook = async (book) => {
  const bookId = await bookModel.insert(book);
  return bookId;
}

// update
export const updateBook = async (book) => {
    const updateBook = await bookModel.update(book);
    return updateBook;
}

// delete
export const deleteBook = async(id) =>{
    const deletedBook = await bookModel.remove(id);
    return deletedBook;
}