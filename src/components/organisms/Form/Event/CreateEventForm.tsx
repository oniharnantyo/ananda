import { useRouter } from 'next/router';

import { SendOutlined } from '@ant-design/icons';
import { Editor } from '@components/molecules/Editor';
import { UploadField } from '@components/molecules/Field';
import { ErrorMessage } from '@components/molecules/Message';
import { createEvent } from '@services/events/createEvent';
import { Button, Col, DatePicker, Form, Input, Row } from 'antd';
import { RangePickerProps } from 'antd/lib/date-picker';
import dayjs from 'dayjs';
import { useState } from 'react';

import { getCreateEventFormRules } from './CreateEventForm.rules';
import { CreateEventFormProps } from './CreateEventForm.types';

const { TextArea } = Input;

const CreateEventForm: CreateEventFormProps = ({ accessToken }) => {
  const router = useRouter();

  const startAtformat = 'YYYY-MM-DD HH:mm';
  const disabledDate: RangePickerProps['disabledDate'] = (current: any) => {
    return current && current < dayjs().add(-1, 'days').endOf('day');
  };

  const [image, setImage] = useState<File>();
  const [imagePreview, setImagePreview] = useState('');
  const [content, setContent] = useState('');
  const [loadingButton, setLoadingButton] = useState(false);

  const updateImage = (e: any) => {
    if (e.target.files.length) {
      setImage(e.target.files[0]);
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const updateContent = (value: string) => {
    setContent(value);
  };

  const handleImagePreviewDelete = () => {
    setImagePreview('');
    setImage(null as unknown as File);
  };

  const rules = getCreateEventFormRules(image as File, content);

  const handleSubmit = async (values: any) => {
    try {
      setLoadingButton(true);

      const req = {
        title: values.title,
        location: values.location,
        startAt: values.startAt,
        image: image as File,
        imageDescription: values.imageDescription,
        content: content,
      };

      const res = await createEvent(req, accessToken);

      if (res) {
        router.push('/events');
      }
    } catch (error: unknown) {
      setLoadingButton(false);
      ErrorMessage(error);
    }
  };

  return (
    <Form layout="vertical" onFinish={handleSubmit}>
      <Row>
        <Col span={12} className="pr-2">
          <Form.Item label="Title" name="title" rules={rules.title}>
            <Input placeholder="Input title" />
          </Form.Item>
          <Form.Item label="Location" name="location" rules={rules.location}>
            <Input placeholder="Input location" />
          </Form.Item>
          <Form.Item label="Start At" name="startAt" rules={rules.startAt}>
            <DatePicker
              style={{ width: '100%' }}
              format={startAtformat}
              showTime={{
                defaultValue: dayjs('00:00:00', 'HH:mm:ss'),
              }}
              disabledDate={disabledDate}
            />
          </Form.Item>
          <Form.Item label="Image" name="image" rules={rules.image}>
            <UploadField
              imagePreview={imagePreview}
              handleChange={updateImage}
              handleDelete={handleImagePreviewDelete}
            />
          </Form.Item>
          <Form.Item
            label="Image Description"
            name="imageDescription"
            rules={rules.imageDescription}
          >
            <TextArea rows={4} placeholder="Input image description" />
          </Form.Item>
        </Col>
        <Col span={12} className="pl-2">
          <Form.Item label="Content" name="content" rules={rules.content}>
            <Editor name="content" onChange={updateContent} />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="float-right">
            <Form.Item>
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                icon={<SendOutlined />}
                loading={loadingButton}
              >
                Submit
              </Button>
            </Form.Item>
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default CreateEventForm;
