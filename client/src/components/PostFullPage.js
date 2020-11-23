import React, { Component } from 'react'

export default class PostFullPage extends Component { 
state={
  index: 0,
  currentIndex: 1,
  textArray : this.props.sections.map((section) => <p>{section.content}</p>),
  buttonName: "Next",
  scale: (100 / this.props.sections.length),
  percentage : (100 / this.props.sections.length),
  dataValue: "",
  targetValue: "",
  endLesson:false
}
//good
nextContent = () => {  
  this.setState(state => {
    if (state.currentIndex === state.textArray.length)
      return {index:state.index,
              currentIndex: state.textArray.length,
              endLesson:true,
      }
    else
      return {index: state.index + 1,
              currentIndex: state.currentIndex + 1, 
              endLesson:false       
    }
  });
  this.changeButtonFunction()
}

prevContent = () =>{
  this.setState(state => {
    return {index: state.index - 1,
            currentIndex: state.currentIndex - 1
    }
  })
  this.changeButtonFunction()  
}
//good
increaseProgressBar = () =>{
  this.setState(state => {
    if(state.endLesson)
      return {scale:state.scale}
    else
      return {scale: (state.scale + state.percentage)}
  })
}

//good
decreaseProgressBar = () =>{
  this.setState(state => {
    return {scale: (state.scale - state.percentage)}
  })
}
//good
changeButtonFunction = () =>{     
    this.setState(state =>{
      console.log("Current index:" + state.currentIndex + "Array lenght : " + state.textArray.length) 
      console.log("end lesson is " + state.endLesson)
      if (state.currentIndex === state.textArray.length)
        return {buttonName:"Quiz",
                dataValue: "modal",
                targetValue: "#exampleModalCenter"
              }              
      else
        return {buttonName:"Next",
                dataValue: "",
                targetValue: ""
              }     
    })
}


  render() {
  
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
              <img src={this.props.image} style={inlineImage} className="card-img " alt="at the left side"/>
            </div>
            <div className="col-md-5">
              <h5 className="card-title text-right ml-auto mr-auto">{this.props.name}</h5>                               
              <div className="text-justify ml-4">{this.state.textArray[this.state.index]}</div>
            </div>
          </div>
          <div className="card-footer text-muted text-center">          
          <div className="float-right">
           <button className="btn btn-success" onClick={() =>{this.nextContent(); this.increaseProgressBar()}} data-toggle={this.state.dataValue} data-target={this.state.targetValue}>{this.state.buttonName}</button>
           {/* Modal */}
           <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLongTitle">Modal title</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    ...
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button className="btn btn-success ml-4" onClick={() =>{this.prevContent();this.decreaseProgressBar()}}  disabled={!this.state.index}>Back</button>
          </div>
          </div>
          <div className="progress">
          <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width:`${this.state.scale}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>     
  );
}
}
