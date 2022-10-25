import { useRouter } from 'next/router';

import { SendOutlined } from '@ant-design/icons';
import { Editor } from '@components/molecules/Editor';
import { UploadField } from '@components/molecules/Field';
import { ErrorMessage } from '@components/molecules/Message';
import { createArticle } from '@services/articles/createArticle';
import { Button, Col, Form, Input, Row } from 'antd';
import { useState } from 'react';

import { getCreateArticleFormRules } from './CreateArticleForm.rules';
import { CreateArticleFormProps } from './CreateArticleForm.types';

const { TextArea } = Input;

const CreateArticleForm: CreateArticleFormProps = ({ accessToken }) => {
  const router = useRouter();

  const [image, setImage] = useState<File>();
  const [imagePreview, setImagePreview] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);

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

  const rules = getCreateArticleFormRules(image as File, content);

  const handleSubmit = async (values: any) => {
    try {
      setLoading(true);

      const req = {
        title: values.title,
        author: values.title,
        description: values.description,
        image: image as File,
        imageDescription: values.imageDescription,
        content: values.content,
      };

      const res = await createArticle(req, accessToken);

      if (res) {
        router.push('/articles');
      }
    } catch (error: unknown) {
      setLoading(false);
      ErrorMessage(error);
    }
  };

  return (
    <Form layout="vertical" onFinish={handleSubmit}>
      <Row>
        <Col span={12} className="pr-2">
          <Form.Item label="Title" name="title" rules={rules.title}>
            <Input />
          </Form.Item>
          <Form.Item label="Author" name="author" rules={rules.author}>
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="description" rules={rules.description}>
            <TextArea rows={4} />
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
            <TextArea rows={4} />
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

export default CreateArticleForm;
