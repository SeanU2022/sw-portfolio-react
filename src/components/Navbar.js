import React from 'react';
import '../styles/Navbar.css';

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  navbarStyle: {
    // background: 'green',
    justifyContent: 'flex-end',
    // display: 'flex',
    // fontFamily: 'helvetica',
    // flexDirection: 'row',
    // alignItems: 'flex-start',
    // justifyContent: 'flex-end',
  },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

// function Navbar() {
//   return (
//     <nav style={styles.navbarStyle} className="navbar">
//       <a href="/">Welcome</a>
//     </nav>
//   );
// }

// export default Navbar;

export default function Navbar() {
  const linkStyle = { border: '1px black', padding: '5px' };

  return (
    <nav style={styles.navbarStyle} className="navbar">
    {/* <nav className="navbar"> */}
      <section
        style={{
          display: 'flex',
          fontFamily: 'helvetica',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
        }}
      >
        <div style={linkStyle}>
          {/* <a href="#">Home</a> */}
          <p>Home</p>
        </div>
        <div style={linkStyle}>
          {/* <a href="#">Login</a> */}
          <p>Login</p>
        </div>
        <div style={linkStyle}>
          {/* <a href="#">Register</a> */}
          <p>Register</p>
        </div>
        <div style={linkStyle}>
          {/* <a href="#">About</a> */}
          <p>About</p>
        </div>
        <div style={linkStyle}>
          {/* <a href="#">Contact</a> */}
          <p>Contact</p>
        </div>
      </section>
    </nav>
  );
}