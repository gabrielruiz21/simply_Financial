import React from 'react'
import { Link } from 'react-router-dom';

export default function Quiz({topic,image,description,id}) {
    const inline ={
        width: "1fr",    
        height: "1fr",    
    };
    return (     
    <div className="col-md-3 mb-3 mt-3">
    <div className="card card-body" style={{height:"1fr"}} >
        <img src={image} style={inline} className="card-img-top mr-auto ml-auto mb-2" alt="Header"/>
    <div className="card-title">
       { topic }
    </div>
    <div className="card-text">
        {description }
    </div>
    <div className="btn btn-outline-success mt-3">
        <Link to={"/quizzes/"+id}> Start </Link> 
    </div>
    </div>  
       
    </div>     
    )
}
