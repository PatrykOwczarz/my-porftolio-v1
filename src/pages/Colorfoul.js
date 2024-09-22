import React from 'react'
import '../styles/ProjectDetails.css'
import Button from '@material-ui/core/Button';
import Title from '../assets/images/colorfoul.png'
import Picture1 from '../assets/images/tank-game.png'
import Picture2 from '../assets/images/tank-game-2.png'
import Picture3 from '../assets/images/tank-game-healthbar.png'
import Picture4 from '../assets/images/tank-game-defeat.png'
import Picture5 from '../assets/images/tank-game-menu.png'

function Colorfoul() {

    return (

        <div className='main'>
            <h1 className='title'><img src={Title} alt="Profile" width="500" height="125" /></h1>

            <hr></hr>
            {/* Intro Section */}
            <div className='section'>
                <div className='text'>
                    <h1>Introduction</h1>
                    <h2>Summary:</h2>
                    <p>
                        C# project in Unity. Created for the Pirate Software Game Jam 14. The theme was "Shadow Alchemy".
                        Inspired by Vampire Survivors the player is an alchemist who combines materials to summon shadows.
                        Created by team of 4 people. My role was Programmer.
                    </p>
                    <div className='lists'>
                        <div>
                            <h3>Core functionality:</h3>
                            <ul>
                                <li>
                                    Combining System
                                </li>
                                <li>
                                    Enemy AI and Enemy Spawner
                                </li>
                                <li>
                                    Companion AI and Leveling
                                </li>
                                <li>
                                    2D isometric character controller
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
                        As part of the 4 person team I was the second programmer on the team.
                        We split the workload evenly and worked on various parts of the project.
                        I worked on creating the Enemy AI and Enemy Spawner logic primarily.
                        I also worked on the Enemy healthbar UI and the Main Menu and Pause Menu UI.
                        Other tasks included working on various bug fixes and helping other teammates as required.
                    </p>
                </div>
                <div className='media'>

                    <iframe width="480" height="270"
                        src="https://www.youtube.com/embed/puM_kd8RqZI?si=TAwjtXnvziuisvP2"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="autoplay; encrypted-media;"
                        allowFullScreen>
                    </iframe>

                    <div className='button'>
                        <Button
                            variant="contained"
                            color="default"
                            href="https://marevv.itch.io/colorfoul"
                        >
                            Play the game

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

export default Colorfoul;