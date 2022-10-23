import { useRouter } from 'next/router';

import { Button, Form, Input, Modal } from 'antd';
import { useState } from 'react';

const LoginForm = () => {
  const router = useRouter();

  const [loadingButton, setLoadingButton] = useState(false);

  const invalidLoginModal = (message: string) => {
    Modal.warning({
      title: 'Failed to login',
      content: message,
    });
  };

  const handleSubmit = async (values: any) => {
    try {
      setLoadingButton(true);

      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values, null, 2),
      });

      if (!res.ok) {
        setLoadingButton(false);

        if (res.status !== 401 && res.status !== 404) {
          throw new Error('Something went wrong!');
        }

        throw new Error('Invalid username or password. Please try again!');
      }

      if (res) {
        router.push('/');
      }
    } catch (error: any) {
      setLoadingButton(false);
      invalidLoginModal(error.message);
    }
  };

  return (
    <Form
      name="login"
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={handleSubmit}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input placeholder="Input email" />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password placeholder="Input password" />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" loading={loadingButton}>
          Sign In
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
