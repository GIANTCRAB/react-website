// @flow
import React from 'react';

type Book = {
    id: number,
    name: string,
    authors: string[],
    finishedReading: boolean
};

type Props = {
    books: Book[]
};

export default class BookListing extends React.Component<Props> {
    static defaultProps: Props = {
        books: [
            {
                id: 7,
                name: 'The Mythical Man-Month',
                authors: ['Frederick P. Brooks, Jr'],
                finishedReading: false
            },
            {
                id: 6,
                name: 'Structure and Interpretation of Computer Programs',
                authors: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman'],
                finishedReading: false
            },
            {
                id: 5,
                name: 'Clean Architecture',
                authors: ['Robert C Martin'],
                finishedReading: true
            },
            {
                id: 4,
                name: 'Clean Coder',
                authors: ['Robert C Martin'],
                finishedReading: true
            },
            {
                id: 3,
                name: 'Clean Code',
                authors: ['Robert C Martin'],
                finishedReading: true
            },
            {
                id: 2,
                name: 'Continuous Delivery',
                authors: ['Jez Humble', 'David Farley'],
                finishedReading: true
            },
            {
                id: 1,
                name: 'The Open Organization',
                authors: ['Jim Whitehurst'],
                finishedReading: true
            }
        ]
    };

    render(): React$Element<"div"> {
        let readingBooks;
        let finishedBooks;
        if (this.props.books) {
            readingBooks = this.props.books
                .filter((book) => !book.finishedReading)
                .map((book) => {
                    let authors = '';
                    book.authors.forEach((author, index) => {
                        if (index + 1 === book.authors.length) {
                            authors += author;
                        } else {
                            authors += author + ' & ';
                        }
                    });

                    return <li key={book.id}>{book.name} by {authors}</li>
                });

            finishedBooks = this.props.books
                .filter((book) => book.finishedReading)
                .map((book) => {
                    let authors = '';
                    book.authors.forEach((author, index) => {
                        if (index + 1 === book.authors.length) {
                            authors += author;
                        } else {
                            authors += author + ' & ';
                        }
                    });

                    return <li key={book.id}>{book.name} by {authors}</li>
                });
        }

        return <div className='row'>
            <div className='col'>
                <h3>Currently Reading</h3>
                <ol>{readingBooks}</ol>
            </div>
            <div className='col'>
                <h3>Finished Reading</h3>
                <ol>{finishedBooks}</ol>
            </div>
        </div>;
    }
}