import { useRouter } from 'next/router';

import { SendOutlined } from '@ant-design/icons';
import { Editor } from '@components/molecules/Editor';
import { UploadField } from '@components/molecules/Field';
import { IFreebook } from '@domains/freebook';
import { getFreebook } from '@services/freebooks/getFreebook';
import { updateFreebook } from '@services/freebooks/updateFreebook';
import { Button, Col, Form, Input, Row } from 'antd';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { getUpdateFreebookFormRules } from './UpdateFreebookForm.rules';
import { UpdateFreebookFormProps } from './UpdateFreebookForm.types';

const { TextArea } = Input;

const UpdateFreebookForm: UpdateFreebookFormProps = ({ id, accessToken }) => {
  const router = useRouter();
  const [form] = Form.useForm();

  const [image, setImage] = useState<File>();
  const [imagePreview, setImagePreview] = useState('');
  const [loadingButton, setLoadingButton] = useState(false);

  const updateImage = (e: any) => {
    if (e.target.files.length) {
      setImage(e.target.files[0]);
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const {
    data: freebooksData,
    error,
    isFetching,
  } = useQuery(['getFreebook'], () => getFreebook(id, accessToken), {
    retry: false,
  });

  useEffect(() => {
    if (freebooksData) {
      const { data } = freebooksData;

      setImagePreview(data.imageURL);

      form.setFieldsValue({
        title: data.title,
        author: data.author,
        description: data.description,
        imageDescription: data.imageDescription,
        url: data.url,
      });
    }
  }, [freebooksData, form]);

  const handleImagePreviewDelete = () => {
    setImagePreview('');
    setImage(null as unknown as File);
  };

  const rules = getUpdateFreebookFormRules();

  const handleSubmit = async (values: any) => {
    try {
      setLoadingButton(true);

      const req = {
        title: values.title,
        author: values.author,
        description: values.description,
        image: image as File,
        imageDescription: values.imageDescription,
        url: values.url,
      };

      const res = await updateFreebook(id, req, accessToken);

      if (res) {
        router.push('/freebooks');
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
          <Form.Item label="Author" name="author" rules={rules.author}>
            <Input placeholder="Input author" />
          </Form.Item>
          <Form.Item label="Description" name="description" rules={rules.description}>
            <TextArea rows={4} placeholder="Input description" />
          </Form.Item>
          <Form.Item label="Freebook Link" name="url" rules={rules.url}>
            <Input placeholder="Input freebook link" />
          </Form.Item>
        </Col>
        <Col span={12} className="pl-2">
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

export default UpdateFreebookForm;
