import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createBook } from './services/fetch.utils';

export default function CreateBook() {
  const { push } = useHistory();
  const [book, setBook] = useState({
    title:'',
    author:'',
    genre:'',
    fiction: false,
    description: '',
    level: 0,
    pages: 0,
  });

  async function handleNewBookSubmit(e){
    e.preventDefault();

    await createBook(book);

    push('/books');
  }

  return (
    <div>
      <h2>Give us your Recommendation!</h2>
      <form onSubmit={handleNewBookSubmit}>
        <label>Title:
          <input required onChange={(e) => setBook({
            ...book, 
            title: e.target.value,
          })}/>
        </label>
        <label>Author:
          <input required onChange={(e) => setBook({
            ...book, 
            author: e.target.value,
          })}/>
        </label>
        <label>Genre:
          <input required onChange={(e) => setBook({
            ...book, 
            genre: e.target.value,
          })}/>
        </label>
        <label>Level:
          <input required onChange={(e) => setBook({
            ...book, 
            level: e.target.value,
          })}/>
        </label>
        <label>Pages:
          <input required onChange={(e) => setBook({
            ...book, 
            pages: e.target.value,
          })}/>
        </label>
        <label>Description:
          <textarea required onChange={(e) => setBook({
            ...book, 
            description: e.target.value,
          })}/>
        </label>
        <label>Fiction/Non-fiction:
          <select required onChange={(e) => setBook({
            ...book, 
            fiction: e.target.value,
          })}>
            <option value={true} >Fiction</option>
            <option value={false}>Non-Fiction</option>
          </select>
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
}
