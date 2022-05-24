// @flow
import React from 'react';

export type Job = {
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