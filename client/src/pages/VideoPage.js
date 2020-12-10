import React, { Component } from 'react'
import Video from '../components/video';
import Loading from '../components/Loading'

export default class VideoPage extends Component {
state = {
    videos: [],
    loading: true,
}
    componentDidMount() {
        fetch("/api/videos")      
        .then(res =>res.json())
        .then(videos => {
            this.setState({
                loading: false,
                videos: videos.map((p,ii) => <Video {...p} key={ii} />),
            });        
        })
        .catch(err => console.log("API ERROR: ", err));
    }

    render() {
        if(this.state.loading) {
            return <Loading />;
        }

        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    { this.state.videos}
                </div>
            </div>
        );
    }
}