import React from 'react';
import '../styles/Section.css';

import pic1 from '../images/01-horiseon.jpg'

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
      <h2>Lorem Ipsum Dolor Sit Amet</h2>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        mollit anim id est laborum.
      </p>
      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident,
      </p>

      <article class="flexbox-item flexbox-item2" id="article-project-work">
          <h3>Project Work</h3>
          <div class="projects">

            <section class="section-project-card">
              <header>Team Profile HTML Generator</header>
              <p>Javascript OOP client 0CLI that creates HTML page from prompted questions [10 October 2022]</p>
              {/* <!-- CLI has no live site --><img src="./assets/images/10-team-profile-generator.png" alt="Tenth Mini-challenge" /></a> */}
              
              <a href="https://github.com/SeanU2022/Sean-Wallace-Team-Profile-HTML-Generator" rel="noopener" target="_blank">Repository</a>
            </section>

            <section class="section-project-card">
              <header>GitHub README.md Generator</header>
              <p>CLI that creates README.md from prompted questions [29 September 2022]</p>
              {/* <a><img src="../images/09-readme-generator.png" alt="Ninth Mini-challenge" /></a> */}
              
              <a href="https://github.com/SeanU2022/Sean-Wallace-README-generator" rel="noopener" target="_blank">Repository</a>
            </section>

            <section class="section-project-card">
              <header>Weather Dashboard</header>
              <p>International API Fetching Live Weather information [22nd September 2022]</p>
              <a href="https://seanu2022.github.io/Sean-Wallace-Weather-Dashboard/" rel="noopener" target="_blank"><img src="../images/06-weather-dashboard.png" alt="Sixth Mini-challenge" /></a>
              
              <a href="https://github.com/SeanU2022/Sean-Wallace-Weather-Dashboard" rel="noopener" target="_blank">Repository</a>
            </section>
                       
            <section class="section-project-card">
              <header>Project 1: realocator</header>
              <p>Search for Australian properties for sale. Also display weather for those in your shortlist. [1st-15th September 2022]</p>
              <a href="https://seanu2022.github.io/realocater/" rel="noopener" target="_blank"><img src="../images/07and08-project1-realocator.png" alt="First Project" /></a>
              
              <a href="https://github.com/SeanU2022/realocater" rel="noopener" target="_blank">Repository</a>
            </section>

            <section class="section-project-card">
              <header>Work Day Scheduler</header>
              <p>Module5: 3rd Party (browser) API's [1st September 2022]</p>
              <a href="https://seanu2022.github.io/Sean-Wallace-Work-Day-Scheduler/" rel="noopener" target="_blank"><img src="../images/05-work-day-scheduler.png" alt="Fifth Mini-challenge" /></a>
              
              <a href="https://github.com/SeanU2022/Sean-Wallace-Work-Day-Scheduler" rel="noopener" target="_blank">Repository</a>
            </section>

            <section class="section-project-card">
              <header>Code Quiz</header>
              <p>Module4: Code Quiz [25th August 2022]</p>
              <a href="https://seanu2022.github.io/Sean-Wallace-Code-Quiz/" rel="noopener" target="_blank"><img src="../images/04-code-quiz.png" alt="Fourth Mini-challenge" /></a>
              
              <a href="https://github.com/SeanU2022/Sean-Wallace-Code-Quiz" rel="noopener" target="_blank">Repository</a>
            </section>

            <section class="section-project-card">
              <header>Password Generator</header>
              <p>Module3: Password Generator [18th August 2022]</p>
              <a href="https://seanu2022.github.io/Sean-Wallace-Password-Generator/" rel="noopener" target="_blank"><img src="../images/03-password-generator.png" alt="Third Mini-challenge" /></a>
              
              <a href="https://github.com/SeanU2022/Sean-Wallace-Password-Generator" rel="noopener" target="_blank">Repository</a>
            </section>

            <section class="section-project-card">
              <header>Portfolio</header>
              <p>Module2: Professional Portfoli [11th August 2022]</p>
              <a href="https://seanu2022.github.io/portfolio/" rel="noopener" target="_blank"><img src="../images/02-portfolio.png" alt="Second Mini-challenge"/></a>
              
              <a href="https://github.com/SeanU2022/portfolio" rel="noopener" target="_blank">Repository</a>
            </section>

            <section class="section-project-card" id="first-project">
              <header>Horiseon Online Marketing</header>
              <p>Module1: Code Refactor [4th August 2022]</p>
              <a href="https://seanu2022.github.io/horiseon/" rel="noopener" target="_blank"><img src={pic1} alt="First Mini-challenge" /></a>
              
              <a href="https://github.com/SeanU2022/horiseon" rel="noopener" target="_blank">Repository</a>
            </section>

          </div>
      </article>
      
    </section>
  );
}

export default Section;
