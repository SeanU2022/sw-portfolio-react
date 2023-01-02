import Carousel from 'react-bootstrap/Carousel';
// import { Link } from 'react-router-dom';  
import  Image1 from "../../images/20220808_111453-colours-sand.jpg";
import  Image2 from "../../images/20220808_110827-colours.jpg";
import React from 'react';

const horizontalMarginSize = "12rem"
const horizontalMarginSize2 = "8rem"

export default function About() {
  return (
    <Carousel fade>
      <Carousel.Item>
          {/* <img className="d-block w-100" src="holder.js/800x400?text=First slide&bg=373940" alt="First slide"/> */}
           <div style={{ backgroundImage:`url(${Image1})` ,backgroundRepeat:"no-repeat",
                backgroundSize:"cover",   height: "50vh", width: "100vw"}}>
            <div style={{ height: "30vh", width: "100vw"}} >

            <br></br>
            <br></br>
            <h4 style={{  color: "var(--white-bondi-cloud)", 
                          background: "var(--blue-tama-ocean-40)",
                          marginLeft: horizontalMarginSize,
                          marginRight: horizontalMarginSize
                       }}>
                Starting as Software Engineer I have had success in Transport, Finance, Health industries both private and government.
                <br></br>
                <br></br>
                Projects include Billing, Business Licensing, Hospital Data Warehousing, and Small Device pilots.
            </h4>
            <br></br>
            <br></br>            
            <p  style={{  color: "var(--blue-bondi-ocean)", 
                          background: "var(--white-bondi-cloud-60)",
                          marginLeft: horizontalMarginSize2,
                          marginRight: horizontalMarginSize2
                          }}>
                <strong>I have supervised various teams as Senior Developer, Business Analyst, Project Manager, and Applications Manager 
                which makes me a good team player to cooperate with others in harnessing technology for successful outcomes.
                <br></br>
                <br></br>
                This portfolio demonstrates I have the skills to utilise my technical talents for robust business solutions.
                </strong>
            </p>

            </div>
          </div>
        <Carousel.Caption>
          <h3 style={{  color: "var(--blue-bondi-ocean)", 
                          background: "var(--white-bondi-cloud-60)"
                          }}>
              Business Background</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
          <div style={{ backgroundImage:`url(${Image2})` ,backgroundRepeat:"no-repeat",
                backgroundSize:"cover",   height: "50vh", width: "100vw"}}>
            <h2 className='blurb'>A showcase of Full Stack development</h2>
          </div>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>

    </Carousel>
  );
}
