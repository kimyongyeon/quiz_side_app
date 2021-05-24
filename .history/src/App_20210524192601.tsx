import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import { QuizMain } from './container/quizMain/quizMain';
import { QuizReg } from './container/quizReg/quizReg';
import { QuizSelect } from './container/quizSelect/quizSelect';
import { QuizChart } from './container/quizChart/quizChart';
import { Bread } from './component/Bread';

const { Header, Content, Footer } = Layout;

interface AppProps { }

function App({ }: AppProps) {

  const items = [
    { key: 1, to: '/', label: '퀴즈메인' },
    { key: 2, to: '/quiz_reg', label: '퀴즈생성' },
    { key: 3, to: '/quiz_select', label: '퀴즈선택' },
    { key: 4, to: '/quiz_chart', label: '결과보기' },
  ]

  // Create the count state.
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          {items.map(({ key, to, label }) => (
            <Menu.Item key={key}><Link key={key} to={to}>{label}</Link> </Menu.Item>
          ))}
          {/* <Menu.Item key="1"><Link to="/">퀴즈메인</Link> </Menu.Item>
          <Menu.Item key="2"><Link to="/quiz_reg">퀴즈생성</Link> </Menu.Item>
          <Menu.Item key="3"><Link to="/quiz_select">퀴즈선택</Link> </Menu.Item>
          <Menu.Item key="4"><Link to="/quiz_chart">결과보기</Link> </Menu.Item> */}
        </Menu>

        <Content style={{ padding: '0 50px' }}>
          <Bread children={'퀴즈메인'}></Bread>
          <div className="site-layout-content">
            <Route path="/" exact component={QuizMain} />
            <Route path="/quiz_reg" exact component={QuizReg} />
            <Route path="/quiz_select" exact component={QuizSelect} />
            <Route path="/quiz_chart" exact component={QuizChart} />
          </div>
        </Content>
      </Header>

    </Layout>
  );
}

export default App;
