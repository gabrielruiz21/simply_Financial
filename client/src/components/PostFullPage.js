import React from 'react';
import { Link } from 'react-router-dom';


function Post({name,content,image,id}) {
  
  const inline ={
    maxWidth: "90%",
  };


  
  
  return (      
        <div className="card py-md-4 px-4" style={inline} >
          <div className="row no-gutters">
            <div className="col-md-5 mt-5">
              <img src={image} className="card-img" alt="at the left side"/>
            </div>
            <div className="col-md-6">
              <h5 className="card-title">{name}</h5>               
              <p className="text-left text-monospace pl-3">{content}</p>                      
            </div>
          </div>
          <div className="card-footer text-muted">
          
          <div className="float-right">
          <button className="btn btn-success" >Next</button>
          </div>
          </div>
        </div>     
  );
}

export default Post;