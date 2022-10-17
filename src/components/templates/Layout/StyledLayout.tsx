import { StyledHeader } from '@components/organisms/Header';
import { Sidebar } from '@components/organisms/Sidebar';
import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';

import { StyledLayoutProps } from './StyledLayout.types';

const StyledLayout: StyledLayoutProps = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Layout hasSider>
        <Sidebar />
        <Layout>
          <StyledHeader />
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <div className="bg-white p-5">{children}</div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default StyledLayout;
