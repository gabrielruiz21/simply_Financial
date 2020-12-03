import React from 'react'
import { Link } from 'react-router-dom';

export default class Button extends React.Component {
  render() {
    return (
      <Link to={this.props.link} className="button button-primary">
        <i className="fa fa-chevron-right"></i> Lets start
      </Link>
    )
  }
}