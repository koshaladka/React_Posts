import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
/* import App from './components/app/'; */

class WhoAmI extends Component {
  constructor(props){
    super(props);
    this.state = {
      years: 26,
    }
  //  this.nextYear = this.nextYear.bind(this)  1 способ жесткая привязка контекста вызова
  this.nextYear =() => {
    this.setState(state => ({ 
      years: ++state.years
    }))
  }
  }

/*   nextYear() {
    // this.state.years++ неверная запись
    this.setState(state => ({
      years: ++state.years
    }))
  }
 */
  render() {
    const {name, surname, link} = this.props;
    const {years} =this.state;
    return (
      <>
        <button onClick={this.nextYear}>++</button>
        <h1>My name is {name}, surname - {surname}, years = {years}</h1>
        <a href={link}>My profile</a>
      </>
    )
  }
}



const All= () => {
  return (
    <>
      <WhoAmI name="Jon" surname="Smit" link="yandex.ru"/>
      <WhoAmI name="Ivan" surname="Ivanov" link="yandex.ru"/>
      <WhoAmI name="Sasha" surname="Ershov" link="yandex.ru"/>
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <All/>
  </React.StrictMode>
);


