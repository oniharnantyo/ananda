import Link from 'next/link';
import { useRouter } from 'next/router';

import {
  AlignLeftOutlined,
  BookOutlined,
  CalendarOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Space } from 'antd';
import { useState } from 'react';

const { Sider } = Layout;

const menus = [
  {
    key: 'events',
    icon: <CalendarOutlined />,
    label: <Link href="/events">Event</Link>,
  },
  {
    key: 'articles',
    icon: <AlignLeftOutlined />,
    label: <Link href="/articles">Article</Link>,
  },
  {
    key: 'freebooks',
    icon: <BookOutlined />,
    label: <Link href="/blogs">Freebook</Link>,
  },
];

const Sidebar = () => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  const pathname = router.pathname.replace('/', '');

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <Space
        align="end"
        style={{ fontSize: '20px', margin: '14px' }}
        onClick={() => setCollapsed(!collapsed)}
      >
        {collapsed ? (
          <MenuUnfoldOutlined style={{ color: 'white' }} />
        ) : (
          <MenuFoldOutlined style={{ color: 'white' }} />
        )}
      </Space>
      <div className="logo" />
      <Menu mode="inline" theme="dark" defaultSelectedKeys={[pathname]} items={menus} />
    </Sider>
  );
};

export default Sidebar;
