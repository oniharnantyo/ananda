import { Space, Col, Row, Typography, Input, DatePicker, Button, Modal, Form } from "antd";
import { useState, useEffect } from "react";
import moment from 'moment'
import { UploadImage } from "./UploadImage";
import { CKEditor } from '@ckeditor/ckeditor5-react'
import DocumentEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import styled from 'styled-components'
const { TextArea } = Input


const FormItem = styled(Form.Item)`
.ant-space-item{
    maxHeight: 80px;
}`

export const AddEvent = (
    { selectedEvent }
) => {
    const [form] = Form.useForm()
    const selectedData = selectedEvent
    console.log(selectedData)
    const [showWarning, setShowWarning] = useState(false)
    const [text, setText] = useState("Input description here..");
    const descTemplate = require("../../constants/descriptionTemplate.txt")
    const isEdit = selectedEvent || false

    const handleSetTemplate = () => {
        setText('')
        fetch(descTemplate)
            .then(response => response.text())
            .then(text => setText(text))
        setShowWarning(false)
    }


    useEffect(() => {
        if (selectedData) {
            console.log('useeffect trig')
            form.setFieldsValue({ title: selectedData.title || "aa" });
        }
    }, [selectedData, form]);
    //   form.getfield

    return (
        <>
            <Form
                form={form}
            >
                <Row>
                    <Col span={12}>
                        <Space direction="vertical">
                            {/* <FormItem> */}
                                <Typography>
                                    Title
                                </Typography>
                                <FormItem name="title">
                                    <Input placeholder="Input title" />
                                </FormItem>
                            {/* </FormItem> */}
                            {/* {console.log(selectedEvent.selectedEvent.title)} */}
                            {/* <Form.Item> */}
                                <Typography>
                                Location
                                </Typography>
                                <Form.Item name="location">
                                    <Input placeholder="Input Location" />
                                </Form.Item>
                            {/* </Form.Item> */}
                            <Typography>
                                Date & time (WIB)
                            </Typography>
                            <DatePicker
                                style={{ width: 400 }}
                                format="YYYY-MM-DD HH:mm"
                                showTime={{
                                    defaultValue: moment('00:00:00', 'HH:mm:ss'),
                                }}
                            />
                            <Typography>
                                Upload Image
                            </Typography>
                            <UploadImage />
                            <Typography>
                                Image Description
                            </Typography>
                            <TextArea placeholder="Input Location" rows={4}>
                            </TextArea>
                        </Space>
                    </Col>
                    <Col span={12}>
                        <Space align="end" style={{ float: 'right' }}>
                            <Button onClick={() => setShowWarning(true)}>Use template</Button>
                        </Space>
                        <Space style={{ marginBottom: '15px' }}>
                            <Typography>
                                Event Description
                            </Typography>
                        </Space>
                        <CKEditor
                            editor={DocumentEditor}
                            data={text}
                            onReady={editor => {
                                // You can store the "editor" and use when it is needed.
                                // console.log('Editor is ready to use!', editor);
                                editor.ui.getEditableElement().parentElement.insertBefore(
                                    editor.ui.view.toolbar.element,
                                    editor.ui.getEditableElement())
                            }}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                // console.log({ event, editor, data });
                            }}
                        />
                    </Col>
                    <Modal
                        onCancel={() => setShowWarning(false)}
                        onOk={() => handleSetTemplate()}
                        // title="Warning"
                        title={'Warning'}
                        visible={showWarning}
                    >
                        <p>Clicking OK will replace your current Event Description work</p>
                        <p>This action is irreversible!</p>
                    </Modal>
                </Row>
            </Form>
        </>
    );
};
