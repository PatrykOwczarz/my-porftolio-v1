import React from 'react'
import '../styles/Projects.css'
import RealmWarp from '../assets/images/realm-warp.jpg'
import TheDungeon from '../assets/images/the-dungeon.png'
import BekkaTheBokka from '../assets/images/bekka-the-bokka.png'
import Colorfoul from '../assets/images/colorfoul.png'
import ShellShocked from '../assets/images/shellshocked-art.jpg'
import TankSurvival from '../assets/images/tank-survival.png'
import Ends from '../assets/images/Ends.jpg'
import Darkness from '../assets/images/darkness.png'
import { Link, useLocation } from 'react-router-dom'

function Projects() {


    return (
        <div className='projectsPage'>
            <h1>PROJECTS</h1>
            <div className='projectLayout'>

                <div className='projectBox'>
                    <img src={Ends} alt="Profile" width="320" height="133" />
                    <div className='projectInfo'>
                        <h2>ENDS</h2>
                        <div className='projectDescription'>
                            <p className='descriptionP'>
                                Single-player action game developed using Unreal Engine 5.
                                I am working on the project on a voluneering basis as an
                                Unreal Engine Programmer. Bound by NDA. Devlog coming soon.
                            </p>
                            <div className='technologies'>
                                <p>Technologies used:</p>
                                <ul>
                                    <li>
                                        Unreal Engine 5
                                    </li>
                                    <li>
                                        Blueprints and C++
                                    </li>
                                    <li>
                                        Plastic SCM
                                    </li>
                                </ul>
                                <div className='buttons'>

                                    <Link className='linkButton' to="https://store.steampowered.com/app/2870130/ENDS/">More Info</Link>

                                </div>

                            </div>

                        </div>
                    </div>

                </div>

                <div className='projectBox'>
                    <img src={BekkaTheBokka} alt="Profile" width="320" height="133" />
                    <div className='projectInfo'>
                        <h2>Bekka The Bokka</h2>
                        <div className='projectDescription'>
                            <p className='descriptionP'>
                                C# project in Unity.
                                Created for the GMTK Game Jam 2024. The theme was "Built to scale".
                                The game fit the theme by building a path for you to scale up it in a platformer style game.
                                Created by a team of 9 people.
                                My role on the team was Programmer.
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

                                    <Link className='linkButton' to="/projects/bekkathebokka">More Info</Link>

                                </div>

                            </div>

                        </div>
                    </div>

                </div>

                <div className='projectBox'>
                    <img src={ShellShocked} alt="Profile" width="200" height="200" />
                    <div className='projectInfo'>
                        <h2>ShellShocked</h2>
                        <div className='projectDescription'>
                            <p className='descriptionP'>
                                C# project in Unity.
                                Created for The Global Game Jam 2025. The theme of this game jam was
                                bubbles. The game was inspired by the wave-based "Vampire Survivors"
                                genre. Created by a team of 7 people. I was one of two programmers on
                                the project.
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
                                        FMOD
                                    </li>
                                    <li>
                                        Github
                                    </li>
                                </ul>
                                <div className='buttons'>

                                    <Link className='linkButton' to="/projects/shellshocked">More Info</Link>

                                </div>

                            </div>

                        </div>
                    </div>

                </div>

                <div className='projectBox'>
                    <img src={TankSurvival} alt="Profile" width="320" height="180" />
                    <div className='projectInfo'>
                        <h2>Tank Survival</h2>
                        <div className='projectDescription'>
                            <p className='descriptionP'>
                                C++ project using an OpenGL engine. <br></br>
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
                    <img src={RealmWarp} alt="Realm-Warp" width="320" height="180" />
                    <div className='projectInfo'>
                        <h2>Realm Warp</h2>
                        <div className='projectDescription'>
                            <p className='descriptionP'>
                                C# project using Unity.
                                Inspired by Half-Life 2 and Control, Realm Warp is a
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


            </div>
        </div>
    )
};

export default Projects;

/*

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
                    <img src={Colorfoul} alt="Profile" width="320" height="80" />
                    <div className='projectInfo'>
                        <h2>Colorfoul</h2>
                        <div className='projectDescription'>
                            <p className='descriptionP'>
                                C# project in Unity.
                                Created for the Pirate Software Game Jam 14. The theme was "Shadow Alchemy".
                                Inspired by Vampire Survivors the player is an alchemist who combines materials to summon shadows.
                                Created by team of 4 people. My role was Programmer.
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

                                    <Link className='linkButton' to="/projects/colorfoul">More Info</Link>

                                </div>

                            </div>

                        </div>
                    </div>

                </div>



*/