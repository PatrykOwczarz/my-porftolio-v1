import React from 'react'
import '../styles/ProjectDetails.css'
import Button from '@material-ui/core/Button';
import Picture1 from '../assets/images/tank-game.png'
import GithubIcon from '../assets/images/Github.png'

function TankGame() {

    return (

        <div className='main'>
            <h1 className='title'>Tank Game</h1>

            <hr></hr>
            {/* Intro Section */}
            <div className='section'>
                <div className='text'>
                    <h1>Introduction</h1>
                    <h2>Summary:</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut consequat semper viverra nam libero justo laoreet.
                    </p>
                    <div className='lists'>
                        <div>
                            <h3>Core functionality:</h3>
                            <ul>
                                <li>
                                    C++
                                </li>
                                <li>
                                    OpenGL
                                </li>
                                <li>
                                    Github
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut consequat semper viverra nam libero justo laoreet.
                    </p>
                </div>
                <div className='media'>

                    <iframe width="480" height="270"
                        src="https://www.youtube.com/embed/-8v2ylwdyPk?si=5lvoo_5L3AwUviTP"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="autoplay; encrypted-media;"
                        allowFullScreen>
                    </iframe>

                    <div className='button'>
                        <Button
                            variant="contained"
                            color="default"
                            href="https://github.com/PatrykOwczarz/Tank-Game"
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut consequat semper viverra nam libero justo laoreet.
                    </p>


                    <h2>Expected outcome of Project</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut consequat semper viverra nam libero justo laoreet.
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

export default TankGame;