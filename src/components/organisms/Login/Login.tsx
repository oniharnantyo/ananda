import { LogoImage } from '@components/atoms/LogoImage';
import { Button, Layout, Modal } from 'antd';

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
    <Layout className="py-12 px-10 md:px-10 rounded-lg">
      <div className="">
        <LogoImage height={15} isResponsive />
      </div>
      <LoginForm />
      <Button type="link" onClick={handleForgotPassword}>
        Forgot password?
      </Button>
    </Layout>
  );
};

export default Login;
