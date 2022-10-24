import { LogoImage } from '@components/atoms/LogoImage';
import { Button, Layout, Modal, Space } from 'antd';

import { LoginForm } from '../Form/Login';

const Login = () => {
  const handleForgotPassword = () => {
    Modal.info({
      title: 'Forgot password',
      content: (
        <div>
          <p>Please contact Admin</p>
        </div>
      ),
    });
  };

  return (
    <Layout className="py-12 px-10 md:px-16 lg:px-20 rounded-lg">
      <div className="">
        <LogoImage height={15} />
      </div>
      <LoginForm />
      <Button type="link" onClick={handleForgotPassword}>
        Forgot password?
      </Button>
    </Layout>
  );
};

export default Login;
