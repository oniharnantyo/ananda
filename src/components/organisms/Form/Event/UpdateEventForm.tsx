import { useRouter } from 'next/router';

import { SendOutlined } from '@ant-design/icons';
import { Editor } from '@components/molecules/Editor';
import { UploadField } from '@components/molecules/Field';
import { getEvent } from '@services/events/getEvent';
import { updateEvent } from '@services/events/updateEvent';
import { Button, Col, DatePicker, Form, Input, Row } from 'antd';
import { RangePickerProps } from 'antd/lib/date-picker';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { getUpdateEventFormRules } from './UpdateEventForm.rules';
import { UpdateEventFormProps } from './UpdateEventForm.types';

const { TextArea } = Input;

const UpdateEventForm: UpdateEventFormProps = ({ id, accessToken }) => {
  const router = useRouter();
  const [form] = Form.useForm();

  const startAtformat = 'YYYY-MM-DD HH:mm';
  const disabledDate: RangePickerProps['disabledDate'] = (current: any) => {
    return current && current < moment().add(-1, 'days').endOf('day');
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

  const {
    data: eventData,
    error,
    isFetching,
  } = useQuery(['getEvent'], () => getEvent(id, accessToken), {
    retry: false,
  });

  useEffect(() => {
    if (eventData) {
      const { data } = eventData;

      setImagePreview(data.imageURL);
      setContent(data.content);

      form.setFieldsValue({
        title: data.title,
        location: data.location,
        startAt: moment(data.startAt.toString(), startAtformat),
        imageDescription: data.imageDescription,
      });
    }
  }, [eventData, form]);

  const updateContent = (value: string) => {
    setContent(value);
  };

  const handleImagePreviewDelete = () => {
    setImagePreview('');
    setImage(null as unknown as File);
  };

  const rules = getUpdateEventFormRules(content);

  const handleSubmit = async (values: any) => {
    try {
      setLoadingButton(true);

      const req = {
        title: values.title,
        location: values.location,
        startAt: values.startAt,
        image: image as File,
        imageDescription: values.imageDescription,
        content: values.content,
      };

      const res = await updateEvent(id, req, accessToken);

      if (res) {
        router.push('/events');
      }
    } catch (error: unknown) {
      setLoadingButton(false);
      throw error;
    }
  };

  return (
    <Form layout="vertical" onFinish={handleSubmit} form={form}>
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
                defaultValue: moment('00:00:00', 'HH:mm:ss'),
              }}
              disabledDate={disabledDate}
            />
          </Form.Item>
          <Form.Item label="Image" name="image">
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

export default UpdateEventForm;
