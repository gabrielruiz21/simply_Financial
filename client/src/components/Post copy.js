import React from 'react';
import { Link } from 'react-router-dom';



function Post({name,description,id,image}) {
  const inline ={
    width: "200px",    
    height: "150px",
    
  };

  return (      
        <div className="col-sm-4 mb-3 mt-3">
        <div className="card card-body" style={{height:"310px"}} >
          <img src={image} style={inline} className="card-img-top mr-auto ml-auto" alt="Header Image"/>
          <div className="card-title">
            <Link to={"/posts/"+id}>{ name }</Link>
          </div>
          <div className="card-text">
            {description }
          </div>
        </div>              
        </div>     
  );
}

export default Post;