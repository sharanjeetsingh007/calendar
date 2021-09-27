import React from 'react';
import Calendar from 'react-awesome-calendar';
import header from "./header";

const events = [{
    id: 1,
    color: '#fd3153',
    from: '2021-09-02T18:00:00+00:00',
    to: '2021-09-05T19:00:00+00:00',
    title: 'This is an event'
}, {
    id: 2,
    color: '#1ccb9e',
    from: '2021-09-01T13:00:00+00:00',
    to: '2021-09-05T14:00:00+00:00',
    title: 'This is another event'
}, {
    id: 3,
    color: '#3694DF',
    from: '2021-09-05T13:00:00+00:00',
    to: '2021-09-05T20:00:00+00:00',
    title: 'This is also another event'
}];



export class NpmCalendar extends React.Component {

    render() {

        console.log(this.props.header)
        return (
            <Calendar

                header={this.props.header}
            />
        );
    }
};
export default NpmCalendar;