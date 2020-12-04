import React from 'react'
import CardBody from './CardBody';
import CardHeader from './CardHeader';

export default function Quiz({topic,image,description,id}) {
    return (     
        <article className="cardLong">
            <CardHeader image={image}/>
            <CardBody link={"/quizz/"+id} title={topic} text={description}/>
        </article>     
    )
}
