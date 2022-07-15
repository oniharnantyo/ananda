import { Space, Col, Row, Typography, Input, DatePicker } from "antd";
import { format, intervalToDuration } from "date-fns";
import { id } from 'date-fns/locale';
import { useState, useEffect } from "react";
import moment from 'moment'
import { UploadImage } from "./UploadImage";

const {TextArea} = Input


export const AddEvent = () => {

    return (
        <>
            <Row>
                <Col span={12}>
                    <Typography>
                        Manage Event
                    </Typography>
                    <Space direction="vertical" size={'small'} style={{width:400}}>
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
                            style={{width:400}}
                            format="YYYY-MM-DD HH:mm"
                            //   disabledDate={disabledDate}
                            //   disabledTime={disabledDateTime}
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
                    <Typography>
                        Event Description
                    </Typography>
                </Col>
            </Row>

        </>
    );
};
