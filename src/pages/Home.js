import React from 'react'
import '../styles/Home.css'
import ProfilePic from '../assets/images/profile-pic.jpg'
import TwitterIcon from '../assets/images/X-Logo-Black.png'
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
                    <h1>Patryk Owczarz</h1>
                    <div className="socials">
                        <a href="https://twitter.com/Demkolai"><img src={TwitterIcon} alt="Twitter Icon" width="50" height="50" /></a>
                        <a href="https://github.com/PatrykOwczarz"><img src={GithubIcon} alt="Github Icon" width="50" height="50" /></a>
                        <a href="https://www.linkedin.com/in/patryk-owczarz/"><img src={LinkedInIcon} alt="LinkedIn Icon" width="50" height="50" /></a>
                    </div>
                </div>
            </div>

            <h1>Hi! &#128075; I'm Patryk Owczarz</h1>
            <h2>
                Gameplay/UI Programmer based in London. <br /> <br />
                &#127881; <a href="https://www.intogames50.uk/ig50-2025"> <u> IG50 2025</u></a> Programming Winner &#127881; <br /> <br />
                Actively searching for Junior roles.
            </h2>
            <div className='infoBlocks'>
                <div className='infoBox'>
                    <h1>Game Programmer</h1>
                    <p>
                        Computer Science with Games Technology Graduate, with close to a decade
                        of Game development experience with various engines. Includes Unity, a Cherno
                        project derived C++ engine using OpenGL and most recently Unreal Engine 5.
                    </p>
                    <p>
                        I use Git as version control
                        for all my projects. I have experience working in a
                        multidisciplinary teams in agile environments. Currently volunteering for
                        Concrete Realm Games working as an Unreal Engine Programmer on a project called
                        <a href="https://store.steampowered.com/app/2870130/ENDS/"> <u> ENDS</u></a>
                    </p>
                </div>
                <div className='infoBox'>
                    <h1>Gamer</h1>
                    <p>
                        I have played games since I was 5 years old.
                        My first game ever played was Neverwinter Nights which sparked my love
                        for RPGs and later D&D.
                    </p>
                    <p>
                        During university, I played CS:GO at an amateur pro level,
                        which taught me effective communication and teamwork. Currently, I am an
                        officer in a top 400 world ranking guild in World of Warcraft. I manage a team
                        of players and ensure that they perfrom at their peak level by providing
                        advice and resources relating to their class or the raid mechanics.
                    </p>
                </div>
                <div className='infoBox'>
                    <h1>Music Enthusiast</h1>
                    <p>
                        My favourite music genres are Metal, Rock and EDM. I love going to concerts and
                        festivals. Last year I have seen Sleep Token in Budapest and
                        went to Download Festival. I manged to be front row for Limp Bizkit and
                        Avenged Sevenfold, both of which are unforgettable experiences.
                        I know how to play the drums and my hidden party trick is
                        playing guitar hero on expert difficulty.
                    </p>
                    <p>
                        My favourite artists are Alter Bridge,
                        Polyphia, Fred Again.. and most recently Sleep Token.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Home;