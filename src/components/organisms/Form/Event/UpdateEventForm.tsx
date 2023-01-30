import { useRouter } from 'next/router';

import { SendOutlined } from '@ant-design/icons';
import { Editor } from '@components/molecules/Editor';
import { UploadField } from '@components/molecules/Field';
import { ErrorMessage } from '@components/molecules/Message';
import { IEvent } from '@domains/event';
import { getEvent } from '@services/events/getEvent';
import { updateEvent } from '@services/events/updateEvent';
import { Button, Col, ConfigProvider, DatePicker, Form, Input, Row } from 'antd';
import { RangePickerProps } from 'antd/lib/date-picker';
import locale from 'antd/locale/id_ID';
import dayjs from 'dayjs';
import 'dayjs/locale/id';
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
    return current && current < dayjs().add(-1, 'days').endOf('day');
  };

  const [event, setEvent] = useState<IEvent>();
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

  const { data: eventData, error } = useQuery(['getEvent'], () => getEvent(id, accessToken), {
    retry: false,
  });

  useEffect(() => {
    if (eventData) {
      const { data } = eventData;

      setEvent(data as IEvent);
      setImagePreview(event?.imageURL as string);
      setContent(event?.content as string);

      form.setFieldsValue({
        title: event?.title,
        location: event?.location,
        startAt: dayjs(event?.startAt.toString()),
        imageDescription: event?.imageDescription,
      });
    }

    if (error) {
      ErrorMessage(error);
    }
  }, [event, eventData, form, error]);

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
        content: content,
      };

      const res = await updateEvent(id, req, accessToken);

      if (res) {
        router.push('/events');
      }
    } catch (error: unknown) {
      setLoadingButton(false);
      ErrorMessage(error);
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
          <ConfigProvider locale={locale}>
            <Form.Item label="Start At" name="startAt" rules={rules.startAt}>
              <DatePicker
                style={{ width: '100%' }}
                showTime={{
                  defaultValue: dayjs('00:00:00', 'HH:mm:ss'),
                }}
                name="startAt"
                format={startAtformat}
                disabledDate={disabledDate}
              />
            </Form.Item>
          </ConfigProvider>
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
            <Editor name="content" onChange={updateContent} initialValue={event?.content} />
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
