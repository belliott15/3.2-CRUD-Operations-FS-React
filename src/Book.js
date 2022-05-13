import React from 'react';
import { Link } from 'react-router-dom';

export default function Book({ book }) {
  return (
    <div className='card' style={{ backgroundColor: book.fiction ? 'blueviolet' : 'beige' }}>
      <Link to={`/update/${book.id}`} >
        <div>
          <h1>{book.title}</h1>
          <h4>by:{book.author}</h4>
          <p>genre:{book.genre}</p>
          <p>difficulty: {book.level}/10</p>
          <p>pages:{book.pages}</p>
        </div>
      </Link>
      
    </div>
  );
}
