import React, { useState } from 'react';

import "./CalendarNew.css"
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Badge } from 'antd';
import { Modal, Button } from 'antd';
import { TextField } from '@material-ui/core';
import { DatePicker, Space } from 'antd';
import { Checkbox } from 'antd';
import { Input } from 'antd';

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const now = new Date();
const { RangePicker } = DatePicker;

const localizer = momentLocalizer(moment)

function CalendarNew() {

    const [visible, setVisible] = React.useState(false);
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const [pickerDate, setPickerDate] = useState(null)





    const events = [
        {
            id: 0,
            title: 'All Day Event very long title',
            allDay: true,
            start: new Date(2021, 8, 29),
            end: new Date(2021, 9, 3),
            location: 'melbourne',
        },
        {
            id: 1,
            title: 'Long Event',
            start: new Date(2021, 8, 7),
            end: new Date(2021, 8, 10),
            location: 'sydney',
        },

        {
            id: 2,
            title: 'DTS sdsdsd',
            start: new Date(2021, 8, 1, 0, 0, 0),
            end: new Date(2021, 8, 3, 0, 0, 0),
            location: 'brisbane',
        },

    ]

    // for PopUp
    const showModal = () => {

        setVisible(true);

    };


    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };

    const handleOk = (event) => {
        event.preventDefault();


        setTitle("");
        setLocation("");
        setDescription("");
        setPickerDate(new Date())
        console.log("Title = ", title, ',Location = ', location, ',Description = ', description, ',date-range', pickerDate)
        setVisible(false);

    };


    // title eventListner
    const titleChange = (event) => {
        setTitle(event.target.value)
    }
    // location eventListner
    const locationChange = (event) => {
        setLocation(event.target.value)
    }
    // description eventListner
    const descriptionChange = (event) => {
        setDescription(event.target.value)
    }
    // range picker eventListner
    const dateChange = (dateString) => {
        setPickerDate(dateString)
    }


    return (
        <div>
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
                selectable={true}
                onSelectSlot={showModal}
                onSelectEvent={event => alert(event.location)}
            />
            {/* PopUp */}
            <Modal
                centered={true}
                title="Event's"
                visible={visible}
                maskClosable={true}


                visible={visible}
                onCancel={handleCancel}

                footer={[
                    <Button onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button onClick={handleOk} form="popup_form" key="submit" htmlType="submit" type="primary">
                        Ok
                    </Button>
                ]}

            >
                <div className="form-popup">
                    <form id="popup_form">
                        <div className="row-1">
                            <div className="title">
                                <TextField
                                    style={{ width: '195px' }}
                                    id="title"
                                    name="title"
                                    label="Title"
                                    value={title}
                                    onChange={titleChange}

                                    placeholder={'Title of event'}
                                    variant="standard"
                                />
                            </div>
                            <div className="location">
                                <TextField
                                    style={{ width: '200px' }}
                                    id="location"
                                    name="location"
                                    label="Location"
                                    value={location}
                                    onChange={locationChange}
                                    placeholder={'Location of event'}
                                    variant="standard"
                                />
                            </div>
                        </div>
                        <div className="row-2">
                            <div className="start-calendar">
                                <Space direction="vertical" size={12}>
                                    <RangePicker
                                        id="date-picker"
                                        name="date_picker"
                                        value={pickerDate}
                                        onChange={dateChange}

                                        placeholder={['Start date', 'End date']}
                                        style={{ width: '420px' }}
                                        size={'large'} />
                                </Space>
                            </div>
                        </div>
                        <div className='row-3'>
                            <div className='checkbox'>
                                <Checkbox
                                    id="all_day"
                                    name="all_day"
                                >
                                    All day
                                </Checkbox>
                            </div>
                        </div>
                        <div className='row-4'>
                            <div className='description'>
                                <label>
                                    <TextField
                                        style={{ width: '420px' }}
                                        id="description"
                                        name="description"
                                        label="Description"
                                        value={description}
                                        onChange={descriptionChange}
                                        multiline
                                        rows={1}
                                        placeholder={'description of event'}
                                        variant="standard"
                                    />
                                </label>
                            </div>
                        </div>

                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default CalendarNew;
