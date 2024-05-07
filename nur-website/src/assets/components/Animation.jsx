// BackgroundAnimation.js
import React, { useEffect } from 'react';
import '/src/assets/styling/home.css';

const Animation = () => {
    useEffect(() => {
        const auroralStarsContainer = document.querySelector('.auroral-stars');

        function createStar() {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = `${Math.random() * 100}vw`;
            star.style.top = `${Math.random() * 100}vh`;
            star.style.animationDuration = `${Math.random() * 2 + 1}s`; // Adjust duration range
            auroralStarsContainer.appendChild(star); // Append stars to auroralStarsContainer
        }

        // Specify the number of stars
        const numberOfStars = 1500;

        // Create stars
        for (let i = 0; i < numberOfStars; i++) {
            createStar();
        }
    }, []);

    return (
        <div>
            <div className="auroral-northern"></div>
            <div className="auroral-stars"></div>
        </div>
    );
};

export default Animation;