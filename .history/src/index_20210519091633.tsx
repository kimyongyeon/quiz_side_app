import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';

<Route path="/" exact={true} component={QuizMain} />
<Route path="/quiz_reg" component={QuizReg} />
<Route path="/quiz_select" component={QuizSelect} />
<Route path="/quiz_chart" component={QuizChart} />


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
}
