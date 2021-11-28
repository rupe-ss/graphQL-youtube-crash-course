import React from 'react';
import { graphql } from 'react-apollo';
import { getBookQuery } from '../queries/queries';

const BookDetails = ({ data }) => {
    const displayBookDetails = () => {
        const { book } = data;
        if (book) {
            return (
                <div>
                    <h2>{book.name}</h2>
                    <p>Genre: {book.genre}</p>
                    <p>Author name: {book.author.name}</p>
                    <p>All books by this author:</p>
                    <ul className='other-books'>
                        {book.author.books.map((item) => {
                            return <li key={item.id}>{item.name}</li>;
                        })}
                    </ul>
                </div>
            );
        } else {
            return <div>No book selected...</div>;
        }
    };

    return <div id='book-details'>{displayBookDetails()}</div>;
};

export default graphql(getBookQuery, {
    options: ({ bookId }) => {
        return {
            variables: {
                id: bookId,
            },
        };
    },
})(BookDetails);
