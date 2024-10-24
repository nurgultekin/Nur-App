// BackgroundAnimation.js
import { useEffect } from 'react';
import './../styling/home.css';

const AnimationDark = () => {
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
            <div className="auroral-northern-dark"></div>
            <div className="auroral-stars"></div>
        </div>
    );
};

export default AnimationDark;