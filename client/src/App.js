import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
  
  NavLink
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostsListPage from './pages/PostsListPage';
import PostFormPage from './pages/PostFormPage';
import ShowPostPage from './pages/ShowPostPage';
import AboutUsPage from './pages/AboutUsPage';
import ShowQuizPage from './pages/ShowQuizPage';
import LearningCenPage from './pages/LearningCenPage';
import logo from '../src/logo.png';
import './App.css';
import '../src/cards.scss'
import QuizPage from './pages/QuizPage';
import VideoPage from './pages/VideoPage';


function Navigation(props) {
  return (
    <>
      <nav className="navbar navbar-expand navbar-light" style={{backgroundColor: "#e3f2fd", paddingBottom: "0px"}}>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/home">
              <u>Home</u>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/Learning-Center" >
              <u>Learning center</u>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " exact to="/about-us">
              <u>About Us</u>
            </NavLink>
          </li>
        </ul>
        <a className="navbar-brand" href="https://simply-financial.herokuapp.com/home" style={{marginRight:"45vw", padding:"0px"}} >
          <img src={logo} alt="Logo of the company" width="90px" style={{marginTop:"-10px", marginBottom:"5px"}}/>
        </a>     
      </nav>    
    </>
  );
}


class App extends React.Component {
  render() {
    return (
        <Router>
          <Navigation />
          <div>
            <div className="row m-auto">
              <Switch>
                <Route path="/home" component={HomePage} />
                <Route path="/Lessons" component={PostsListPage} />
                <Route path="/Lesson/:id" component={ShowPostPage} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/quizzes" component={QuizPage} />
                <Route path="/quizz/:id" component={ShowQuizPage}/>
                <Route path="/create" component={PostFormPage} />
                <Route path="/Learning-Center" component={LearningCenPage} />
                <Route path="/Videos" component={VideoPage} />
                <Route path="/" component={HomePage} />
              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}


export default App;
