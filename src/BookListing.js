// @flow
import React from 'react';

export type Book = {
    name: string,
    authors: string[],
    finishedReading: boolean
};

type Props = {
    books: Book[]
};

export default class BookListing extends React.Component<Props> {
    render(): React$Element<"div"> {
        const readingBooks = [];
        const finishedBooks = [];
        if (this.props.books) {
            this.props.books
                .forEach((book) => {
                    let authors = '';
                    book.authors.forEach((author, index) => {
                        if (index + 1 === book.authors.length) {
                            authors += author;
                        } else {
                            authors += author + ' & ';
                        }
                    });

                    if (!book.finishedReading) {
                        readingBooks.push(<li key={book.name}>{book.name} by {authors}</li>)
                    } else {

                        finishedBooks.push(<li key={book.name}>{book.name} by {authors}</li>)
                    }
                });
        }

        return <div className='row'>
            <div className='col-md-12 col-lg-6'>
                <h3>Currently Reading</h3>
                <ol>{readingBooks}</ol>
            </div>
            <div className='col-md-12 col-lg-6'>
                <h3>Finished Reading</h3>
                <ol>{finishedBooks}</ol>
            </div>
        </div>;
    }
}