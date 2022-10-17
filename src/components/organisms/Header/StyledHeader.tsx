import Image from 'next/image';

import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import generateGreetings from '@utils/generateGreetings';
import { Dropdown, Layout, Menu, Space, Typography } from 'antd';

const { Header } = Layout;

const dropdownItems = (
  <Menu
    style={{
      width: '8em',
    }}
    items={[
      {
        key: 'profile',
        icon: <UserOutlined />,
        label: <a rel="noopener noreferrer">Profile</a>,
      },
      {
        key: 'logout',
        icon: <LogoutOutlined />,
        onClick: () => {
          // history.push('/login');
        },
        label: 'Logout',
      },
    ]}
  />
);

const StyledHeader = () => {
  const username = 'Admin';

  return (
    <Header>
      <Space align="end" style={{ float: 'right', marginRight: '20px' }}>
        <Typography style={{ color: 'white' }}>{generateGreetings()},</Typography>

        <Dropdown
          overlay={dropdownItems}
          placement="bottom"
          arrow={{
            pointAtCenter: true,
          }}
        >
          <Space>
            <Typography style={{ color: 'white' }}>{username}</Typography>
            <UserOutlined style={{ color: 'white' }} />
          </Space>
        </Dropdown>
      </Space>
    </Header>
  );
};

export default StyledHeader;
