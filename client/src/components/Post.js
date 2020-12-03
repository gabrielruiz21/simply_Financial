import React from 'react';
import CardBody from './CardBody';
import CardHeader from './CardHeader';

export default function Post({name,description,id,image}) {
  return (     
      <article className="cardLong">
          <CardHeader image={image}/>
          <CardBody link={"/Lesson/"+id} title={name} text={description}/>
      </article>
  );
}