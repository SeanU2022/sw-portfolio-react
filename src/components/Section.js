import React from 'react';
import '../styles/Section.css';

import pic1 from '../images/01-horiseon.jpg'
import pic2 from '../images/02-portfolio.png'
import pic3 from '../images/03-password-generator.png'
import pic4 from '../images/04-code-quiz.png'
import pic5 from '../images/05-work-day-scheduler.png'
import pic6 from '../images/06-weather-dashboard.png'
import pic7 from '../images/07and08-project1-realocator.png'
// import pic9 from '../images/09-readme-generator.png'
// import pic10 from '../images/10-team-profile-generator.png'

// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  sectionStyles: {
    background: 'orange',
  },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Section() {
  return (
    <section style={styles.sectionStyles} className="section">

      <article class="flexbox-item flexbox-item2" id="article-project-work">
          <h3>Project Work</h3>
          <div class="projects">

            <section class="section-project-card">
              <header>Team Profile HTML Generator</header>
              <p>Javascript OOP client 0CLI that creates HTML page from prompted questions [10 October 2022]</p>
              {/* <!-- CLI has no live site --><img src="./assets/images/10-team-profile-generator.png" alt="Tenth Mini-challenge" /></a> */}
              {/* <a href="https://seanu2022.github.io/Sean-Wallace-Team-Profile-HTML-Generator/" rel="noopener noreferrer" target="_blank"><img src={pic10} alt="Eighth Mini-challenge" /></a> */}
              
              <a href="https://github.com/SeanU2022/Sean-Wallace-Team-Profile-HTML-Generator" rel="noopener noreferrer" target="_blank">Repository</a>
            </section>

            <section class="section-project-card">
              <header>GitHub README.md Generator</header>
              <p>CLI that creates README.md from prompted questions [29 September 2022]</p>
              {/* <a><img src="../images/09-readme-generator.png" alt="Ninth Mini-challenge" /></a> */}
              {/* <a href="https://seanu2022.github.io/Sean-Wallace-README-generator/" rel="noopener noreferrer" target="_blank"><img src={pic9} alt="Seventh Mini-challenge" /></a> */}
              
              <a href="https://github.com/SeanU2022/Sean-Wallace-README-generator" rel="noopener noreferrer" target="_blank">Repository</a>
            </section>

            <section class="section-project-card">
              <header>Weather Dashboard</header>
              <p>International API Fetching Live Weather information [22nd September 2022]</p>
              <a href="https://seanu2022.github.io/Sean-Wallace-Weather-Dashboard/" rel="noopener noreferrer" target="_blank"><img src={pic6} alt="Sixth Mini-challenge" /></a>
              
              <a href="https://github.com/SeanU2022/Sean-Wallace-Weather-Dashboard" rel="noopener noreferrer" target="_blank">Repository</a>
            </section>
                       
            <section class="section-project-card">
              <header>Project 1: realocator</header>
              <p>Search for Australian properties for sale. Also display weather for those in your shortlist. [1st-15th September 2022]</p>
              <a href="https://seanu2022.github.io/realocater/" rel="noopener noreferrer" target="_blank"><img src={pic7} alt="First Project" /></a>
              
              <a href="https://github.com/SeanU2022/realocater" rel="noopener noreferrer" target="_blank">Repository</a>
            </section>

            <section class="section-project-card">
              <header>Work Day Scheduler</header>
              <p>Module5: 3rd Party (browser) API's [1st September 2022]</p>
              <a href="https://seanu2022.github.io/Sean-Wallace-Work-Day-Scheduler/" rel="noopener noreferrer" target="_blank"><img src={pic5} alt="Fifth Mini-challenge" /></a>
              
              <a href="https://github.com/SeanU2022/Sean-Wallace-Work-Day-Scheduler" rel="noopener noreferrer" target="_blank">Repository</a>
            </section>

            <section class="section-project-card">
              <header>Code Quiz</header>
              <p>Module4: Code Quiz [25th August 2022]</p>
              <a href="https://seanu2022.github.io/Sean-Wallace-Code-Quiz/" rel="noopener noreferrer" target="_blank"><img src={pic4} alt="Fourth Mini-challenge" /></a>
              
              <a href="https://github.com/SeanU2022/Sean-Wallace-Code-Quiz" rel="noopener noreferrer" target="_blank">Repository</a>
            </section>

            <section class="section-project-card">
              <header>Password Generator</header>
              <p>Module3: Password Generator [18th August 2022]</p>
              <a href="https://seanu2022.github.io/Sean-Wallace-Password-Generator/" rel="noopener noreferrer" target="_blank"><img src={pic3} alt="Third Mini-challenge" /></a>
              
              <a href="https://github.com/SeanU2022/Sean-Wallace-Password-Generator" rel="noopener noreferrer" target="_blank">Repository</a>
            </section>

            <section class="section-project-card">
              <header>Portfolio</header>
              <p>Module2: Professional Portfoli [11th August 2022]</p>
              <a href="https://seanu2022.github.io/portfolio/" rel="noopener noreferrer" target="_blank"><img src={pic2} alt="Second Mini-challenge"/></a>
              
              <a href="https://github.com/SeanU2022/portfolio" rel="noopener noreferrer" target="_blank">Repository</a>
            </section>

            <section class="section-project-card" id="first-project">
              <header>Horiseon Online Marketing</header>
              <p>Module1: Code Refactor [4th August 2022]</p>
              <a href="https://seanu2022.github.io/horiseon/" rel="noopener noreferrer" target="_blank"><img src={pic1} alt="First Mini-challenge" /></a>
              
              <a href="https://github.com/SeanU2022/horiseon" rel="noopener noreferrer" target="_blank">Repository</a>
            </section>

          </div>
      </article>
      
    </section>
  );
}

export default Section;
