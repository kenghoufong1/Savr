import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import '../Home.css';
function Home() {
  const welcomeMsgRef = useRef(null);
  const dealInfoRef = useRef(null);

  useEffect(() => {
    const timeline = anime.timeline({
      easing: 'easeOutExpo',
    });

    timeline.add({
      targets: welcomeMsgRef.current,
      opacity: [0, 1],
      translateY: [-100, 0],
      duration: 1500,
    }, '+=300');

    timeline.add({
      targets: dealInfoRef.current,
      opacity: [0, 1],
      translateY: [100, 0],
      duration: 1500,
    }, '-=1000');
  }, []);

  return (
    <div className="home-container">
      <div className='hero'>
        <h1 id='welcomemsg' ref={welcomeMsgRef}>Welcome to Savr</h1>
      </div>
      <div className='deal-info' ref={dealInfoRef}>
        <div>
          <img src='assets/savr2.jpg' alt='' />
        </div>
        <div className='info-details'>   
          <p>Start saving with our website. View and post deals around Seattle.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
