import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

import slide1 from '../Images/Home-Slide1.jpg';
import slide2 from '../Images/Home-Slide2.jpg';
import slide3 from '../Images/Home-Slide3.jpeg';
import sectImg1 from '../Images/Section1-Img.jpg';
import sectImg2 from '../Images/Section2-Img.PNG';
import sectImg3 from '../Images/Section3-Img.PNG';

class HomePage extends React.Component {

  render(){
  return (
  <div class="homepage-main">
    <div class="carousel-container">
        <Carousel>
          <Carousel.Item className="carousel-item">
            <img className="carousel-image d-block" src={slide1} alt="First slide" />
              <Carousel.Caption topright class="toprighttext">
                  <h3 class="carousel-text-heading1 font-weight-bold">Simply Financial</h3>
                  <p>An exciting, all in one, website for children to discover 
                  new and exciting financial topics 
                  that will help them into adulthood!
                  </p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img className="carousel-image d- block" src={slide2} alt="Third slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img className="carousel-image d- block" src={slide3} alt="Third slide" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>

    <div class="container content">
      <div class="row section1">
        <div class="col-md-7">
          <h1>Discover...</h1>
          <p>[Insert Text Here]</p>
        </div>
        <div class="col-md-5">
          <img class="section1-img img-fluid" src={sectImg1} alt="basic img"/>
        </div>
      </div>

      <div class="row section2">
        <div class="col-md-7 order-md-2">
          <h1>Grow...</h1>
          <p>[Insert Text Here]</p>
        </div>
        <div class="col-md-5 order-md-1">
          <img class="section2-img img-fluid" src={sectImg2} alt="basic img"/>
        </div>
      </div>

      <div class="row section3">
        <div class="col-md-7">
          <h1>And Have Fun!</h1>
          <p>[Insert Text Here]</p>
        </div>
        <div class="col-md-5">
          <img class="section3-img img-fluid" src={sectImg3} alt="basic img"/>
        </div>
      </div>

      </div>

  </div>
  );
  }
}

export default HomePage;