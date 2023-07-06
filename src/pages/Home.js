import React from 'react'
import '../styles/Home.css'
import ProfilePic from '../assets/images/profile-pic.jpg'
import TwitterIcon from '../assets/images/Twitter.png'
import GithubIcon from '../assets/images/Github.png'
import LinkedInIcon from '../assets/images/LinkedIn.png'

function Home() {
    return (
        <div className='aboutMe'>
            <div className='details'>
                <div className='myPicture'>
                    <img src={ProfilePic} alt="Profile Picture" width="200" height="200"/>
                </div>
                <div className='textDetails'>
                    <h1>Patryk Owcarz</h1>
                    <h2>Game programmer</h2>
                    <div className="socials">
                        <a href="https://twitter.com/Demkolai"><img src={TwitterIcon} alt="Twitter Icon" width="65" height="50"/></a>
                        <a href="https://github.com/PatrykOwczarz"><img src={GithubIcon} alt="Github Icon" width="50" height="50"/></a>
                        <a href="https://www.linkedin.com/in/patryk-owczarz-2071a2196/"><img src={LinkedInIcon} alt="LinkedIn Icon" width="50" height="50"/></a>
                    </div>
                </div>
            </div>
            <h2>About</h2>
            <div className='infoBlocks'>
                <div className='infoBox'>
                    <h1>Games programmer</h1>
                    <p>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. 
                        Velit egestas dui id ornare arcu odio ut sem nulla.
                    </p>
                </div>
                <div className='infoBox'>
                    <h1>Gamer</h1>
                    <p>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. 21 17
                        Velit egestas dui id ornare arcu odio ut sem nulla.
                    </p>
                </div>
                <div className='infoBox'>
                    <h1>Music Enthusiast</h1>
                    <p>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt
                        ut labore et dolore magna aliqua. 
                        Velit egestas dui id ornare arcu odio ut sem nulla.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Home;