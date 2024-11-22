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
                        This project was created in a 4 days and placed 693 out of 7614 entries in the Game Jam!
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
                        I was approached by friends who I met at Develop:Brighton 2024. I expressed my interest
                        in game jams when we met in person. When Jasmine has reached out to me about the team that she was forming,
                        I eagerly accepted and got to know everyone on the team. We worked incredibly effectively during the
                        4 day Game Jam and I have seriously improved my development skills but also teamwork, communication and
                        especially time management as this was my first time doing a 4 day game jam.
                    </p>


                    <h2>Initial Vision:</h2>
                    <p>
                        The theme was "Built to Scale". Prior to starting the game jam we had ambitions to make a
                        2D isometric action game inspired by Vampire Survivors. This quickly changed after the theme was
                        revealed and we moved to the idea of building something to climb (scale) up it. The idea of deliveries
                        came up and we quickly started doing research on the main idea behind the game. One of us mentioned Death Stranding
                        and we found out that it was based on a real Japanese occupation of the "Bokka". A Bokka was a
                        courier who would carry supplies to remote mountain guesthouses inaccessible to vehicles. That is how we
                        settled on making Rebecca (Bekka) the Bokka who had a magical pen which allows her to summon terrain to
                        climb the rough mountain landscape to deliver goods to the residents.
                    </p>

                    <h2>Initial Design:</h2>
                    <p>
                        The initial design was a traditional platformer which would require the player to jump on the placed blocks.
                        We iterated on the idea and decided to make a climbing mechanic instead which would be different from
                        other platforming games. Thus turning the game into more of a puzzle game with platforming elements as
                        we created levels with various difficulties based on the "inventory" of available pieces on set difficulty.
                    </p>

                    <h2>Preliminary Planning:</h2>
                    <p>
                        We setup a Miro board to generate ideas for the project and to have a place for the artists to create a
                        mood board for the style of the game. We brainstormed various options for the type of characters and
                        settled on making animals for the characters in the game. We also created a Trello board to add tasks
                        and keep track of who is working on what at a given time. We used Discord as the main medium of communication
                        during the project.
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