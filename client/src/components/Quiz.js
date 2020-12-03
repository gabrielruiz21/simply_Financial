import React from 'react'
import { Link } from 'react-router-dom';
import '../cards.scss'

export default function Quiz({topic,image,description,id}) {
    const inline ={
        width: "1fr",    
        height: "200px",    
    };
    
    return (     
        <div className="col-md-4" style={{maxWidth:"350px"}}>
            <div className="card card-body">
                <img src={image} style={inline} className="card-img-top mr-auto ml-auto mb-2" alt="Header"/>
                <div className="card-title">
                    { topic }
                </div>
                <div className="card-text" >
                    {description }
                </div>
                <div className="btn btn-outline-success mt-3">
                    <Link to={"/quizz/"+id}> Start </Link> 
                </div>
            </div>
        </div>     
    )
}
