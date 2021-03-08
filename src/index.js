import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    { id: 1, post: 'Hi, how are you?', likesCount: 54 },
    { id: 2, post: 'Norm', likesCount: 12 },
];

let dialogs = [
    {id: 1, name: 'Zina'},
    {id: 2, name: 'Nikita'},
    {id: 3, name: 'Misha'},
    {id: 4, name: 'Dima'}
  ];

  let messages = [
    {id: 1, message: 'Privet'},
    {id: 2, message: 'Privet'},
    {id: 3, message: 'Kak dela?'}
  ];

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} messages={messages} dialogs={dialogs} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
