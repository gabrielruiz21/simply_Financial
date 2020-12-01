import React, { Component } from 'react'
import { Link } from 'react-router-dom';

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
        scale: (100 / this.props.quizSections.length),
        percentage : (100 / this.props.quizSections.length),
        finalScore: null,
        maxScore:100,
        onChange: "",
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

    increaseProgressBar = () =>{
        this.setState(state => {
            if(state.endQuiz)
                return {scale:state.scale}
            else
                return {scale: (state.scale + state.percentage)}
        })
    }


    decreaseProgressBar = () =>{
        this.setState(state => {
            return {scale: (state.scale - state.percentage)}
        })
    }

    calculateScore = () =>{
        this.setState(state => {
            console.log(state.endQuiz)
            if(state.endQuiz) 
                this.calculateFinalScore()
        })
        
    }
    calculateFinalScore(){
        console.log("inside calculate score")
    let score = 0;
    this.state.userAnswers.forEach((element, index) => {
        if(element === this.state.answers[index]){
            score += this.state.maxScore / this.state.questionsArray.length;
        }
    });
        score = Math.ceil(score);
        this.setState({
            finalScore: score
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
        return (            
            <div className="card py-md-4 px-4" style={inlineCard}>
                <div className="row no-gutters">
                <div className="col-md-5 mt-4">
                    <img src={this.props.image} style={inlineImage} className="card-img mb-2" alt="at the left side"/>
                </div>
                <div className="col-md-5 m-auto">
                <h5 className="card-title text-center ml-auto mr-auto">{this.props.topic}</h5>                               
                <div className="text-left">{this.state.questionsArray[this.state.index]}</div>
                <form className="">{splitChoices}</form>
                </div>
                </div>
                <div className="card-footer text-muted text-center">
                    <button className="btn btn-success float-right" onClick={() =>{this.nextContent();this.increaseProgressBar();this.calculateScore()}} data-toggle={this.state.dataValue} data-target={this.state.targetValue}>{this.state.buttonName}</button>
                    <button className="btn btn-success ml-5" onClick={() =>{this.prevContent();this.decreaseProgressBar()}} disabled={!this.state.index}>Back</button>
                </div> 
                {/* Modal */}
                <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-center" id="exampleModalLongTitle">{this.state.finalScore > 50 ? "Congratulations" : "You should practice more"}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body text-center">
                            <h5>You Scored:</h5> <h3>{this.state.finalScore}</h3> <h6>out of 100</h6>
                            
                        </div>
                        <div className="modal-footer">
                            <p className="mr-5">Whould you like to <a href={"http://localhost:3000/quizzes/"+this.props.id}target="_self">try again</a>?</p>
                            <button type="button" className="btn btn-info" data-dismiss="modal">Quizzes</button>
                            <button type="button" className="btn btn-success">Lesson</button>
                        </div>
                        </div>
                    </div>
                </div>
                {/* End Modal */}
                {/* Progress Bar*/}
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width:`${this.state.scale}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        )
    }
}

