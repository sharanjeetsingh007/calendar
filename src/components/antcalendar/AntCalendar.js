import React, { useState } from 'react'
import "antd/dist/antd.css";
import "./AntCalendar.css";
import { Calendar, Badge } from 'antd';
import { Modal, Button } from 'antd';
import { TextField } from '@material-ui/core';
import { DatePicker, Space } from 'antd';
import { Checkbox } from 'antd';
import { Input } from 'antd';

const { RangePicker } = DatePicker;

const { TextArea } = Input;

export default function AntCalendar() {

    function getListData(value) {
        let listData;
        switch (value.date()) {
            case 8:
                listData = [
                    { type: 'warning', content: 'This is warning event.' },
                    { type: 'success', content: 'This is usual event.' },
                ];
                break;
            case 10:
                listData = [
                    { type: 'warning', content: 'This is warning event.' },
                    { type: 'success', content: 'This is usual event.' },
                    { type: 'error', content: 'This is error event.' },
                ];
                break;
            case 15:
                listData = [
                    { type: 'warning', content: 'This is warning event' },
                    { type: 'success', content: 'This is very long usual event。。....' },
                    { type: 'error', content: 'This is error event 1.' },
                    { type: 'error', content: 'This is error event 2.' },
                    { type: 'error', content: 'This is error event 3.' },
                    { type: 'error', content: 'This is error event 4.' },
                ];
                break;
            default:
        }
        return listData || [];
    }

    function dateCellRender(value) {
        const listData = getListData(value);
        return (
            <ul className="events">
                {listData.map(item => (
                    <li key={item.content}>
                        <Badge status={item.type} text={item.content} />
                    </li>
                ))}
            </ul>
        );
    }

    function getMonthData(value) {
        if (value.month() === 8) {
            return 1394;
        }
    }

    function monthCellRender(value) {
        const num = getMonthData(value);
        return num ? (
            <div className="notes-month">
                <section>{num}</section>
                <span>Backlog number</span>
            </div>
        ) : null;
    }

    // For Popup modal
    const [visible, setVisible] = React.useState(false);
    const [confirmLoading, setConfirmLoading] = React.useState(false);
    const [modalText, setModalText] = React.useState('Content of the modal');

    const showModal = () => {

        setVisible(true);

    };

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setVisible(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setVisible(false);
    };

    const panelChange = () => {
        console.log('false 😡')
        setVisible(false);


    }

    return (
        <div className="calendar"
        >
            <h4>ReactJS Ant-Design Calendar Component</h4>
            <Calendar

                dateCellRender={dateCellRender}
                monthCellRender={monthCellRender}
                //onPanelChange={panelChange}
                onSelect={showModal}
                onPanelChange={(value) => {


                    console.log("after valuerr", value.isAfter())


                    // Working as expected for before
                    if ((!(value.year()) == value.isBefore())) {
                        alert("it's working perfectly")
                    } else {
                        console.log('before current')
                    }






                }} />
            {/* PopUp */}
            <Modal
                centered={true}
                title="Event's"
                visible={visible}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <div className="form-popup">
                    <form>
                        <div className="row-1">
                            <div className="title">
                                <TextField
                                    style={{ width: '195px' }}
                                    id="standard-helperText"
                                    label="Title"
                                    placeholder={'Title of event'}
                                    variant="standard"
                                />
                            </div>
                            <div className="location">
                                <TextField
                                    style={{ width: '200px' }}
                                    id="standard-helperText"
                                    label="Location"
                                    placeholder={'Location of event'}
                                    variant="standard"
                                />
                            </div>
                        </div>
                        <div className="row-2">
                            <div className="start-calendar">
                                <Space direction="vertical" size={12}>
                                    <RangePicker
                                        placeholder={['Start date', 'End date']}
                                        style={{ width: '420px' }}
                                        size={'large'} />
                                </Space>
                            </div>
                        </div>
                        <div className='row-3'>
                            <div className='checkbox'>
                                <Checkbox>All day</Checkbox>
                            </div>
                        </div>
                        <div className='row-4'>
                            <div className='description'>
                                <label>
                                    <TextField
                                        style={{ width: '420px' }}
                                        id="description"
                                        label="Description"
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
    );
}