import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const element = React.createElement('div', { children: 'putin hujlo' });
// // const jsxElement = <div>putin hujlo</div>;
// console.log(element);
// ReactDOM.render(<Profile />, document.querySelector('#root'));
