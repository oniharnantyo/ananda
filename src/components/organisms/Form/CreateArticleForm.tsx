import { useRouter } from 'next/router';

import { SendOutlined } from '@ant-design/icons';
import { Editor } from '@components/molecules/Editor';
import { UploadField } from '@components/molecules/Field';
import { createArticle } from '@services/articles/createArticle';
import { Button, Col, Form, Input, Row } from 'antd';
import { useState } from 'react';

import { CreateArticleFormProps } from './CreateArticleForm.types';

const { TextArea } = Input;

const CreateArticleForm: CreateArticleFormProps = ({ accessToken }) => {
  const router = useRouter();

  const [image, setImage] = useState<File>();
  const [imagePreview, setImagePreview] = useState('');

  const updateImage = (e) => {
    if (e.target.files.length) {
      setImage(e.target.files[0]);
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleImagePreviewDelete = () => {
    setImagePreview('');
    setImage(null as unknown as File);
  };

  const handleSubmit = async (values: any) => {
    try {
      const req = {
        title: values.title,
        author: values.title,
        description: values.description,
        image: image as File,
        imageDescription: values.imageDescription,
        content: values.content,
      };

      console.log(req);

      const res = await createArticle(req, accessToken);

      console.log(res);

      if (res) {
        router.push('/articles');
      }
    } catch (error: unknown) {
      console.log(error);
    }
  };

  return (
    <Form layout="vertical" onFinish={handleSubmit}>
      <Row>
        <Col span={12} className="pr-2">
          <Form.Item label="Title" name="title">
            <Input />
          </Form.Item>
          <Form.Item label="Author" name="author">
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item label="Image">
            <UploadField
              imagePreview={imagePreview}
              handleChange={updateImage}
              handleDelete={handleImagePreviewDelete}
            />
          </Form.Item>
          <Form.Item label="Image Description" name="imageDescription">
            <TextArea rows={4} />
          </Form.Item>
        </Col>
        <Col span={12} className="pl-2">
          <Form.Item label="Content" name="content">
            <Editor name="content" />
          </Form.Item>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="float-right">
            <Form.Item>
              <Button type="primary" size="large" htmlType="submit" icon={<SendOutlined />}>
                Submit
              </Button>
            </Form.Item>
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default CreateArticleForm;
