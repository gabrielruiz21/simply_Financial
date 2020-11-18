import React from 'react';
import '../../src/App.css'
import Carousel from 'react-elastic-carousel'
import Item from "./item";

let text = "bbvbcxbvnbxcvbbvbvbjkdsdsbjskdbvjkdbvjkbsdjbvsdbvkjbsdlvbsdvs vfbdsnvbnbvbvhdvjhb sdlvgb sdkgbv sdjkvghsd sdghv sdvjkhsdh svgsjgvgvgdfvbncbvbfdvblfdvgbkjdfvblfb gv gkj sdkbsdb dsg dsbv dsbv jkds sldgv dsg "
function AboutUsPage(props) {

  return (
<Carousel itemsToShow={1}>
  <Item>{text}</Item>
  <Item>2</Item>
  <Item>3</Item>
  <Item>4</Item>
  <Item>5</Item>
  <Item>6</Item>
</Carousel>
   );
}

export default AboutUsPage;

