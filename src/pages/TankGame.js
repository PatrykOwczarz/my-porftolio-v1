import React from 'react'
import '../styles/ProjectDetails.css'
import Button from '@material-ui/core/Button';
import Picture1 from '../assets/images/tank-game.png'
import Picture2 from '../assets/images/tank-game-2.png'
import Picture3 from '../assets/images/tank-game-healthbar.png'
import Picture4 from '../assets/images/tank-game-defeat.png'
import Picture5 from '../assets/images/tank-game-menu.png'
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
                        C# project in Unity. Created during a games development academy
                        hosted by University of Westminster. I worked in a team consisting
                        of a designer, an artist and myself who was the main programmer.
                        The game is a wave-based tank shooter.
                    </p>
                    <div className='lists'>
                        <div>
                            <h3>Core functionality:</h3>
                            <ul>
                                <li>
                                    3rd person controller
                                </li>
                                <li>
                                    Projectile shooting system
                                </li>
                                <li>
                                    Wave based spawner
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
                        This was a group project. I worked on a 3 person team. I was the programmer on the team so I was
                        in charge of creating the gameplay, movement controller, camera and
                        ui. I helped in implementing the assets and sound into the game but I
                        cannot take full credit for their creation and implementation.
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
                        This was my first group project. I learned a lot about the importance
                        of version control and how to work effectively on a team. I also learned
                        how object pooling works which is an effective way to reduce the impact
                        of loading and destroying objects during runtime.
                    </p>


                    <h2>Initial Vision:</h2>
                    <p>
                        The initial vision for the game was to create a tank shooter in space
                        with various generic powerups such as increases in speed, damage and
                        health. We also planned to add multiple weapon types to fit the sci-fi
                        theme. These would be rockets, lasers and the standard projectiles as seen
                        in the finished product. The level design was meant to be a lot more
                        vertical and populated with various assets.
                    </p>

                    <h2>Initial Design:</h2>
                    <p>
                        The design was done by my teammate who was the game designer on the
                        team. We worked with him to give our input but ultimately he created
                        the design for the game and I helped him realise it.
                    </p>

                    <h2>Preliminary Planning:</h2>
                    <p>
                        We had a few lectures which taught us the basics of Unity to ensure
                        everyone was at the same starting point. The planning then involved
                        doing research into what theme we would go for. We took Halo as
                        inspiration as we agreed that it fit our vision really well. We also
                        deligated the roles on the team based on our strengths. We initially
                        had 6 team members but 3 left the course early so we had to adapt.
                    </p>
                </div>
                <div className='media'>
                    <img src={Picture1} alt="Profile" width="480" height="270" />


                </div>
            </div>

            <hr></hr>
            {/* Noteable Achievements and Learnings Section */}
            <div className='section'>
                <div className='text'>
                    <h1>Notable Achievements and Learnings</h1>
                    <h2>Object Pooling:</h2>
                    <ul>
                        <li>
                            I have learned how to implement Object pooling in Unity.
                            A way to reduce the burden on the CPU when having to rapidly
                            create and destroy GameObjects. A useful design pattern when
                            dealing with projectile style bullets in games.
                        </li>
                        <li>
                            Object Pooling works by pre-instantiating all object that
                            you will need at a specific moment before gameplay. This
                            removes the overhead of having to create new objects and
                            destroy old objects at runtime.
                        </li>
                        <li>
                            In Unity this is done by creating a set number of GameObjects
                            before the game's runtime and simply activate or deactivate
                            them when required. This can significantly improve performance
                            especially when you require many copies of the same object active
                            at a time. An example would be a turret that shoots 2 or more
                            bullets a second and these bullets are actual physical objects
                            in the world and not just tracers from a hitscan gun.
                        </li>

                    </ul>

                    <p>Link to Pool Manager: <a href='https://github.com/PatrykOwczarz/Tank-Game/blob/main/Tank%20game/Assets/Scripts/PoolManager.cs'>PoolManager.cs</a></p>
                    <p>Link to Pool class: <a href='https://github.com/PatrykOwczarz/Tank-Game/blob/main/Tank%20game/Assets/Scripts/Pool.cs'>Pool.cs</a></p>


                    <h2>Health Bar of tanks:</h2>
                    <ul>
                        <li>
                            I was pleased how the health representation turned out in the end.
                        </li>
                        <li>
                            The health bar was represented as an oval slider which was an
                            overlay attached to the bottom of the tank facing upwards.
                        </li>
                        <li>
                            The health value was updated in real time and the slider
                            was adjusted based on a percentage based on 0 and the max
                            health value set at the start of the game.
                        </li>
                        <li>
                            The colour of health was based on current health value going
                            from green at full health to red at low health.
                        </li>
                    </ul>

                    <p>Link to Tank Health class: <a href='https://github.com/PatrykOwczarz/Tank-Game/blob/main/Tank%20game/Assets/Scripts/TankHealth.cs '>TankHealth.cs</a></p>
                    <p>Link to UI orientation class: <a href='https://github.com/PatrykOwczarz/Tank-Game/blob/main/Tank%20game/Assets/Scripts/UIDirectionControl.cs'>UIDirectionControl.cs</a></p>


                </div>

                <div className='media'>
                    <img src={Picture2} alt="Profile" width="480" height="270" />
                    <img src={Picture3} alt="Profile" width="480" height="270" />

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
                            Level design: The level design was an oversight as we
                            wanted to make sure the game was functional before the
                            end of the academy event. Having a more interesting level
                            would lead to a more interesting gameplay loop.
                        </li>
                        <li>
                            Animations: Currently the tank just instantly changes its facing
                            direction which does not represetn how a tank would move in the real
                            world. A huge improvement would be to smooth out the movement by
                            actually making the tank rotate.
                        </li>
                        <li>
                            AI: The AI was incredibly simple and hence the game does not
                            really have any challenge. The AI follows the player and when
                            it reaches a certain distance away it just stands still and
                            shoots at the player. Making the tanks have some sort of random
                            movements and predicting where the player is moving to shoot in
                            front of them with a bit of variance would make this game more
                            fun and challenging to play.
                        </li>
                        <li>
                            Bullet Collision: Currently the enemy and player bullets can
                            collide mid air, making it frustrating to try and defeat the
                            enemy tanks given the current AI. I considered it a feature as
                            you can "deflect" bullets mid air but implementing other ammo
                            that would ignore collisions could be a good solution.
                        </li>
                    </ul>

                    <h2>Evaluation of tools used:</h2>
                    <p>
                        We created the game in Unity and wrote the code in C#. The artist on our
                        team used Maya to work on the assets. I would say we managed to make
                        efficient use of the tools provided to us during our time on the course.
                    </p>

                    <h2>What I would have done differently:</h2>
                    <p>
                        I would take a different approach to creating the movement in the game.
                        instead of snapping the tanks facing direction in the direction of movement,
                        I would try to create a more realistic movement system. The tank would rotate
                        left or right and only move forward in the facing direction to make more
                        challenging and realistic gameplay.
                    </p>

                    <h2>Final takeaways moving forward:</h2>
                    <p>
                        I enjoyed the challenge of working on a team. I feel like I pulled my
                        weight and I contributed in a positive and constructive way. It was a shame
                        that we lost half of our team members early into the project as the final
                        quality of the game was not at the level we as a team wanted to produce.
                        Given the circumstances we ended up creating a functioning prototype of
                        our game idea.
                    </p>
                </div>
                <div className='media'>
                    <img src={Picture4} alt="Profile" width="480" height="270" />
                    <img src={Picture5} alt="Profile" width="480" height="270" />

                </div>
            </div>
            <br></br>
        </div>

    );

};

export default TankGame;