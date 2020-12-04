import Button from '../components/Button'
import React from 'react'

export default class CardBody extends React.Component {
  render() {
    return (
      <div className="card-body">        
        <h2>{this.props.title}</h2>        
        <p className="body-content">{this.props.text}</p>        
        <Button link={this.props.link}/>
      </div>
    )
  }
}