import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { QuizMain } from './container/quiz_main';

const { Header, Content, Footer } = Layout;

interface AppProps { }

function App({ }: AppProps) {
  // Create the count state.
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">퀴즈목록</Menu.Item>
          <Menu.Item key="2">퀴즈생성  <Link </Menu.Item>
          <Menu.Item key="3">퀴즈</Menu.Item>
          <Menu.Item key="4">결과보기</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>퀴즈목록</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-content">

          <QuizMain />

        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  );
}

export default App;
