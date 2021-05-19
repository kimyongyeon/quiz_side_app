import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import { QuizMain } from './container/quiz_main';
import { QuizReg } from './container/quiz_reg';
import { QuizSelect } from './container/quiz_select';
import { QuizChart } from './container/quiz_chart';
import { Bread } from './component/Bread';

const { Header, Content, Footer } = Layout;

interface AppProps { }

function App({ }: AppProps) {

  const items = [
    { to: '/', label: '퀴즈메인' },
    { to: '/quiz_reg', label: '퀴즈생성' },
    { to: '/quiz_select', label: '퀴즈선택' },
    { to: '/quiz_chart', label: '결과보기' },
  ]

  // Create the count state.
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          {items.map(({ to, label }) => (
            <Menu.Item key={to}><Link key={to} to={to}>{퀴즈메인}</Link> </Menu.Item>

            <Link key={to} to={to}>
              {label}
            </Link>
          ))}
          <Menu.Item key="1"><Link to="/">퀴즈메인</Link> </Menu.Item>
          <Menu.Item key="2"><Link to="/quiz_reg">퀴즈생성</Link> </Menu.Item>
          <Menu.Item key="3"><Link to="/quiz_select">퀴즈선택</Link> </Menu.Item>
          <Menu.Item key="4"><Link to="/quiz_chart">결과보기</Link> </Menu.Item>
        </Menu>

        <Content style={{ padding: '0 50px' }}>
          <Bread />
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
