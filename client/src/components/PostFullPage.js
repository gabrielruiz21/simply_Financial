import React from 'react';

function Post({name,image,sections}) {
  
console.log(sections)
  //We need to declare a function to iterate throught the section array.
  const textArray = sections.map((section) => 
  <p>{section.content}</p>
  );
  

  const inlineImage ={
    width: "1fr",       
    height: "1fr",
  };

  const inlineCard ={
    maxWidth: "60%",
  };
  return (      
        <div className="card py-md-4 px-4" style={inlineCard} >
          <div className="row no-gutters">
            <div className="col-md-5 mt-4">
              <img src={image} style={inlineImage} className="card-img " alt="at the left side"/>
            </div>
            <div className="col-md-5">
              <h5 className="card-title text-right ml-auto mr-auto">{name}</h5>                               
              <div className="text-justify ml-4">{textArray[0]}</div>
            </div>
          </div>
          <div className="card-footer text-muted">
          
          <div className="float-right">
          <button className="btn btn-success">Next</button>
          </div>
          </div>
          <div className="progress">
          <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>     
  );
}

export default Post;