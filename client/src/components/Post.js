import React from 'react';
import { Link } from 'react-router-dom';

function Post({name,description,id,image}) {
  const inline ={
    width: "1fr",    
    height: "1fr",    
  };
  return (     
<div className="col-md-3 mb-3 mt-3">
<div className="card card-body" style={{height:"1fr"}} >
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