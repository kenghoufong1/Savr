import React from 'react';
import { useEffect , useRef } from 'react';
import anime from 'animejs';
import '../Home.css';


function Home() {
    const startShoppingBtnRef = useRef(null);
  
    useEffect(() => {
      const startShoppingBtn = startShoppingBtnRef.current;
      const anim = anime({
        targets: startShoppingBtn,
        scale: [1, 1.8],
        duration: 800,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutQuad'
      });
  
      return () => {
        anim.pause();
      }
    }, []);
  
    
    return (
      <div className="home-container">
            <div className='hero'>
            <h1 id='welcomemsg'>Welcome to Savr</h1>
        <a href="/shareddeal">
          <button id='mainbutton' ref={startShoppingBtnRef}>Start Shopping</button>
        </a>
          </div>
            <div className='deal-info'>
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

export default Home