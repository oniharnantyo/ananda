import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';

import {
  AlignLeftOutlined,
  BookOutlined,
  CalendarOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { LogoImage } from '@components/atoms/LogoImage';
import { Col, Layout, Menu, Row, Space, Typography } from 'antd';
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
    label: <Link href="/freebooks">Freebook</Link>,
  },
];

const getPathname = (router: NextRouter) => {
  const path = router.pathname.split('/');
  return path.length ? path[1] : '';
};

const Sidebar = () => {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  const pathname = getPathname(router);

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <Row
        align="middle"
        style={{ fontSize: '20px' }}
        className={!collapsed ? 'm-[0.575rem]' : 'mx-[0.575rem] my-[0.9rem]'}
        onClick={() => setCollapsed(!collapsed)}
      >
        <Col>
          {collapsed ? (
            <MenuUnfoldOutlined className="text-white" />
          ) : (
            <MenuFoldOutlined className="text-white" />
          )}
        </Col>
        {!collapsed && (
          <>
            <Col className="pt-2">
              <LogoImage height={25} isResponsive={false} />
            </Col>
            <Col>
              <Typography className="text-white text-sm text-center">Vidyasena CMS</Typography>
            </Col>
          </>
        )}
      </Row>
      <Menu mode="inline" theme="dark" defaultSelectedKeys={[pathname]} items={menus} />
    </Sider>
  );
};

export default Sidebar;
