import React from 'react'
import '../styles/ProjectDetails.css'
import Button from '@material-ui/core/Button';
import Picture1 from '../assets/images/tank-survival.png'
import Picture2 from '../assets/images/tank-survival-first-person.png'
import Picture3 from '../assets/images/tank-survival-fog.png'
import Picture4 from '../assets/images/tank-survival-spotlight.png'
import Picture5 from '../assets/images/tank-survival-house.png'
import Picture6 from '../assets/images/tank-survival-level.png'
import GithubIcon from '../assets/images/Github.png'

function TankSurvival() {

    return (
        <div className='main'>
            <h1 className='title'>Tank Survival</h1>

            <hr></hr>
            {/* Intro Section */}
            <div className='section'>
                <div className='text'>
                    <h1>Introduction</h1>
                    <h2>Summary:</h2>
                    <p>
                        C++ project using an OpenGL engine. I created a track using a Catmull-Rom
                        spline on which the tank auto traverses while the player dodges or destroys
                        obstacles in the way. The aim of this project was to learn how rendering is
                        done via buffers and shaders in OpenGL.
                    </p>
                    <div className='lists'>
                        <div>
                            <h3>Core functionality:</h3>
                            <ul>
                                <li>
                                    Catmull-rom Spline
                                </li>
                                <li>
                                    Shader programming
                                </li>
                                <li>
                                    Rendering
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
                                    GLSL
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
                        Solo project done as part of my Computer Graphics module in my third
                        year of university. I used a template C++ OpenGL engine provided by
                        our University lecturer as a base for the project. The project
                        features some meshes downloaded from the internet and some shapes and
                        models created by myself from scratch. From defining vertices to providing
                        textures and texcoords and shading.
                    </p>
                </div>
                <div className='media'>

                    <iframe width="480" height="270"
                        src="https://www.youtube.com/embed/iNohO_cFge0?si=2j0sKnXHeRs2yvSI"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="autoplay; encrypted-media;"
                        allowFullScreen>
                    </iframe>

                    <div className='button'>
                        <Button
                            variant="contained"
                            color="default"
                            href="https://github.com/PatrykOwczarz/Tank-Survival"
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
                        This project was beneficial to me because it taught me about low level
                        C++ optimisation and how OpenGL works. I learnt how rendering works
                        from defining vertices and loading them into buffers to writing vertex
                        and fragment shaders using GLSL.
                    </p>


                    <h2>Initial Vision:</h2>
                    <p>
                        The final project very closely reflects the initial vision. The objective
                        of the project was to learn how to implement a Catmull-rom spline and use
                        it in some interesting way to create either a game or a cinematic experience.
                        I ended up creating a game in which the premise was to go around a path in a tank
                        and avoid obstacles and shoot barrels. This would be similar to games such as
                        Temple Run or Subway Surfers where you don't move forward, just left and right.
                    </p>

                    <h2>Initial Design:</h2>
                    <p>
                        The initial design focused mostly on the path and creating the camera
                        angles. The game has 3 camera modes: first-person with a view of the tank barrel,
                        a third-person camera as seen in the demo video and a top down bird's eye view.
                        The path was supposed to feature some slight slants horizontally so the path would be interesting
                        and not just flat but due to Covid I had to cut some corners to make sure the core
                        functionality would be implemented on time.
                    </p>

                    <h2>Preliminary Planning:</h2>
                    <p>
                        The main planning and research consisted of figuring out how to implement a Catmull-rom
                        spline in code and how to create a track based on the single centreline defined by
                        the algorithm. The implementation of this is explained in the next section.
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
                    <h2>Catmull-rom Spline and OpenGL Rendering:</h2>
                    <ul>
                        <li>
                            Created a track based on a set of control points.
                            A Catmull-rom spline is a continuous spline.
                        </li>
                        <li className='linksinlist'>
                            To work out the shape of the spline, an interpolation formula is used
                            which takes 4 consecutive control points. This formula can be seen on
                            line 17 in this file: <a href='https://github.com/PatrykOwczarz/Tank-Survival/blob/main/Tank%20Survival/OpenGLTemplate/CatmullRom.cpp'>CatmullRom.cpp</a>

                        </li>
                        <li>
                            Using this formula I have created a centreline based on the spline
                            defined by the control points.
                        </li>
                        <li>
                            To create an actual track I had to use the cross product to work
                            out 2 points left and right of the centreline which are perpendicular
                            and equidistant to the centreline.
                        </li>
                        <li>
                            I then created a 2d track by creating a plane facing upwards
                            by utilising the render pipeline that OpenGL uses.
                        </li>
                        <li className='linksinlist'>
                            I stored each vertex in a VAO (Vertex Array Object) and each
                            of those vertices was acted upon by a vertex shader seen here:
                            <a href='https://github.com/PatrykOwczarz/Tank-Survival/blob/main/Tank%20Survival/OpenGLTemplate/resources/shaders/mainShader.vert'>mainShader.vert</a>
                        </li>
                        <li>
                            The BlinnPhong Model was used for shading.
                        </li>
                        <li className='linksinlist'>
                            I also implemented a fragment shader which was used after Rasterization:
                            <a href='https://github.com/PatrykOwczarz/Tank-Survival/blob/main/Tank%20Survival/OpenGLTemplate/resources/shaders/mainShader.frag'>mainShader.frag</a>
                        </li>
                    </ul>


                    <h2>Camera and various shader effects:</h2>
                    <ul>
                        <li>
                            I have implemented the following camera angles: Top down view (bird's eye view),
                            first person which was looking just above the barrel of the tank and third person
                            view which was behind the tank.
                        </li>
                        <li>
                            These camera angles were based on the position of the tank which was moving
                            at a steady speed along the spline, following the centreline defined by the
                            above implementation.
                        </li>
                        <li>
                            I also implemented raidal blur, fog and a night-time mode with a
                            spotlight attached to it.
                        </li>
                    </ul>

                    <h2>Evolving and changing gameplay:</h2>
                    <ul>
                        <li>
                            The visual effects change each time the player completes a lap
                            of the track. The initial lap doesn't have any visual effects.
                        </li>
                        <li>
                            After 1 lap the night mode is enabled. The ambient light is turned down
                            and a spotlight is attached to the front of the tank.
                            After 2 laps, fog mode is enabled and night mode is disabled. There
                            is a fog shader applied to the game.
                            After 3 laps, both night and fog mode are enabled.
                        </li>
                        <li>
                            After each lap the tank also goes faster. There is a radial blur
                            that is constantly in effect but with each lap it gets gradually
                            more intense as the speed increases.
                        </li>
                    </ul>

                    <h2>Technical issues along the way:</h2>
                    <ul>
                        <li>
                            Problem:
                            <ul>
                                <li>
                                    There were no game breaking issues along the way.
                                    The major issue would be with the lighting where
                                    I struggled to get the ambient setting
                                    correct and to add the spotlight correctly.
                                </li>
                            </ul>
                        </li>

                        <li>
                            Solution:
                            <ul>
                                <li>
                                    I ended up adding a spotlight to the tank. The initial plan was
                                    to add night lamps with spotlights next to the track to light the way
                                    when the night-time mode was enabled.
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className='media'>
                    <img src={Picture3} alt="Profile" width="480" height="270" />
                    <img src={Picture4} alt="Profile" width="480" height="270" />

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
                            Complexity of track - I could make the track more interesting
                            with more verticality and potentially slanting horizontally
                            slightly to simulate a more realistic surface.
                        </li>
                        <li>
                            Refactoring the code so that it is more readable and reusable.
                            It is hard to read and understand the flow of the code in the
                            main cpp file for the project.
                        </li>
                        <li>
                            Other than that, I think I am happy with how this game turned out,
                            considering it was a small project that I did for a University module.
                        </li>
                    </ul>

                    <h2>Evaluation of tools used:</h2>
                    <p>
                        The engine that was provided was relatively barebones. It was a good
                        foundation to implement rendering and shading.
                        Given that I had no real choice on which engine I could use for this
                        module and the whole idea was to develop a graphical engine, I think
                        that the project was a sucess and I managed to create a creative
                        game from that foundation.

                    </p>

                    <h2>What I would have done differently:</h2>
                    <p>
                        I would focus more time on creating an interesting path for the
                        game. I would incorporate more horizontal variety to create a more
                        realistic track overall.
                    </p>

                    <h2>Final takeaways moving forward:</h2>
                    <p>
                        I have built my confidence working with OpenGL and I have learnt
                        a lot about rendering and how lighting and shading works.
                        I have enjoyed working on this project and I will build upon
                        this knowledge in the future as I develop my skillset.
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

export default TankSurvival;
