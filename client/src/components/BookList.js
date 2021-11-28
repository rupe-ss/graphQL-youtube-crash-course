import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import { getBooksQuery } from '../queries/queries';

import BookDetails from './BookDetails';

const BookList = ({ data }) => {
    const [state, setState] = useState();

    const displayBooks = () => {
        if (data.loading) {
            return <div>Loading books...</div>;
        } else {
            return data.books.map((book) => {
                return (
                    <li key={book.id} onClick={(e) => setState(book.id)}>
                        {book.name}
                    </li>
                );
            });
        }
    };

    return (
        <div>
            <ul id='book-list'>{displayBooks()}</ul>
            <BookDetails bookId={state} />
        </div>
    );
};

export default graphql(getBooksQuery)(BookList);
