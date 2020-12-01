import React, { Component } from 'react'

export default class QuizFullPage extends Component {
    state={
        index: 0,
        currentIndex:1,
        questionsArray : this.props.quizSections.map((question) => <p>{question.questions}</p>),
        choicesArray: this.props.quizSections.map((choice) => choice.choices),
        endQuiz:false,
        buttonName: "Next",
        userAnswers: [ Array(this.props.quizSections.length).fill("1") ],
        answers: this.props.quizSections.map((object) => object.answer),
        dataValue: "",
        targetValue: "",
    }
    nextContent =() =>{
        this.setState(state =>{
            if(state.currentIndex === state.choicesArray.length)
                return{
                    index:state.index,
                    currentIndex:state.choicesArray.length,
                    endQuiz:true,
                }
            else
                return {
                    index: state.index + 1,
                    currentIndex: state.currentIndex + 1,
                    endQuiz: false,                    
                }
        })
        this.changeButtonName()
    }
    prevContent = () =>{
        this.setState(state =>{
            return{
                index: state.index - 1,
                currentIndex: state.currentIndex - 1,
                buttonName: "Next",
                endQuiz: false,
            }
        })
        this.changeButtonName()
    }
    changeButtonName = () =>{
        this.setState(state =>{
            if(state.currentIndex === state.choicesArray.length)
            return{
                buttonName: "Submit",
                dataValue: "modal",
                targetValue: "#exampleModalCenter"
            }
            else
            return{
                buttonName: "Next",
                dataValue: "",
                targetValue: "",
            }
        })
    }
    answerChanged = (event) =>{
        event.persist()
        this.setState(state=>{
            state.userAnswers[state.index] = event.target.value
            return {
                //somehow i need this here otherwise it will break the quiz code
            }
        });
    }
    render() {
        const inlineImage ={
            width: "1fr",       
            height: "1fr",
        };
        
        const inlineCard ={
            maxWidth: "60%",
        };
        const choices = this.state.choicesArray[this.state.index].split(",");
        const splitChoices = choices.map((element) =>{ 
            return(
                <div className="radio" > 
                    <label>
                        <input 
                        type="radio" 
                        value={element[1]} 
                        checked={this.state.userAnswers[this.state.index] === element[1]}
                        onChange={this.answerChanged} 
                        />
                        {element}
                    </label>                    
                </div>               
            )
        })
        console.log(this.state.answers)
        return (
            <>
                <div className="card py-md-4 px-4" style={inlineCard}>
                <div className="row no-gutters">
                <div className="col-md-5 mt-4">
                    <img src={this.props.image} style={inlineImage} className="card-img " alt="at the left side"/>
                </div>
                <div className="col-md-5 m-auto">
                <h5 className="card-title text-right ml-auto mr-auto">{this.props.topic}</h5>                               
                <div className="text-justify ml-4">{this.state.questionsArray[this.state.index]}</div>
                <form className=" ml-4">{splitChoices}</form>
                </div>
                </div>
                <div className="card-footer text-muted text-right">
                    <button className="btn btn-success mr-2" onClick={() =>{this.prevContent()}} disabled={!this.state.index}>Back</button>
                    <button className="btn btn-success" onClick={() =>{this.nextContent()}} data-toggle={this.state.dataValue} data-target={this.state.targetValue}>{this.state.buttonName}</button>
                </div> 
                {/* Modal */}
                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Congratulations</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            Always believe in yourself even when it’s not easy
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Lessons</button>
                            <button type="button" className="btn btn-success">Quiz</button>
                        </div>
                        </div>
                    </div>
                </div>
                {/* End Modal */}
                </div>
            </>
        )
    }
}

