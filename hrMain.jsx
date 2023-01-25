import React from 'react';
import '../index2.css';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
const { Header, Content, Footer } = Layout;


const HrMain = ({ children = null ,key_elem = "1"}) => {

    return (
        <Layout className="layout">
            <Header>
            <div className="logo" ><img src="https://www.cogneesol.com/assets/images/logo.svg"
                    style={{ width: '150px' ,marginTop:'-30px',marginLeft:'-40px'}} alt="logo" /></div>
      
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[key_elem]}
                   
                > <Menu.Item key="1">
          
                <span>Forms</span>
                <Link to="/hrMainForms" />
                </Menu.Item>
                <Menu.Item key="2">
          
                <span>Form Dashboard</span>
          
            </Menu.Item></Menu>
            </Header>
            <Content
                style={{
                    padding: '0 50px',
                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                 
                </Breadcrumb>
                <div
                    className="site-layout-content"
                    style={{
                        background:'white'
                    }}
                >
                   {children}
                </div>
            </Content>
            <Footer
                style={{
                    textAlign: 'center',
                }}
            >
                Cogneesol ©2023 
            </Footer>
        </Layout>
    );
};
export default HrMain;