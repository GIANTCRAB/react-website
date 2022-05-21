// @flow
import React from 'react';

type Job = {
    id: number,
    role: string,
    company: string,
    location: string,
    currentJob: boolean
};

type Props = {
    jobs: Job[]
};

export default class JobListing extends React.Component<Props> {
    static defaultProps: Props = {
        jobs: [
            {
                id: 1,
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
                id: 3,
                role: 'Software Engineer Intern',
                company: 'FogLogic',
                location: 'San Jose, California',
                currentJob: false
            }
        ]
    };

    render(): React$Element<"ol"> {
        let content;
        if (this.props.jobs) {
            content = this.props.jobs.map((job) => {
                if (job.currentJob) {
                    return <li key={job.id}>{job.role} @ {job.company} in {job.location} <strong>(current)</strong></li>
                }
                return <li key={job.id}>{job.role} @ {job.company} in {job.location}</li>
            });
        }

        return <ol>{content}</ol>;
    }
}