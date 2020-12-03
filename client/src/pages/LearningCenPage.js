import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../cards.scss'

class CardHeader extends React.Component {
  render() {
    const { image } = this.props;
    var style = { 
        backgroundImage: 'url(' + image + ')',
    };
    return (
      <header style={style} id={image} className="card-header">
      </header>
    )
  }
}

class Button extends React.Component {
  render() {
    return (
      <Link to={this.props.link} className="button button-primary">
        <i className="fa fa-chevron-right"></i> Find out more
      </Link>
    )
  }
}

class CardBody extends React.Component {
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

export default class LearningCenPage extends Component {
  render() {
    return (
      <>
      <article className="cardLearning">
        <CardHeader image={'https://source.unsplash.com/600x400/?money,saving'}/>
        <CardBody link={"/lessons"} title={'Lessons'} text={'Learn about important financial topics, from choosing a credit card to managing your accounts responsibly.'}/>
      </article>
      <article className="cardLearning">
        <CardHeader image={'https://source.unsplash.com/600x400/?kids,bookimages,books,smile,money'}/>
        <CardBody link={"/quizzes"}title={'Quizzes'} text={'The true first step to financial health is understanding your own relationship with money and what makes you tick.That’s why we created this quizzes'}/>
      </article>
      <article className="cardLearning">
        <CardHeader image={'https://source.unsplash.com/600x400/?tv,videos,camara,electronics'}/>
        <CardBody title={'Videos'} text={'Kayaks crowd Three Sister Springs, where people and manatees maintain controversial coexistence'}/>
      </article>
      </>
    )
  }
}