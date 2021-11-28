import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import { flowRight as compose } from 'lodash';
import {
    getAuthorsQuery,
    addBookMutation,
    getBooksQuery,
} from '../queries/queries';

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

    const updateField = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value,
        });
    };

    const submitForm = (e) => {
        e.preventDefault();
        addBookMutation({
            variables: {
                name: book.name,
                genre: book.genre,
                authorId: book.authorId,
            },
            refetchQueries: [{ query: getBooksQuery }],
        });
    };

    return (
        <form className='add-book' onSubmit={(e) => submitForm(e)}>
            <div className='field'>
                <label>Book name:</label>
                <input
                    type='text'
                    value={book.name}
                    name='name'
                    onChange={updateField}
                />
            </div>
            <div className='field'>
                <label>Genre:</label>
                <input
                    type='text'
                    value={book.genre}
                    name='genre'
                    onChange={updateField}
                />
            </div>
            <div className='field'>
                <label>Author:</label>
                <select
                    value={book.authorId}
                    name='authorId'
                    onChange={updateField}>
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
