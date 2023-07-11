import React from 'react'
import '../styles/Projects.css'
import ProfilePic from '../assets/images/profile-pic.jpg'
import GithubIcon from '../assets/images/Github.png'
import Button from '@material-ui/core/Button';

function Projects() {
    return (
        <div className='projectsPage'>
            <h1>PROJECTS</h1>
            <div className='projectLayout'>

                <div className='projectBox'>
                    <img src={ProfilePic} alt="Profile" width="200" height="200" />
                    <div className='projectInfo'>
                        <h2>Project Title</h2>
                        <div className='projectDescription'>
                            <p className='descriptionP'>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua.
                                Ut consequat semper viverra nam libero justo laoreet.
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
                                    <Button
                                        variant="contained"
                                        color="default"
                                        href="https://github.com/PatrykOwczarz"
                                    >
                                        <img src={GithubIcon} alt="Github Icon" width="30" height="30"></img>
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="default"
                                        href="./"
                                    >
                                        Info
                                    </Button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='projectBox'>
                    <img src={ProfilePic} alt="Profile" width="200" height="200" />
                    <div className='projectInfo'>
                        <h2>Project Title</h2>
                        <div className='projectDescription'>
                            <p className='descriptionP'>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua.
                                Ut consequat semper viverra nam libero justo laoreet.
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
                                    <Button
                                        variant="contained"
                                        color="default"
                                        href="https://github.com/PatrykOwczarz"
                                    >
                                        <img src={GithubIcon} alt="Github Icon" width="30" height="30"></img>
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="default"
                                        href="./"
                                    >
                                        Info
                                    </Button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='projectBox'>
                    <img src={ProfilePic} alt="Profile" width="200" height="200" />
                    <div className='projectInfo'>
                        <h2>Project Title</h2>
                        <div className='projectDescription'>
                            <p className='descriptionP'>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua.
                                Ut consequat semper viverra nam libero justo laoreet.
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
                                    <Button
                                        variant="contained"
                                        color="default"
                                        href="https://github.com/PatrykOwczarz"
                                    >
                                        <img src={GithubIcon} alt="Github Icon" width="30" height="30"></img>
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="default"
                                        href="./"
                                    >
                                        Info
                                    </Button>

                                </div>

                            </div>

                        </div>
                    </div>

                </div>

                <div className='projectBox'>
                    <img src={ProfilePic} alt="Profile" width="200" height="200" />
                    <div className='projectInfo'>
                        <h2>Project Title</h2>
                        <div className='projectDescription'>
                            <p className='descriptionP'>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt
                                ut labore et dolore magna aliqua.
                                Ut consequat semper viverra nam libero justo laoreet.
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
                                    <Button
                                        variant="contained"
                                        color="default"
                                        href="https://github.com/PatrykOwczarz"
                                    >
                                        <img src={GithubIcon} alt="Github Icon" width="30" height="30"></img>
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="default"
                                        href="./"
                                    >
                                        Info
                                    </Button>

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