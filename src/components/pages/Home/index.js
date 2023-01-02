import React from 'react';


import styles from './style.css'
import background from '../../../images/20220808_151715-mincut.jpg'

export default function Home() {
  return ( 
    <div style={{ backgroundImage:`url(${background})` ,backgroundRepeat:"no-repeat",
                  backgroundSize:"cover",   height: "50vh", width: "100vw"}}>
      <h2 className='blurb'>A showcase of Full Stack development</h2>
    </div>
  );
}
