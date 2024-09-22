import React from 'react'
import '../styles/ProjectDetails.css'
import Button from '@material-ui/core/Button';
import Title from '../assets/images/bekka-the-bokka-title.png'
import Picture1 from '../assets/images/tank-game.png'
import Picture2 from '../assets/images/tank-game-2.png'
import Picture3 from '../assets/images/tank-game-healthbar.png'
import Picture4 from '../assets/images/tank-game-defeat.png'
import Picture5 from '../assets/images/tank-game-menu.png'
import GithubIcon from '../assets/images/Github.png'

function BekkaTheBokka() {

    return (

        <div className='main'>
            <h1 className='title'><img src={Title} alt="Title" width="480" height="200" /></h1>

            <hr></hr>
            {/* Intro Section */}
            <div className='section'>
                <div className='text'>
                    <h1>Introduction</h1>
                    <h2>Summary:</h2>
                    <p>
                        C# project in Unity. Created for the GMTK Game Jam 2024. The theme was "Built to scale".
                        The game fit the theme by building a path for you to scale up it in a platformer style game.
                        Created by a team of 9 people. My role on the team was Programmer.
                        <br></br>
                        <br></br>
                        This project placed 693 out of 7614 entries in the Game Jam!
                    </p>
                    <div className='lists'>
                        <div>
                            <h3>Core functionality:</h3>
                            <ul>
                                <li>
                                    Building path from an inventory of available blocks
                                </li>
                                <li>
                                    2D platformer movement and climbing systems
                                </li>
                                <li>
                                    Layered music per level and cutscene systems
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3>Technologies used:</h3>
                            <ul>
                                <li>
                                    C#
                                </li>
                                <li>
                                    Unity
                                </li>
                                <li>
                                    Git/Github
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h2>My Contribution:</h2>
                    <p>
                        As part of the 9 person team. I was the main programmer alongside the tech lead on the team.
                        I worked on creating the Inventory system for the available building blocks including the system for placing them
                        into the world and the Sound system used in the game.
                        Through the use of the DOTween plugin I was able to fade in and out tracks between levels.
                        Other tasks included various bug fixes and asset implementation as well as some placeholder UI implementation.
                    </p>
                </div>
                <div className='media'>

                    <iframe width="480" height="270"
                        src="https://www.youtube.com/embed/z0CI9ZrzUSk?si=zddiCToadZ53WOI_"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="autoplay; encrypted-media;"
                        allowFullScreen>
                    </iframe>

                    <div className='button'>
                        <Button
                            variant="contained"
                            color="default"
                            href="https://scoodi.itch.io/bekka-the-bokka"
                        >
                            Play the Game

                        </Button>

                    </div>
                </div>
            </div>

            <hr></hr>
            {/* Purpose Section */}
            <div className='section'>
                <div className='text'>
                    <h1>Purpose and Goal</h1>
                    <h2>Importance of Project:</h2>
                    <p>
                        WIP
                    </p>


                    <h2>Initial Vision:</h2>
                    <p>
                        WIP
                    </p>

                    <h2>Initial Design:</h2>
                    <p>
                        WIP
                    </p>

                    <h2>Preliminary Planning:</h2>
                    <p>
                        WIP
                    </p>
                </div>
                <div className='media'>
                    <img src={Title} alt="Profile" width="480" height="270" />


                </div>
            </div>

            <hr></hr>
            {/* Noteable Achievements and Learnings Section */}
            <div className='section'>
                <div className='text'>
                    <h1>Notable Achievements and Learnings</h1>
                    <h2>WIP</h2>
                    <ul>
                        <li>
                            WIP
                        </li>
                        <li>
                            WIP
                        </li>
                        <li>
                            WIP
                        </li>

                    </ul>

                    <h2>WIP</h2>
                    <ul>
                        <li>
                            WIP
                        </li>
                        <li>
                            WIP
                        </li>
                        <li>
                            WIP
                        </li>
                        <li>
                            WIP
                        </li>
                    </ul>


                </div>

                <div className='media'>
                    <img src={Title} alt="Profile" width="480" height="270" />
                    <img src={Title} alt="Profile" width="480" height="270" />

                </div>
            </div>

            <hr></hr>
            {/* Reflection on Project Outcome Section*/}
            <div className='section'>
                <div className='text'>
                    <h1>Reflection on Project Outcome</h1>
                    <h2>Areas of Improvement:</h2>

                    <ul>
                        <li>
                            WIP
                        </li>
                        <li>
                            WIP
                        </li>
                        <li>
                            WIP
                        </li>
                        <li>
                            WIP
                        </li>
                    </ul>

                    <h2>Evaluation of tools used:</h2>
                    <p>
                        WIP
                    </p>

                    <h2>What I would have done differently:</h2>
                    <p>
                        WIP
                    </p>

                    <h2>Final takeaways moving forward:</h2>
                    <p>
                        WIP
                    </p>
                </div>
                <div className='media'>
                    <img src={Title} alt="Profile" width="480" height="270" />
                    <img src={Title} alt="Profile" width="480" height="270" />

                </div>
            </div>
            <br></br>
        </div>

    );

};

export default BekkaTheBokka;