import React from 'react'

export default function Video({url,topic,description}){        
        return (  
            <div class="card" style={{width:"25%"}}>
                <iframe src={url} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen  controls height="100%" width="100%" ></iframe>
                <div class="card-body">
                    <h5 class="card-title">{topic}</h5>
                    <p class="card-text">{description}</p>
                </div>
            </div>
        )
}

