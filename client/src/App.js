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
import logo from '../src/logo.svg';
import './App.css';


function Navigation(props) {
  return (
    <div>
    <nav className="navbar navbar-expand-sm navbar-light shadow mb-3" style={{backgroundColor: "#F1E0B0"}}>
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/home">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/Lessons">
            Learning center
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" exact to="/about-us">
            About Us
          </NavLink>
        </li>
      </ul>
      <div className="" style={{marginRight:"50vw"}} >
    <img src={logo} className="" alt="Logo of the company" width="40px"/>
    </div>     
    </nav>
    
    </div>
  );
}


class App extends React.Component {
  render() {
    return (
        <Router>
          <Navigation />
          <div>
            <div className="row justify-content-center">
              <Switch>
                <Route path="/home" component={HomePage} />
                <Route path="/Lessons" component={PostsListPage} />
                <Route path="/Lesson/:id" component={ShowPostPage} />
                <Route path="/about-us" component={AboutUsPage} />
                <Route path="/quizzes/:id" component={ShowQuizPage}/>
                <Route path="/create" component={PostFormPage} />
                <Route path="/" component={HomePage} />
              </Switch>
            </div>
          </div>
        </Router>
    );
  }
}


export default App;
