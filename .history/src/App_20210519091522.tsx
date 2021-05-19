import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import { QuizMain } from './container/quiz_main';
import { QuizReg } from './container/quiz_reg';
import { QuizSelect } from './container/quiz_select';
import { QuizChart } from './container/quiz_chart';

const { Header, Content, Footer } = Layout;

interface AppProps { }

function App({ }: AppProps) {
  // Create the count state.
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1"><Link to="/">퀴즈메인</Link> </Menu.Item>
          <Menu.Item key="2"><Link to="/quiz_reg">퀴즈생성</Link> </Menu.Item>
          <Menu.Item key="3"><Link to="/quiz_select">퀴즈선택</Link> </Menu.Item>
          <Menu.Item key="4"><Link to="/quiz_chart">결과보기</Link> </Menu.Item>
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

      <Route path="/" exact={true} component={QuizMain} />
      <Route path="/quiz_reg" component={QuizReg} />
      <Route path="/quiz_select" component={QuizSelect} />
      <Route path="/quiz_chart" component={QuizChart} />

    </Layout>
  );
}

export default App;
