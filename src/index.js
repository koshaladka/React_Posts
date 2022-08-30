import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
/* import App from './components/app/'; */

function WhoAmI (props){
  return (
    <>
      <h1>My name is {props.name}, surname - {props.surname}</h1>
      <a href={props.link}>My profile</a>
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WhoAmI name="Jon" surname="Smit" link="yandex.ru"/>
  </React.StrictMode>
);


