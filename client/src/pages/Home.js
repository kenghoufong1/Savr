import React from 'react';
import '../Home.css';

function Home() {
    return (
        <div className="home-container">
            <div className='hero'>
                <h1 id='welcomemsg'>Welcome to Savr</h1>
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