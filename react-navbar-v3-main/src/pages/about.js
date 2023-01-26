import React from 'react';

const About = () => {

  const styles = {
    main: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '10vh'
    }
  }
  return (
    <div className='main' style={styles.main}  >
      <h1>About</h1>
    </div>
  );
};

export default About;
