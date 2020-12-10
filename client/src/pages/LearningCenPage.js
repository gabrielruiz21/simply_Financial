import React, { Component } from 'react'
import CardBody from '../components/CardBody'
import CardHeader from '../components/CardHeader'

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
        <CardBody link={"/videos"}title={'Videos'} text={'With this video series, we teach teens and pre-teens how to manage their money and foster an entrepreneurial spirit.'}/>
      </article>
      </>
    )
  }
}