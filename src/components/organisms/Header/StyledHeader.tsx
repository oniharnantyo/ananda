import { useRouter } from 'next/router';

import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { ErrorMessage } from '@components/molecules/Message';
import generateGreetings from '@utils/generateGreetings';
import { Dropdown, Layout, Menu, Space, Typography } from 'antd';

const { Header } = Layout;

const StyledHeader = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/auth/logout');

      if (!res.ok) {
        const resData = await res.json();
        throw new Error(resData.message);
      }

      return router.push('/auth/login');
    } catch (error: unknown) {
      ErrorMessage(error);
    }
  };

  const dropdownItems = (
    <Menu
      items={[
        {
          key: 'logout',
          icon: <LogoutOutlined />,
          onClick: () => {
            handleLogout();
          },
          label: 'Logout',
        },
      ]}
    />
  );

  const username = 'Admin';

  return (
    <Header>
      <Space align="center" className="float-right">
        <Typography style={{ color: 'white' }}>{generateGreetings()},</Typography>
        <Dropdown
          overlay={dropdownItems}
          placement="bottom"
          arrow={{
            pointAtCenter: true,
          }}
        >
          <Space>
            <Typography className="text-white">{username}</Typography>
            <UserOutlined className="text-white" />
          </Space>
        </Dropdown>
      </Space>
    </Header>
  );
};

export default StyledHeader;
