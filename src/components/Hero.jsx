import React from 'react';
import styles from './Hero.module.css';

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>A Landline For Your Mobile</h1>
        <p>Our Virtual Phone Numbers give you a Local (01/02), 0800, 0333 or 0300 number that can be sent to your existing landline or mobile phone. Tamar Telecom provide over 10 free features to help you manage when you're open, when you're on holiday and send calls to different telephone numbers at different times of the day.</p>
        <button className={styles.chooseButton}>Choose Your Number</button>
      </div>
      <div className={styles.heroImage}>
        {/* Add hero image here */}
      </div>
    </section>
  );
}

export default Hero;