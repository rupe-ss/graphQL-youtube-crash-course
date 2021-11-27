import React, { useState } from 'react';

const AddBook = () => {
  const [book, setBook] = useState({ name: '', genre: '', authorId: '' });

  const submitForm = (e) => {
    e.preventDefault();
    console.log(book);
  };

  return (
    <form id='add-book'>
      <div className='field'>
        <label>Book name:</label>
        <input
          type='text'
          onChange={(e) => setBook({ name: e.target.value })}
        />
      </div>
      <div className='field'>
        <label>Genre:</label>
        <input
          type='text'
          onChange={(e) => setBook({ genre: e.target.value })}
        />
      </div>
      <div className='field'>
        <label>Author:</label>
        <select onChange={(e) => setBook({ authorId: e.target.value })}>
          <option>Select author</option>
          {this.displayAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>
  );
};

export default AddBook;
