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
              <Carousel.Caption class="toprighttext1">
                <h3 class="carousel-text-heading1 font-weight-bold">Simply Financial</h3>
                <p>An exciting, all in one, website for children to discover 
                simple and basic financial topics 
                that will help them into adulthood!
                </p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img className="carousel-image d- block" src={slide2} alt="Third slide" />
              <Carousel.Caption>
                <h3>Range of Topics</h3>
                <p>From budgeting to learning about credit, we offer a fun and educational environment for curious minds.
                </p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img className="carousel-image d- block" src={slide3} alt="Third slide" />
            <Carousel.Caption class="toprighttext2">
              <h3 class="carousel-text-heading3 font-weight-bold">Never too Early to Start</h3>
              <p>We believe that it's never too early, or too late, to begin teaching kids about finance. The beginning of financial literacy 
                is just a single click ahead.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
    </div>

    <div class="container content">
      <div class="row section1">
        <div class="col-md-7">
          <h1>Discover...</h1>
          <p>Simply Financial is a place where children of all ages can come and discover the world of Finance! Select lessons on the
            topics that peak the most interest and begin reading all about them through the click of your mouse.  
          </p>
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