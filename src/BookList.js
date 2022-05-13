import React, { useState, useEffect } from 'react';
import Book from './Book';
import { getBooks } from './services/fetch.utils';

export default function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    async function allBooks(){
      const everyBook = await getBooks();
      setBooks(everyBook);
    }
    allBooks();
  }, []);

  return (
    <div>
      {books.map((book) => <Book key={book.id + book.title + book.pages} book={book} />)}
    </div>
  );
}
