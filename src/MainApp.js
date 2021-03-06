// @flow
import React from 'react';
import BookListing from './BookListing';
import type { Book } from './BookListing';
import type { Job } from './JobListing';
import JobListing from './JobListing';

type Props = {
    books: Book[],
    jobs: Job[]
};

type State = {
};

export default class MainApp extends React.Component<Props, State> {
    static defaultProps: Props = {
        books: [
            {
                name: 'The Mythical Man-Month',
                authors: ['Frederick P. Brooks, Jr'],
                finishedReading: false
            },
            {
                name: 'Structure and Interpretation of Computer Programs',
                authors: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman'],
                finishedReading: false
            },
            {
                name: 'Clean Architecture',
                authors: ['Robert C Martin'],
                finishedReading: true
            },
            {
                name: 'Clean Coder',
                authors: ['Robert C Martin'],
                finishedReading: true
            },
            {
                name: 'Clean Code',
                authors: ['Robert C Martin'],
                finishedReading: true
            },
            {
                name: 'Continuous Delivery',
                authors: ['Jez Humble', 'David Farley'],
                finishedReading: true
            },
            {
                name: 'The Open Organization',
                authors: ['Jim Whitehurst'],
                finishedReading: true
            }
        ], jobs: [
            {
                id: 3,
                role: 'Fullstack Engineer',
                company: 'Facebook/Meta',
                location: 'Singapore',
                currentJob: true
            },
            {
                id: 2,
                role: 'Owner',
                company: 'WOO HUIREN',
                location: 'Singapore',
                currentJob: false
            },
            {
                id: 1,
                role: 'Software Engineer Intern',
                company: 'FogLogic',
                location: 'San Jose, California',
                currentJob: false
            }
        ]
    };

    render(): React$Element<"div"> {
        return <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h1>Huiren</h1>
                    <p>My Chinese name is ??????.</p>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <h2>Work Experience</h2>
                    <p>My past work experiences mostly involved fullstack development on PHP and Angular.</p>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <JobListing jobs={this.props.jobs} />
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <h2>Past Works</h2>
                    <p>You can view the full list on <a href="/blog/portfolio">my blog portfolio</a>.</p>
                </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <ul>
                        <li>Ngee Ann Poly WSS 2021 Trainer</li>
                        <li>Ngee Ann Poly WSS 2020 Trainer</li>
                        <li>PHPConfAsia 2019 Website</li>
                        <li>BeMew International</li>
                        <li>6 Division Cobra PT App</li>
                    </ul>
                </div>
            </div>
            <div className='row'>
                <div className='col'><h2>Books</h2></div>
            </div>
            <BookListing books={this.props.books} />
            <div className='row'>
                <div className='col'><h2>Contact Me</h2></div>
            </div>
            <div className='row'>
                <div className='col'>
                    <ul>
                        <li>hello [at] woohuiren [dot] me</li>
                        <li><a href="https://twitter.com/woohuiren">@woohuiren on Twitter</a></li>
                        <li><a href="https://github.com/GIANTCRAB">@GIANTCRAB on GitHub</a></li>
                    </ul>
                </div>
            </div>
        </div>;
    }
}