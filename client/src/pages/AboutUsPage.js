import React, { Component} from 'react'
import icon from '../hand.svg'


export default class AboutUsPage extends Component {
  state = {
    text1: "",
    text2: "",
    text3: "",
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/98/Blank_button.svg/1200px-Blank_button.svg.png",
  };

  componentDidMount() {
    this.text1 = setTimeout(() => {
      this.setState({ text1: 'Hello' });
      this.setState({ image: icon });
    }, 2000);

    this.text2 = setTimeout(() => {
      this.setState({ text2: 'WE ARE',
                      text3: "SIMPLY FINANCIAL"});
    }, 3500);
  }

  componentWillUnmount() {
    clearTimeout(this.text1);
    clearTimeout(this.text2);
    
  }

  render() {
    const videoStyle={
      position: "absolute",
      top: "1px",
      left: "0",
      width: "100vw",
      height: "100vh",
    }

    const jumboStyle= {
      paddingTop: "30px",
      paddingBottom: "30px",
      marginBottom: "30px",
      marginLeft: "0px",
      marginRight: "0px",
      color: "inherit",
      backgroundColor: "#e3f2fd",
      height: "94.5vh",
      overflow: "hidden",
      position: "relative",
    }

    const contaStyle ={
      position: "relative",
      color: "white",
      marginTop: "90px",
      fontFamily: "'Dancing Script', cursive",
    }

    const contaStyle2={
      position: "relative",
      color: "white",      
      marginTop: "-25px",
      fontSize: "2.725em",
      letterSpacing: "0.10em",
      fontFamily: "Helvetica"
    }

    return (
      <div className="container-fluid px-0">
        <div className="jumbotron px-0 py-0" style={jumboStyle}>          
            <video className="px-0 py-0 mx-0" style={videoStyle} autoPlay loop>
              <source src="https://player.vimeo.com/external/455410352.sd.mp4?s=62558c5e381086430d76e16c44d419a3b7da67f0&profile_id=139&oauth2_token_id=57447761" type="video/mp4"/>
            </video>
            <div className="container text-right" style={contaStyle}>
              <h1 style={{fontSize:"60px"}}>{this.state.text1} <img src={this.state.image} height="30px" width="30px" style={{border: "0px solid black"}} alt=""/></h1>                           
            </div>                        
            <div className="container text-right" style={contaStyle2}>
              <h4 style={{display: "inline", marginRight:"5px"}}> {this.state.text2}</h4>
              <h4 style={{display: "inline"}}><u style={{textDecorationColor:"#37B6F6"}}>{this.state.text3}</u></h4>
            </div>          
        </div>
        <div>
          <h1 className="text-center mt-5">This is a title</h1>
          <hr style={{border: "0.5px solid red", width: "20%"}}></hr>
          <p className="text-center" style={{marginLeft: "25%", marginRight: "25%" }}>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>

          <h1 className="text-center mt-5">This is a title</h1>
          <hr style={{border: "0.5px solid red", width: "20%"}}></hr>
          <p className="text-center" style={{marginLeft: "25%", marginRight: "25%" }}>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
        </div>
        
        <div class="containe text-center" style={{backgroundColor: "#e3f2fd"}}>
          <div style={{marginTop: "100px", backgroundColor: "#e3f2fd"}}>
          <h2 className="text-center">Co-Founders</h2>
        </div>
        <div class="row m-auto">
          <div class="col-md mt-5">
            <img src="https://randomuser.me/api/portraits/men/75.jpg" style={{borderRadius:"50%"}}alt="Avatar"/>
            <p className="text-center" style={{marginLeft: "25%", marginRight: "25%", marginTop:"15px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut turpis metus. Integer et metus eu sapien varius vulputate non posuere mi. Duis a enim urna. Nulla vitae egestas nisl. Pellentesque vel tellus quis eros tempor molestie ac et diam</p>
          </div>
          <div class="col-md mt-5">
            <img src="https://randomuser.me/api/portraits/men/75.jpg" style={{borderRadius:"50%"}}alt="Avatar"/>
            <p className="text-center" style={{marginLeft: "25%", marginRight: "25%", marginTop:"15px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut turpis metus. Integer et metus eu sapien varius vulputate non posuere mi. Duis a enim urna. Nulla vitae egestas nisl. Pellentesque vel tellus quis eros tempor molestie ac et diam</p>
          </div>
          <div class="col-md mt-5">
            <img src="https://randomuser.me/api/portraits/men/75.jpg" style={{borderRadius:"50%"}}alt="Avatar"/>
            <p className="text-center" style={{marginLeft: "25%", marginRight: "25%", marginTop:"15px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut turpis metus. Integer et metus eu sapien varius vulputate non posuere mi. Duis a enim urna. Nulla vitae egestas nisl. Pellentesque vel tellus quis eros tempor molestie ac et diam</p>
          </div>
        </div>
      </div>
      </div>
    )
  }
}