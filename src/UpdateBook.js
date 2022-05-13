import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { deleteBook, getBookById, updateBook } from './services/fetch.utils';

export default function UpdateBook() {
  const { push } = useHistory();
  const { id } = useParams();
  const [book, setBook] = useState({
    title:'',
    author:'',
    genre:'',
    fiction: false,
    description: '',
    level: 0,
    pages: 0,
  });

  useEffect(() => {
    async function bookDetail(){
      const currentBook = await getBookById(id);
      setBook(currentBook);  
    }
    bookDetail();
  }, [id]);

  async function handleUpdateBook(e){
    e.preventDefault();
    await updateBook(book, id);
    push('/books');
  }

  async function handleDelete(e){
    e.preventDefault();
    await deleteBook(id);
    push('/books');
  }

  return (
    <div className='update'>
      <form onSubmit={handleUpdateBook}>
        <label>Title:
          <input value={book.title} required onChange={(e) => setBook({
            ...book, 
            title: e.target.value,
          })}/>
        </label>
        <label>Author:
          <input value={book.author} required onChange={(e) => setBook({
            ...book, 
            author: e.target.value,
          })}/>
        </label>
        <label>Genre:
          <input value={book.genre} required onChange={(e) => setBook({
            ...book, 
            genre: e.target.value,
          })}/>
        </label>
        <label>Level:
          <input value={book.level} required onChange={(e) => setBook({
            ...book, 
            level: e.target.value,
          })}/>
        </label>
        <label>Pages:
          <input value={book.pages} required onChange={(e) => setBook({
            ...book, 
            pages: e.target.value,
          })}/>
        </label>
        <label>Description:
          <textarea value={book.description} required onChange={(e) => setBook({
            ...book, 
            description: e.target.value,
          })}/>
        </label>
        <label>Fiction/Non-fiction:
          <select value={book.fiction} required onChange={(e) => setBook({
            ...book, 
            fiction: e.target.value,
          })}>
            <option value={true} >Fiction</option>
            <option value={false}>Non-Fiction</option>
          </select>
        </label>
        <button>Submit</button>
      </form>
      <button onClick={handleDelete}>Delete This Book</button>
    </div>
  );
}
