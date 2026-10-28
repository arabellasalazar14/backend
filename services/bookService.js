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
export const update = async (book) => {
    const [result] = await pool.query (
        "UPDATE book SET title= ?, author= ? WHERE id= ? ",
        [book.title, book.author, book.id]
    );
    return result.affectedRows;
}

// delete
export const deleteBook = async(id) =>{
    const deletedBook = await bookModel.remove(id);
    return deletedBook;
}