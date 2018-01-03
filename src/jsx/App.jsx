import React from 'react';
import ReactDOM from 'react-dom';
import { Container, Row, Col, Nav, NavItem, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import MainSlider from './Slider/Slider.jsx';
import people from './People/People.js';

class App extends React.Component{
  render(){
    return (
      <div>
        <MainSlider people={people}/>
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
});
