import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    FormOutlined,


} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';


const { Header, Sider, Content } = Layout;

const Main = ({ children = null ,key_elem = "1"}) => {
    const [collapsed, setCollapsed] = useState(false);
    return (
        <Layout style={{ minHeight: '100vh' }}>

         

            <Layout >
                <Sider trigger={null} collapsible  collapsed={collapsed} >
                <img src="https://www.cogneesol.com/assets/images/logo.svg"
                    style={{ width: collapsed ?'70px' :'178px',marginLeft:"5px",marginTop:"5px" }} alt="logo" />

                    <Menu
                        style={{ marginTop: "50px" }}
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={[key_elem]}
                    >  <Menu.Item key="1">
                            <FormOutlined />
                            <span>QMS Audit Forms</span>
                            <Link to="/forms" />
                        </Menu.Item>
                       </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header
                        className="site-layout-background"
                        style={{
                            padding: 0,
                            height: '0px'
                        }}
                    >
                        {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: () => setCollapsed(!collapsed),
                        })}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 18px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        {children}

                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};
export default Main;