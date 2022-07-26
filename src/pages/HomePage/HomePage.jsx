import { Container, Navbar } from "components";
import { Input, Space, Table, Button, Modal } from 'antd'
import { useState } from 'react'
import { DeleteOutlined, EditOutlined, SearchOutlined } from "@material-ui/icons";
import { PlusOutlined } from '@ant-design/icons'
import { AddEvent } from "./AddEvent";
import mockEventData from "./../../constants/mockEvent.json"

function Home() {
    console.log('home')
    const [searchValue, setSearchValue] = useState('')
    const [openNewEventDialog, setOpenNewEventDialog] = useState(false)
    const columns = [
        {
            title: 'Event ID',
            dataIndex: 'id',
            key: 'id',
            sorter: (a, b) => a.id - b.id,
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Location',
            dataIndex: 'location',
            key: 'location',
        },
        {
            title: 'Started At',
            dataIndex: 'dateStart',
            key: 'dateStart',
        },
        {
            title: 'Created At',
            dataIndex: 'dateCreate',
            key: 'dateCreate',
        }, {
            title: 'Last Updated',
            dataIndex: 'dateUpdate',
            key: 'dateUpdate',
        },
        {
            align: 'center',
            title: 'Action',
            key: 'action',
            render: (_) => (
                <Space size="small">
                    <a><EditOutlined /></a>
                    <a><DeleteOutlined style={{ color: "red" }} /></a>
                </Space>
            ),
        },
    ];

    const content = () => {
        return (
            <>
                <Space align="center" style={{ float: 'left', margin: '10px 0px' }}>
                    <Input
                        onChange={(e) => { setSearchValue(e.target.value) }}
                        suffix={<SearchOutlined />}
                        style={{ width: "300px" }}
                        placeholder="Search Title">
                    </Input>
                </Space>
                <Space style={{ float: 'right', margin: '10px 0px' }}>
                    <Button onClick={() => { setOpenNewEventDialog(true) }}><PlusOutlined />New Event</Button>
                </Space>

                <Table
                    style={{
                        minHeight: 280,
                    }}
                    columns={columns}
                    dataSource={mockEventData}
                    pagination={{ position: 'bottom' }}
                    bordered
                />

                {
                    <Modal
                        title="Add New Event"
                        centered
                        visible={openNewEventDialog}
                        onOk={() => setOpenNewEventDialog(false)}
                        onCancel={() => setOpenNewEventDialog(false)}
                        maskClosable={false}
                        width={window.screen.width * 98 / 100}
                        // bodyStyle={{height: window.screen.height * 70 / 100}}
                        footer={[
                            <Button key="submit" type="primary"  onClick={() =>setOpenNewEventDialog(false)}>
                              Save as draft
                            </Button>,
                            <Button
                              key="link"
                              type="primary"
                              onClick={() =>setOpenNewEventDialog(false)}
                            >
                              Submit
                            </Button>,
                          ]}
                    >
                        <AddEvent />
                    </Modal>
                }
            </>
        )

    }

    return (
        <Container>
            <Navbar content={content()} currentPage={'event'} />
        </Container>
    );
};
export default Home;
