import React, { Component } from 'react'
import Quiz from '../components/Quiz';
import Loading from '../components/Loading'

export default class AboutUsPage extends Component {
  state = {
    quizzes: [],
    loading: true,
  }

  componentDidMount() {
    
    fetch("/api/quizzes")      
      .then(res =>res.json())
      .then(quizzs => {
        console.log(quizzs)
        this.setState({
          loading: false,
          quizzes: quizzs.map((p,ii) => <Quiz {...p} key={ii} />),
        });        
      })
      .catch(err => console.log("API ERROR: ", err));
  }

  render() {
    if(this.state.loading) {
      return <Loading />;
    }

    return (
      <div className="container-fluid" style={{width:"90%"}}>
        <div className="row">
          { this.state.quizzes}
        </div>
      </div>
    );
  }
}