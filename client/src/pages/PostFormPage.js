import React from 'react';
import { Redirect } from 'react-router-dom';

class PostFormPage extends React.Component {
  state = {
    error: false,
    success: false,
    name: '',
    description: '',
    image:'',
    content: '',

  }

  nameChanged = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  descriptionChanged = (event) =>{
    this.setState({
      description : event.target.value
    })
  }

  imageChanged = (event)=>{
    this.setState({
      image: event.target.value
    })
  }

  contentChanged = (event) =>{
    this.setState({
      content: event.target.value
    })
  }

  savePost = (event) => {
    fetch("/api/posts/", {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: this.state.name,
                            description: this.state.description,
                            image: this.state.image,
                            content: this.state.content
                          }),
    })
      .then(res => {
        if(res.ok) {
          return res.json()
        }

        throw new Error('Content validation');
      })
      .then(post => {
        this.setState({
          success: true,
        });
      })
      .catch(err => {
        this.setState({
          error: true,
        });
      });
  }

  render() {
    if(this.state.success) return <Redirect to="/" />;

    let errorMessage = null;
    if(this.state.error) {
      errorMessage = (
        <div className="alert alert-danger">
          "There was an error saving this post."
        </div>
      );
    }

    return (
      <div className="col-10 col-md-8 col-lg-7 mt-4">
        { errorMessage }
        <h1>CREATE YOUR OWN LESSON</h1>
        <br></br>
        <div className="input-group mb-3">
          <div className="input-group-prepend"> 
            <span className="input-group-text" id="basic-addon1">Title</span>
          </div>
          <input 
            type="text" 
            placeholder="Lets start with the title" 
            value={this.state.name}
            className="form-control mr-3 rounded"
            onChange={this.nameChanged}
          />
          </div>
          <div className="input-group mb-3">
          <div className="input-group-prepend"> 
            <span className="input-group-text" id="basic-addon2">Description</span>
          </div>
          <input 
            type="text" 
            placeholder="Description goes here.." 
            value={this.state.description}
            className="form-control mr-3 rounded"
            onChange={this.descriptionChanged}
          />
          </div>
          <div className="input-group mb-3">
          <div className="input-group-prepend"> 
            <span className="input-group-text" id="basic-addon3">URL</span>
          </div>
          <input 
            type="text" 
            placeholder="Just the url" 
            value={this.state.image}
            className="form-control mr-3 rounded"
            onChange={this.imageChanged}
          />
          
        </div>
        <div className="input-group mb-3">
          <div className="input-group-prepend"> 
            <span className="input-group-text" id="basic-addon4">Content</span>
          </div>
          <textarea 
            type="text" 
            placeholder="Finally, the content goes here" 
            value={this.state.content}
            className="form-control mr-3 rounded"
            rows="3"
            onChange={this.contentChanged}
          />
          
        </div>
        <button className="btn btn-primary" onClick={this.savePost}>Save Lesson</button>
      </div>
    );
  }
}

export default PostFormPage;