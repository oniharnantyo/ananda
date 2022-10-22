import { useRouter } from 'next/router';

import { SendOutlined } from '@ant-design/icons';
import { UploadField } from '@components/molecules/Field';
import { createFreebook } from '@services/freebooks/createFreebook';
import { Button, Col, Form, Input, Row } from 'antd';
import { Rule } from 'antd/lib/form';
import { useState } from 'react';

import { getCreateFreebookFormRules } from './CreateFreebookForm.rules';
import { CreateFreebookFormProps } from './CreateFreebookForm.types';

const { TextArea } = Input;

const CreateFreebookForm: CreateFreebookFormProps = ({ accessToken }) => {
  const router = useRouter();

  const [image, setImage] = useState<File>();
  const [imagePreview, setImagePreview] = useState('');
  const [loading, setLoading] = useState(false);

  const updateImage = (e: any) => {
    if (e.target.files.length) {
      setImage(e.target.files[0]);
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleImagePreviewDelete = () => {
    setImagePreview('');
    setImage(null as unknown as File);
  };

  const rules = getCreateFreebookFormRules(image as File);

  const handleSubmit = async (values: any) => {
    try {
      setLoading(true);

      const req = {
        title: values.title,
        author: values.author,
        description: values.description,
        image: image as File,
        imageDescription: values.imageDescription,
        url: values.url,
      };

      const res = await createFreebook(req, accessToken);

      if (res) {
        router.push('/freebooks');
      }
    } catch (error: unknown) {
      setLoading(false);
      throw error;
    }
  };

  return (
    <Form layout="vertical" onFinish={handleSubmit}>
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
          <Form.Item label="Freebook Link" name="url" rules={rules.url as Rule[]}>
            <Input placeholder="Input freebook link" />
          </Form.Item>
        </Col>
        <Col span={12} className="pl-2">
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
                loading={loading}
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

export default CreateFreebookForm;
