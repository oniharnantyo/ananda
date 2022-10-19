import { useRouter } from 'next/router';

import { SendOutlined } from '@ant-design/icons';
import { Editor } from '@components/molecules/Editor';
import { UploadField } from '@components/molecules/Field';
import { IArticle } from '@domains/article';
import { getArticle } from '@services/articles/getArticle';
import { updateArticle } from '@services/articles/updateArticle';
import { Button, Col, Form, Input, Row } from 'antd';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import { getUpdateArticleFormRules } from './UpdateArticleForm.rules';
import { UpdateArticleFormProps } from './UpdateArticleForm.types';

const { TextArea } = Input;

const UpdateArticleForm: UpdateArticleFormProps = ({ id, accessToken }) => {
  const router = useRouter();
  const [form] = Form.useForm();

  const [article, setArticle] = useState<IArticle>();
  const [image, setImage] = useState<File>();
  const [imagePreview, setImagePreview] = useState('');
  const [content, setContent] = useState('');
  const [loadingButton, setLoadingButton] = useState(false);

  const updateImage = (e) => {
    if (e.target.files.length) {
      setImage(e.target.files[0]);
      setImagePreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const {
    data: articlesData,
    error,
    refetch,
    isFetching,
  } = useQuery(['getArticle'], () => getArticle(id, accessToken), {
    retry: false,
  });

  useEffect(() => {
    if (articlesData) {
      const { data } = articlesData;

      setArticle(data);
      setImagePreview(data.imageURL);
      setContent(data.content);

      form.setFieldsValue({
        title: data.title,
        author: data.author,
        description: data.description,
        imageDescription: data.imageDescription,
      });
    }
  }, [articlesData, form]);

  const updateContent = (value: string) => {
    setContent(value);
  };

  const handleImagePreviewDelete = () => {
    setImagePreview('');
    setImage(null as unknown as File);
  };

  const rules = getUpdateArticleFormRules(content);

  const handleSubmit = async (values: any) => {
    try {
      setLoadingButton(true);

      const req = {
        title: values.title,
        author: values.title,
        description: values.description,
        image: image as File,
        imageDescription: values.imageDescription,
        content: values.content,
      };

      const res = await updateArticle(id, req, accessToken);

      if (res) {
        router.push('/articles');
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
            <Input />
          </Form.Item>
          <Form.Item label="Author" name="author" rules={rules.author}>
            <Input />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={rules.description}
            initialValue={article?.description}
          >
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
            <Editor name="content" onChange={updateContent} initialValue={article?.content} />
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

export default UpdateArticleForm;
