import React from 'react';
import { Link } from 'react-router-dom';
import '../cards.scss'

function Post({name,description,id,image}) {
  const inline ={
    width: "1fr",    
    height: "200px",    
  };
  return (     
<div className="col-md-4" style={{maxWidth:"350px"}}> 
  <div className="card card-body">
    <img src={image} style={inline} className="card-img-top mr-auto ml-auto mb-2" alt="Header"/>
    <div className="card-title">
      <Link to={"/Lesson/"+id}>{ name }</Link>
    </div>
    <div className="card-text">
      {description }
    </div>
  </div>              
</div>     

  );
}

export default Post;