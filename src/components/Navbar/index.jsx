import { useState } from "react";
import { Container } from "components";
import { Layout, Menu, Space, Typography } from 'antd'
import {
    UserOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    AlignLeftOutlined,
    CalendarOutlined,
} from '@ant-design/icons'
import { BookOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
const { Header, Sider, Content } = Layout


export const Navbar=({
  currentPage,
  content
})=> {
    const [collapsed, setCollapsed] = useState(false);
    const generateGreetings = () => {
        const hours = new Date().getHours();
        const isMorning = hours >= 5 && hours < 10;
        const isDay = hours >= 10 && hours < 15;
        const isEvening = hours >= 15 && hours < 18;
        const isNight = hours >= 18 && hours < 23;
        if (isMorning) {
            return "Good Morning";
        }
        else if (isDay) {
            return "Good Afternoon";
        }
        else if (isEvening) {
            return "Good Evening";
        }
        else if (isNight) {
            return "Good Night";
        }
        else {
            return "Go to Sleep";
        }
    };

    return (
        <Container>
            <Layout>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <Space
                        align="end"
                        style={{ fontSize: "20px", margin: '14px' }}
                        onClick={() => setCollapsed(!collapsed)} >
                        {
                            collapsed ?
                                <MenuUnfoldOutlined style={{ 'color': 'white' }} /> :
                                <MenuFoldOutlined style={{ 'color': 'white' }} />
                        }
                        {/* <MenuFoldOutlined style={{'color':'white'}} /> */}
                    </Space>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={[currentPage]}
                        items={[
                            {
                                key: 'event',
                                icon:  <CalendarOutlined/>,
                                label: <Link to='/home'>Event</Link>,
                            },
                            {
                                key: 'blog',
                                icon: <AlignLeftOutlined />,
                                label: <Link to='/blog'>Article</Link>,                                
                            },
                            {
                                key: 'freebook',
                                icon: <BookOutlined />,
                                label: <Link to='/blog'>Freebook</Link>,
                            },
                        ]}
                    />
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{
                            padding: 0,
                        }}
                    >
                        <Space align="center">
                            <img src="https://pbs.twimg.com/profile_images/248185979/logo_Vidyasena.bmp" alt="logo vidyasena" className="h-12 rounded-sm px-2" height='40px' max-width={'8%'} />
                            <Typography style={{ color: 'white' }}>
                                Vidyasena - CMS
                            </Typography>
                        </Space>
                        <Space align="end" style={{ float: 'right', marginRight: '20px' }}>
                            <Typography style={{ color: 'white' }}>
                                {generateGreetings()}, YourName
                            </Typography>
                            <UserOutlined />
                        </Space>

                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        {content}
                    </Content>
                </Layout>
            </Layout>
        </Container>

    );
};
