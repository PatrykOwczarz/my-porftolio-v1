import React from 'react'
import '../styles/ProjectDetails.css'
import Picture1 from '../assets/images/the-dungeon.png'

function TheDungeon() {
    return (
        <div className='main'>
            <h1 className='title'>The Dungeon</h1>
            <hr></hr>
            <div className='intro'>
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

                </div>
            </div>
            <hr></hr>
            <div className='purpose'>

            </div>
        </div>

    );
};

export default TheDungeon;