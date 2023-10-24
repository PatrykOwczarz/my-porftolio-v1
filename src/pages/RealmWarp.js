import React from 'react'
import '../styles/ProjectDetails.css'
import Button from '@material-ui/core/Button';
import Picture1 from '../assets/images/realm-warp.jpg'
import GithubIcon from '../assets/images/Github.png'

function RealmWarp() {

    return (

        <div className='main'>
            <h1 className='title'>Realm Warp</h1>

            <hr></hr>
            {/* Intro Section */}
            <div className='section'>
                <div className='text'>
                    <h1>Introduction</h1>
                    <h2>Summary:</h2>
                    <p>
                        C# project using Unity. Inspired by Half-life 2 and Control,
                        Realm Warp is a physics manipulation game focused on telekinesis,
                        levitation and force push mechanics to defeat enemies and navigate the game world.
                    </p>
                    <div className='lists'>
                        <div>
                            <h3>Core functionality:</h3>
                            <ul>
                                <li>
                                    Telekinetic Gravity Manipulation system
                                </li>
                                <li>
                                    Force Push
                                </li>
                                <li>
                                    Ragdolls
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
                                    Github
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h2>My Contribution:</h2>
                    <p>
                        This was a solo project for my individual project module in my final
                        year of university. The title for my dissertation and the premise for
                        this project was: "Creating a 3D Physics Based Action Game in Unity"
                        I used various video tutorials on YouTube over the course of the project
                        to gain knowledge on how to implement the systems.
                    </p>
                </div>
                <div className='media'>

                    <iframe width="480" height="270"
                        src="https://www.youtube.com/embed/KxAylqFRk6Q?si=jUiVxm05Wby9-Sst"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="autoplay; encrypted-media;"
                        allowFullScreen>
                    </iframe>

                    <div className='button'>
                        <Button
                            variant="contained"
                            color="default"
                            href="https://github.com/PatrykOwczarz/Realm-Warp"
                        >
                            Code
                            <img src={GithubIcon} alt="Github Icon" width="30" height="30"></img>

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
                        This was a passion project focused on learning how to create systems
                        that manipulate gravity and simulate supernatural powers.
                    </p>


                    <h2>Expected outcome of Project</h2>
                    <p>
                        The outcome of the project was to create a game in which the player
                        controlled a supernatural character capable of picking up objects
                        and throwing them in a desired direction. Other powers would include
                        force push and levitation which would only be available if the player
                        entered a "dark realm" through picking up a powerup or toggling it on
                        in some way.
                    </p>

                    <h2>Initial Design:</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut consequat semper viverra nam libero justo laoreet.
                    </p>

                    <h2>Preliminary Planning:</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut consequat semper viverra nam libero justo laoreet.
                    </p>
                </div>
                <div className='media'>
                    <img src={Picture1} alt="Profile" width="480" height="270" />
                    <img src={Picture1} alt="Profile" width="480" height="270" />

                </div>
            </div>

            <hr></hr>
            {/* Noteable Achievements and Learnings Section */}
            <div className='section'>
                <div className='text'>
                    <h1>Notable Achievements and Learnings</h1>
                    <h2>Turn-Based Combat</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut consequat semper viverra nam libero justo laoreet.
                    </p>


                    <h2>Battle Calculations</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut consequat semper viverra nam libero justo laoreet.
                    </p>

                    <h2>Technical issues along the way:</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut consequat semper viverra nam libero justo laoreet.
                    </p>

                    <h2>How I solved these issues:</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut consequat semper viverra nam libero justo laoreet.
                    </p>
                </div>
                <div className='media'>
                    <img src={Picture1} alt="Profile" width="480" height="270" />
                    <img src={Picture1} alt="Profile" width="480" height="270" />

                </div>
            </div>

            <hr></hr>
            {/* Lessons Learnt Section*/}
            <div className='section'>
                <div className='text'>
                    <h1>Lessons Learnt</h1>
                    <h2>What I Learnt:</h2>

                    <ul>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        </li>
                        <li>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        </li>
                    </ul>

                    <h2>Evaluation of tools used:</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut consequat semper viverra nam libero justo laoreet.
                    </p>

                    <h2>What I would have done differently:</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut consequat semper viverra nam libero justo laoreet.
                    </p>

                    <h2>Final takeaways moving forward:</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut consequat semper viverra nam libero justo laoreet.
                    </p>
                </div>
                <div className='media'>
                    <img src={Picture1} alt="Profile" width="480" height="270" />
                    <img src={Picture1} alt="Profile" width="480" height="270" />

                </div>
            </div>
            <br></br>
        </div>

    );

};

export default RealmWarp;