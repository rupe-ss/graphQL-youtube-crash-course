import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import { getAuthorsQuery, addBookMutation } from '../queries/queries';

const AddBook = ({ getAuthorsQuery, addBookMutation }) => {
  const [book, setBook] = useState({ name: '', genre: '', authorId: '' });

  const displayAuthors = () => {
    if (getAuthorsQuery.loading) {
      return <option disabled>Loading authors</option>;
    } else {
      return getAuthorsQuery.authors.map((author) => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(book);
    addBookMutation();
  };

  return (
    <form id='add-book' onSubmit={(e) => submitForm(e)}>
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
          {displayAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>
  );
};

export default compose(
  graphql(getAuthorsQuery, { name: 'getAuthorsQuery' }),
  graphql(addBookMutation, { name: 'addBookMutation' })
)(AddBook);
