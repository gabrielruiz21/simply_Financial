import React, { Component } from 'react'
import Loading from '../components/Loading';
import { Redirect } from 'react-router-dom';
import QuizFullPage from '../components/QuizFullPage';

export default class ShowQuizPage extends Component {
    state = {
        loading: true,
        post: null,
        notFound: false,
    }    
    componentDidMount() {
        const { id } = this.props.match.params;
        fetch("/api/quizzes/"+id)
        .then(res => res.json())
        .then(post => {
            this.setState({
            post: <QuizFullPage {...post} />,
            loading: false,
            });
        })
        .catch(err => {
            this.setState({
            notFound: true,
            });
        });
    }
    render() {
        if(this.state.notFound) return <Redirect to="/" />;
        if(this.state.loading) return <Loading />;
        return this.state.post;
    }
}
