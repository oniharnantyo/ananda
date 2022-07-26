import { Space, Col, Row, Typography, Input, DatePicker, Button, Modal } from "antd";
import { useState } from "react";
import moment from 'moment'
import { UploadImage } from "./UploadImage";
import { CKEditor } from '@ckeditor/ckeditor5-react'
import DocumentEditor from '@ckeditor/ckeditor5-build-decoupled-document';
const { TextArea } = Input


export const AddEvent = () => {
    const [showWarning, setShowWarning] = useState(false)
    const [text, setText] = useState("Input description here..");
    const descTemplate = require("../../constants/descriptionTemplate.txt")

    const handleSetTemplate = () => {
        setText('')
        fetch(descTemplate)
            .then(response => response.text())
            .then(text => setText(text))
        setShowWarning(false)
    }

    return (
        <>
            <Row>
                <Col span={12}>
                    <Typography>
                        Manage Event
                    </Typography>
                    <Space direction="vertical" size={'small'} style={{ width: 400 }}>
                        <Typography>
                            Title
                        </Typography>
                        <Input placeholder="Input Title">
                        </Input>
                        <Typography>
                            Location
                        </Typography>
                        <Input placeholder="Input Location">
                        </Input>
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
                        <Button onClick={() => setShowWarning(true)}>Input Template</Button>
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
                    title="Warning"
                    visible={showWarning}
                >
                    <p>Clicking OK will replace your current Event Description work</p>
                    <p>This action is irreversible!</p>
                </Modal>
            </Row>

        </>
    );
};
