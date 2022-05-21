// @flow
import React from 'react';
import BookListing from './BookListing';
import JobListing from './JobListing';

type Props = {
};

type State = {
};

export default class MainApp extends React.Component<Props, State> {
    render(): React$Element<"div"> {
        return <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h1>Huiren</h1>
                    <p>My Chinese name is 慧仁.</p>
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
                    <JobListing />
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
            <BookListing />
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