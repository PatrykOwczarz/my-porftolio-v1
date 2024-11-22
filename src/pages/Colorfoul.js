import React from 'react'
import '../styles/ProjectDetails.css'
import Button from '@material-ui/core/Button';
import Title from '../assets/images/colorfoul.png'
import Picture1 from '../assets/images/tank-game.png'
import Picture2 from '../assets/images/tank-game-2.png'
import Picture3 from '../assets/images/tank-game-healthbar.png'
import Picture4 from '../assets/images/tank-game-defeat.png'
import Picture5 from '../assets/images/tank-game-menu.png'

function Colorfoul() {

    return (

        <div className='main'>
            <h1 className='title'><img src={Title} alt="Profile" width="500" height="125" /></h1>

            <hr></hr>
            {/* Intro Section */}
            <div className='section'>
                <div className='text'>
                    <h1>Introduction</h1>
                    <h2>Summary:</h2>
                    <p>
                        C# project in Unity. Created for the Pirate Software Game Jam 14. The theme was "Shadow Alchemy".
                        Inspired by Vampire Survivors the player is an alchemist who combines materials to summon shadows.
                        Created by team of 4 people. My role was Programmer.
                    </p>
                    <div className='lists'>
                        <div>
                            <h3>Core functionality:</h3>
                            <ul>
                                <li>
                                    Combining System
                                </li>
                                <li>
                                    Enemy AI and Enemy Spawner
                                </li>
                                <li>
                                    Companion AI and Leveling
                                </li>
                                <li>
                                    2D isometric character controller
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
                        As part of the 4 person team I was the second programmer on the team.
                        We split the workload evenly and worked on various parts of the project.
                        I worked on creating the Enemy AI and Enemy Spawner logic primarily.
                        I also worked on the Enemy healthbar UI and the Main Menu and Pause Menu UI.
                        Other tasks included working on various bug fixes and helping other teammates as required.
                    </p>
                </div>
                <div className='media'>

                    <iframe width="480" height="270"
                        src="https://www.youtube.com/embed/puM_kd8RqZI?si=TAwjtXnvziuisvP2"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="autoplay; encrypted-media;"
                        allowFullScreen>
                    </iframe>

                    <div className='button'>
                        <Button
                            variant="contained"
                            color="default"
                            href="https://marevv.itch.io/colorfoul"
                        >
                            Play the game

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
                        I reached out on the Pirate Software discord to find a group that
                        wanted to work on the Pirate Software Game Jam 14 together. I got approached
                        by another programmer and after brief chat we got on quiet well and started looking for more
                        team members. We found an artist and a composer who were keen to join the team and so
                        our team was formed. This was my first Game Jam which I did on a team with new people
                        who I have never worked with before.
                    </p>


                    <h2>Initial Vision:</h2>
                    <p>
                        After "Shadow Alchemy" was revealed as the theme, we quickly got to brainstorming what the
                        game story and genre should be. At the time of the game mode I was heavily into the "Vampire
                        Survirors" genre of games. I played Halls of Torment and the swarm mode in League of Legends
                        has come out at the time. This prompted me to propose that we make our own Vampire Survivors
                        game. The team was on board with that idea and we concluded the idea for the gameplay.
                        At first the gameplay was supposed to revolve around going around finding resources which we
                        could then use to create weapons, armour and stat upgrades. We eventually reworked it to
                        give the player a choice of 3 resources out of the "alchemists pouch" to create minions through
                        shadow alchemy.
                    </p>

                    <h2>Initial Design:</h2>
                    <p>
                        The initial design was focused on the shadows to be the main protagonists. We brainstormed
                        various enemy factions and types. We thought about monsters inspired by the underdark,
                        "barbies" haha and we eventually settled on rainbow creatures (such as unicorns and fairy like
                        beings). With our game style we wanted to create a direct flip between what people normally perceive
                        as good and evil. The shadows were the protagonists of the story and they were invaded by twisted
                        gore-y rainbow animals and creatures. The inspiration for the name came from our artist mispelling
                        colorful as "colorfoul" during our brainstorming session and we immediately loved that idea.
                        In our game anything that was colourful was foul and evil so it fit the title of the game perfectly.
                    </p>

                    <h2>Preliminary Planning:</h2>
                    <p>
                        We had 3 weeks for this Game Jam which was much longer than usual. This meant that we had to put
                        aside time during our days outside of work to make progress on this game over the course of the 3
                        weeks. We divided tasks on a trello board into "stages of completion" and priority so that
                        we would be all on the same page throughout the development of the game. We assigned one of us
                        as the leader of the project who would make sure the project was running smoothly. We held regular
                        "stand-up" meetings to talk about what we accomplished today, what we would do tomorrow and if
                        there were any blockers that needed to be resolved.
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

export default Colorfoul;