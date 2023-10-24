import React from 'react'
import '../styles/Projects.css'
import RealmWarp from '../assets/images/realm-warp.jpg'
import TheDungeon from '../assets/images/the-dungeon.png'
import TankGame from '../assets/images/tank-game.png'
import TankSurvival from '../assets/images/tank-survival.png'
import Darkness from '../assets/images/darkness.png'
import GithubIcon from '../assets/images/Github.png'
import Button from '@material-ui/core/Button';
import { Link, useLocation } from 'react-router-dom'

function Projects() {


    return (
        <div className='projectsPage'>
            <h1>PROJECTS</h1>
            <div className='projectLayout'>

                <div className='projectBox'>
                    <img src={TankSurvival} alt="Profile" width="320" height="180" />
                    <div className='projectInfo'>
                        <h2>Tank Survival</h2>
                        <div className='projectDescription'>
                            <p className='descriptionP'>
                                C++ project using an OpenGL engine.
                                I created a track using a Catmull-Rom spline on which
                                the tank auto traverses while the player dodges or destroys
                                obstacles in the way. The aim of this project was to learn how
                                rendering is done via buffers and shaders in OpenGL.
                            </p>
                            <div className='technologies'>
                                <p>Technologies used:</p>
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
                                <div className='buttons'>

                                    <Link className='linkButton' to="/projects/tanksurvival">More Info</Link>

                                </div>

                            </div>

                        </div>
                    </div>

                </div>

                <div className='projectBox'>
                    <img src={Darkness} alt="Profile" width="320" height="180" />
                    <div className='projectInfo'>
                        <h2>Darkness</h2>
                        <div className='projectDescription'>
                            <p className='descriptionP'>
                                C++ project using a Cherno Project derived graphical
                                engine. The aim of this project was to learn how to create and change
                                an engine to add models, animation, sound, AI and game logic into a
                                relatively barebones C++ OpenGL engine.
                            </p>
                            <div className='technologies'>
                                <p>Technologies used:</p>
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
                                <div className='buttons'>

                                    <Link className='linkButton' to="/projects/darkness">More Info</Link>

                                </div>

                            </div>

                        </div>
                    </div>

                </div>

                <div className='projectBox'>
                    <img src={RealmWarp} alt="Realm-Warp" width="320" height="180" />
                    <div className='projectInfo'>
                        <h2>Realm Warp</h2>
                        <div className='projectDescription'>
                            <p className='descriptionP'>
                                C# project using Unity.
                                Inspired by Half-life 2 and Control, Realm warp is a
                                physics manipulation game focused on telekinesis, levitation and
                                force push mechanics to defeat enemies and navigate the game world.

                            </p>
                            <div className='technologies'>
                                <p>Technologies used:</p>
                                <ul>
                                    <li>
                                        Unity
                                    </li>
                                    <li>
                                        C#
                                    </li>
                                    <li>
                                        Github
                                    </li>
                                </ul>
                                <div className='buttons'>

                                    <Link className='linkButton' to="/projects/realmwarp">More Info</Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='projectBox'>
                    <img src={TheDungeon} alt="Profile" width="320" height="180" />
                    <div className='projectInfo'>
                        <h2>The Dungeon</h2>
                        <div className='projectDescription'>
                            <p className='descriptionP'>
                                C# project using Unity. Inspired by original
                                Final Fantasy games and the pokemon games,
                                The Dungeon is a Turn-based RPG with multiple
                                classes set in a dark fantasy dungeon.
                            </p>
                            <div className='technologies'>
                                <p>Technologies used:</p>
                                <ul>
                                    <li>
                                        Unity
                                    </li>
                                    <li>
                                        C#
                                    </li>
                                    <li>
                                        Github
                                    </li>
                                </ul>
                                <div className='buttons'>

                                    <Link className='linkButton' to="/projects/thedungeon">More Info</Link>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='projectBox'>
                    <img src={TankGame} alt="Profile" width="320" height="180" />
                    <div className='projectInfo'>
                        <h2>Tank Game</h2>
                        <div className='projectDescription'>
                            <p className='descriptionP'>
                                C# project in Unity.
                                Created during a games development academy hosted by University
                                of Westminster. I worked in a team consisting of
                                a designer, an artist and myself who was the main programmer.
                                The game is a wave-based tank shooter.
                            </p>
                            <div className='technologies'>
                                <p>Technologies used:</p>
                                <ul>
                                    <li>
                                        Unity
                                    </li>
                                    <li>
                                        C#
                                    </li>
                                    <li>
                                        Github
                                    </li>
                                </ul>
                                <div className='buttons'>

                                    <Link className='linkButton' to="/projects/tankgame">More Info</Link>

                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Projects;