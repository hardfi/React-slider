import React from 'react';
import { Container, Row, Col, Nav, NavItem, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import Rating from '../Rating/Rating.jsx';

class SingleTile extends React.Component {
  render(){
    return (
      <div className='tile'>
        <div className='header'>
          <div className='pic' style={{
              background: `url(${this.props.person.picture}) center center /cover no-repeat`
            }}></div>
          <div className='content'>
            <h4>{this.props.person.name} <span>{this.props.person.verified}</span></h4>
            <p>{this.props.person.description}</p>
            <div className='rating'>
              <Rating stars={this.props.person.rating} />
            </div>
            <h6>Average rating: {this.props.person.rating}</h6>
          </div>
        </div>
        <div className='tile-title'>
          <h2>{this.props.person.title}</h2>
        </div>
        <div className='tile-body'>
          <div className='tile-row'>
            <div>
              <h5>Industry:</h5>
              <p>{this.props.person.industry}</p>
            </div>
            <div>
              <h5>Destination:</h5>
              <p>{this.props.person.destination}</p>
            </div>
            <div>
              <h5>Salary:</h5>
              <p>{this.props.person.salary}</p>
            </div>
          </div>
          <div className='tile-row'>
            <div>
              <h5>Availability:</h5>
              <p>{this.props.person.availability}</p>
            </div>
            <div>
              <h5>Languages:</h5>
              <p>{this.props.person.languages}</p>
            </div>
            <div>
              <h5>Price for verified profile:</h5>
              <p><span>{this.props.person.price}</span></p>
            </div>
          </div>
        </div>
        <div className='tile-footer'>
          <div className='tile-btns'>
            <Button>Full description</Button>
            <div className='btns-row2'>
              <Button>Add to favorites</Button>
              <Button>Don't show again</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SingleTile
