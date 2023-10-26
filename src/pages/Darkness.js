import React from 'react'
import '../styles/ProjectDetails.css'
import Button from '@material-ui/core/Button';
import Picture1 from '../assets/images/darkness.png'
import Picture2 from '../assets/images/darkness-vfx.png'
import Picture3 from '../assets/images/darkness-pillar.png'
import Picture4 from '../assets/images/darkness-vial.png'
import Picture5 from '../assets/images/darkness-dmg.png'
import Picture6 from '../assets/images/darkness-hitbox.png'
import GithubIcon from '../assets/images/Github.png'

function Darkness() {

    return (
        <div className='main'>
            <h1 className='title'>Darkness</h1>

            <hr></hr>
            {/* Intro Section */}
            <div className='section'>
                <div className='text'>
                    <h1>Introduction</h1>
                    <h2>Summary:</h2>
                    <p>
                        C++ project using a Cherno Project derived graphical engine.
                        The aim of this project was to learn how to create and change
                        an engine to add models, animation, sound, AI and game logic
                        into a relatively barebones C++ OpenGL engine.
                    </p>
                    <div className='lists'>
                        <div>
                            <h3>Core functionality:</h3>
                            <ul>
                                <li>
                                    Rendering
                                </li>
                                <li>
                                    VFX
                                </li>
                                <li>
                                    AI
                                </li>
                                <li>
                                    Sound
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3>Technologies used:</h3>
                            <ul>
                                <li>
                                    C++
                                </li>
                                <li>
                                    OpenGL
                                </li>
                                <li>
                                    Blender
                                </li>
                                <li>
                                    Git/Github
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h2>My Contribution:</h2>
                    <p>
                        Solo project for my Advanced Games Technology module in my third
                        year at university. I was given a barebones C++ engine and had to
                        implement rendering, AI, Sound and some gameplay elements.
                    </p>
                </div>
                <div className='media'>

                    <iframe width="480" height="270"
                        src="https://www.youtube.com/embed/98PIADZ3Cx0?si=eL4S5wGMGY45Cm4J"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="autoplay; encrypted-media;"
                        allowFullScreen>
                    </iframe>

                    <div className='button'>
                        <Button
                            variant="contained"
                            color="default"
                            href="https://github.com/PatrykOwczarz/Darkness"
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
                        I learnt how a C++ game engine works using OpenGL as the
                        graphical API. This project lay the foundational knowledge in C++
                        coding and how C++ can be used to write an engine. I used this knowledge
                        to develop the Tank-Survival project with later in the year.
                    </p>


                    <h2>Initial Vision:</h2>
                    <p>
                        The initial vision for this project was to create an atmospheric
                        horror shooter with creepy background music and only a spotlight
                        to light the way. It was supposed to feature a level filled with
                        dark corridors which the player would have to traverse. The objective
                        was to find pages of a book which when put together would stop the
                        encroaching darkness.
                    </p>

                    <h2>Initial Design:</h2>
                    <p>
                        The initial design featured a companion AI that would follow the player
                        and offer help. The game would feature several types of enemies, some with
                        range attacks and some with melee attacks. Due to the impact of the Covid
                        pandemic during this project I was unable to fully create what I planned to
                        do.
                    </p>

                    <h2>Preliminary Planning:</h2>
                    <p>
                        The initial planning involved researching what makes horror games scary
                        and how I can implement various gameplay mechanics to aid the horror feel.
                        I used Silent Hill and the early Resident Evil games as inspiration.
                        I planned to implement some fog as limitting the vision of the player
                        creates an element of uncertainty. Therefore building up the tension in
                        the game. Also the ambient music has an impact on setting the mood in the
                        game, that is why the game features a creepy background soundtrack.
                    </p>
                </div>
                <div className='media'>
                    <img src={Picture1} alt="Profile" width="480" height="270" />
                    <img src={Picture2} alt="Profile" width="480" height="270" />

                </div>
            </div>

            <hr></hr>
            {/* Noteable Achievements and Learnings Section */}
            <div className='section'>
                <div className='text'>
                    <h1>Notable Achievements and Learnings</h1>
                    <h2>Creating primitive models and understanding how rendering works.</h2>
                    <ul>
                        <li>
                            I have created several primitive shapes made up of vertices which
                            were stored in a VAO (Vertex Array Object).
                        </li>
                        <li>
                            I have worked out normals of said vertices by working out the cross product
                            of a set of vertices. The normals alongside the texcoords and vertices were
                            stored in VBO's (Vertex Buffer Objects)
                        </li>
                        <li>
                            This was an intro to rendering which was expanded upon in the
                            Tank-Survival project which focused on the Rendering side of an
                            engine featuring the rendering pipeline of OpenGL.
                        </li>
                        <li>
                            The normals were used for the lighting in the scene.
                        </li>
                    </ul>

                    <p>Link to main cpp file: <a href='https://github.com/PatrykOwczarz/Darkness/blob/main/Darkness/game/src/example_layer.cpp'> example_layer.cpp</a></p>

                    <h2>Sound and VFX</h2>
                    <ul>
                        <li>
                            I used fmod to implement audio into the game.
                        </li>
                        <li>
                            The game features ambient music, sounds for electric weapon,
                            enemy hurt sounds, enemy death sounds, player death sounds and
                            enemy attack sounds.
                        </li>
                        <li>
                            I implemented a red overlaying screen when the player takes
                            damage and the vfx for the electric powerup.
                        </li>
                    </ul>

                    <h2>Technical issues along the way:</h2>
                    <ul>
                        <li>
                            Problem:
                            <ul>
                                <li>
                                    The main problem was the meshes not aligning with the
                                    hitboxes for the game. I later found out that this was
                                    because the meshes where not aligned in the file that I
                                    imported. This meant that when I loaded in the models, the
                                    point of origin was not at the base of the model.
                                </li>
                            </ul>
                        </li>

                        <li>
                            Solution:
                            <ul>
                                <li>
                                    I did not have enough time before the deadline to fix
                                    this problem but I know how to fix it.
                                    The fix required me to go into blender and reset the
                                    position of the model and re-export it.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className='media'>
                    <img src={Picture3} alt="Profile" width="300" height="350" />
                    <img src={Picture4} alt="Profile" width="400" height="270" />

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
                            Level design: Not implemented at all. This was more of a
                            "tech demo" rather than a game without the level.
                        </li>
                        <li>
                            AI: Very simple AI based on an FSM that used proximity based
                            behaviours. Patrol, if player in range, chase them and deduct
                            damage upon collision. A lot of room for expansion.
                        </li>
                        <li>
                            Animations and meshes: Hitboxes are off and no animations
                            for most models. A lot of 3D art work which was not the focus
                            of this project.
                        </li>
                        <li>
                            Major refactoring of project: The code works but is a nightmare
                            to read. I learned a valuable lesson about managing a codebase in
                            this project.
                        </li>
                    </ul>

                    <h2>Evaluation of tools used:</h2>
                    <p>
                        I did not have a choice in the foundational engine used for this project.
                        The whole objective of this project was to pick up a bare bones engine and
                        implement the essential systems to ensure a prototype of a game could be
                        created. I would say that I was successful in achieving this as the essential
                        tools were available at the end. You could create and load models and assets,
                        create AI, implement VFX, add sound and add lighting (point lights and spotlights).
                    </p>

                    <h2>What I would have done differently:</h2>
                    <p>
                        If I would do this project again, I would focus more on the level design to ensure
                        I had a level to test out the implemented game mechanics. I would say overall the
                        game had some promising gameplay elements but there was no level to use them in.
                        I ended up spawning the enemies randomly around the platform to simulate a wave
                        based game mode which was not the initial plan for the project.
                    </p>

                    <h2>Final takeaways moving forward:</h2>
                    <p>
                        I learnt foundational knowledge in creating a C++ game engine. I used these skills
                        in the tank-survival project which used a similar engine. The code base was a mess
                        but I have learnt the importance of code organisation and refactoring code for
                        reuse from this project which made me a better programmer overall.
                    </p>
                </div>
                <div className='media'>
                    <img src={Picture5} alt="Profile" width="480" height="270" />
                    <img src={Picture6} alt="Profile" width="480" height="270" />

                </div>
            </div>
            <br></br>
        </div>

    );

};

export default Darkness;