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
                    <img src={ProfilePic} alt="Profile" width="200" height="200" />
                </div>
                <div className='textDetails'>
                    <h1>Patryk Owcarz</h1>
                    <h2>Game programmer</h2>
                    <div className="socials">
                        <a href="https://twitter.com/Demkolai"><img src={TwitterIcon} alt="Twitter Icon" width="65" height="50" /></a>
                        <a href="https://github.com/PatrykOwczarz"><img src={GithubIcon} alt="Github Icon" width="50" height="50" /></a>
                        <a href="https://www.linkedin.com/in/patryk-owczarz-2071a2196/"><img src={LinkedInIcon} alt="LinkedIn Icon" width="50" height="50" /></a>
                    </div>
                </div>
            </div>

            <h1>Hi! &#128075; I'm Patryk Owczarz</h1>
            <h2>
                Graduate Game Programmer based in London. <br /> <br />
                Actively searching for Junior roles.
            </h2>
            <div className='infoBlocks'>
                <div className='infoBox'>
                    <h1>Games programmer</h1>
                    <p>
                        Computer Science with Games Technology Graduate with close to a decade
                        of Game development experience with various engines. Including Unity, a Cherno
                        project derived C++ engine using OpenGL and most recently Unreal. I use Git as version control
                        for all my projects. I have experience working in a
                        multidisciplinary team of artists, game designers and UX designers.
                    </p>
                </div>
                <div className='infoBox'>
                    <h1>Gamer</h1>
                    <p>
                        I have played games since I was 5 years old.
                        My first game ever played was Neverwinter Nights which sparked my love
                        for RPGs and later D&D. During University I played CS:GO at an amateur pro level,
                        which taught me effective communication and teamwork. To this day I raid in a
                        Mythic top 1000 world ranking guild in World of Warcraft.
                    </p>
                </div>
                <div className='infoBox'>
                    <h1>Music Enthusiast</h1>
                    <p>
                        My favourite music genres are metal, rock and EDM. However, I can find enjoyment
                        in most music genres. I know how to play the drums and my hidden party trick is
                        playing guitar hero on expert difficulty. My favourite artists are Alter Bridge,
                        Polyphia and most recently Fred again..
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Home;