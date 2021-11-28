import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import { addAuthorMutation, getAuthorsQuery } from '../queries/queries';

const AddAuthor = ({ addAuthorMutation }) => {
    const [author, setAuthor] = useState({ name: '', age: '' });

    const updateField = (e) => {
        setAuthor({
            ...author,
            [e.target.name]: e.target.value,
        });
    };

    const submitForm = (e) => {
        e.preventDefault();
        addAuthorMutation({
            variables: {
                name: author.name,
                age: parseInt(author.age),
            },
            refetchQueries: [{ query: getAuthorsQuery }],
        });
    };

    return (
        <form className='add-author' onSubmit={(e) => submitForm(e)}>
            <div className='field'>
                <label>Author name:</label>
                <input
                    type='text'
                    value={author.name}
                    name='name'
                    onChange={updateField}
                />
            </div>
            <div className='field'>
                <label>Age:</label>
                <input
                    type='text'
                    value={author.age}
                    name='age'
                    onChange={updateField}
                />
            </div>

            <button>+</button>
        </form>
    );
};

export default graphql(addAuthorMutation, { name: 'addAuthorMutation' })(
    AddAuthor
);
