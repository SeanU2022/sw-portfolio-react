import React from 'react';
import '../styles/Footer.css';

// By importing the Header.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

// const styles = {
//   headerStyle: {
//     background: 'blue',
//   },
//   headingStyle: {
//     fontSize: '100px',
//   },
// };

// We use JSX curly braces to evaluate the style object

function Footer() {
  return (
    <footer className="footer">
      <h2>Sean Wallace</h2>
    </footer>
  );
}

// function Footer() {
//   return (
//     <footer style={styles.footerStyle} className="footer">
//       <h2 style={styles.footerStyle}>Sean Wallace</h2>
//     </footer>
//   );
// }

export default Footer;
