import React from 'react';
import { Link } from 'react-router-dom';

function Post({name,description,id,image}) {
  const inline ={    
    height: "200px",
  };
  return (      
        <div className="col-sm-4 p-3">
        <div className="card card-body" style={{height:"380px"}} >
          <img src={image} style={inline} className="card-img-top mb-3" alt="Header Image"/>
          <div className="card-title">
            <Link to={"/posts/"+id}>{ name }</Link>
          </div>
          <div className="card-text">
            { description }
          </div>
        </div>              
        </div>     
  );
}

export default Post;