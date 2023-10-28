import React from 'react'
import '../styles/ProjectDetails.css'
import Button from '@material-ui/core/Button';
import Picture1 from '../assets/images/the-dungeon-lvl1.png'
import Picture2 from '../assets/images/the-dungeon-lvl2.png'
import Picture3 from '../assets/images/the-dungeon.png'
import Picture4 from '../assets/images/the-dungeon-victory.png'
import Picture5 from '../assets/images/the-dungeon-skeletons.png'
import Picture6 from '../assets/images/the-dungeon-main-menu.png'
import GithubIcon from '../assets/images/Github.png'

function TheDungeon() {
    return (
        <div className='main'>
            <h1 className='title'>The Dungeon</h1>

            <hr></hr>
            {/* Intro Section */}
            <div className='section'>
                <div className='text'>
                    <h1>Introduction</h1>
                    <h2>Summary:</h2>
                    <p>
                        C# project using Unity. Inspired by original Final Fantasy games
                        and the pokemon games, The Dungeon is a Turn-based RPG with
                        multiple classes set in a dark fantasy dungeon.
                    </p>
                    <div className='lists'>
                        <div>
                            <h3>Core functionality:</h3>
                            <ul>
                                <li>
                                    Turn-based Combat
                                </li>
                                <li>
                                    Level creation
                                </li>
                                <li>
                                    RPG stat system
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
                        Solo project. I worked on all aspects of the project. The assets seen in
                        the game are not my own creation. They were free assets found on the
                        Unity asset store.
                    </p>
                </div>
                <div className='media'>

                    <iframe width="480" height="270"
                        src="https://www.youtube.com/embed/a_SEyTaseDs?si=dpe3WMuey_vrF4TD"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="autoplay; encrypted-media;"
                        allowFullScreen>
                    </iframe>

                    <div className='button'>
                        <Button
                            variant="contained"
                            color="default"
                            href="https://github.com/PatrykOwczarz/The-Dungeon"
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
                        This project has significant importance to me because it was the first
                        project I ever created. I learnt a lot about the importance of
                        scoping out a project before starting as this project ended up
                        being way too ambitious for one person to execute. My work on this
                        project was fueled with passion as RPG's are my favourite genre of
                        games.
                    </p>


                    <h2>Initial Vision:</h2>
                    <p>
                        When I was growing up, the two most memorable games I used to play
                        were Neverwinter Nights and Pokemon Red. This resulted in me developing
                        a love for "open world" RPG's since young. I knew that for my first game
                        I wanted to work on an RPG project. I decided to blend my 2 favourite
                        games from my childhood and create a turn-based RPG set in a dark fantasy
                        setting whilst maintaining core gameplay similar to the early pokemon games.
                        I wanted to create a game focused on exploring the world and entering instanced
                        pokemon style battles when you encounter enemies in the world.
                    </p>

                    <h2>Initial Design:</h2>
                    <p>
                        The initial design focused around designing the stat system and a prototype
                        of the character creation screen. The game intially featured 5 classes classes:
                        Warrior, Mage, Archer, Bard and Rogue but after implementing the system as a
                        single player experience I scrapped the bard class as it was designed to aid
                        ally characters which would not be implemented. The game intially was planned
                        to feature an open world but during implementation I changed the setting to be
                        all in a dungeon, featuring several levels to traverse through.
                    </p>

                    <h2>Preliminary Planning:</h2>
                    <p>
                        Most planning revolved around figuring out and learning how to implement
                        a turn-based combat system as well as how to implement RPG stats and inventory
                        into the game. Also initial planning featured researching how the pokemon
                        combat system worked to take inspiration from the existing system.
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
                    <h2>Turn-Based Combat</h2>
                    <ul>
                        <li>
                            The combat system uses an FSM which has been implemented
                            using a switch statement with 9 cases (states) in this
                            implementation.
                        </li>
                        <li>
                            The combat starts by initialising the player information from
                            the Game Information script and generating an enemey with stats
                            based on enemy type and level.
                        </li>
                        <li>
                            The game then waits for player input to choose an action
                            from a list of using a skill, healing, skipping their turn
                            or fleeing which ends the battle. After the player selects
                            an option, the corresponding action is executed (damage dealt
                            or healing done etc.).
                        </li>
                        <li>
                            The AI then decides what action the enemy will perform from
                            a list of abilities corresponding to the class of the enemy.
                            The decision was made based on a random number generator.
                            Damage is calculated and the state goes back to player choice.
                        </li>
                        <li>
                            After each player or enemy turn there is a check to see if
                            either entity has died. If the player defeats the enemy, they
                            are awarded with XP based on: PlayerLevel * 2 * 100. If the
                            player loses they are awarded XP based on: PlayerLevel * 2 * 15.
                        </li>
                        <li>
                            After this the game ends.
                        </li>
                    </ul>

                    <p>Link to State Machine implementation: <a href='https://github.com/PatrykOwczarz/The-Dungeon/blob/master/RPG%20test/Assets/Scripts/Turn%20Based%20Combat/StateMachine.cs'>StateMachine.cs</a></p>


                    <h2>Battle Calculations</h2>
                    <ul>
                        <li>
                            Algorithm that calculated damage done by the player
                            or enemy based on the respctive stats.
                        </li>
                        <li>
                            The damage is calculated based on the ability damage, any status
                            effects on the target, whether the ability crits or not and the
                            targets armour value.
                        </li>

                    </ul>

                    <p>Link to Battle Calculations script: <a href='https://github.com/PatrykOwczarz/The-Dungeon/blob/master/RPG%20test/Assets/Scripts/Battle%20Calculations/BattleCalculations.cs'>BattleCalculations.cs</a></p>

                    <h2>Technical issues along the way:</h2>
                    <ul>
                        <li>
                            Problem:
                            <ul>
                                <li>
                                    I did not manage to implement an effective save system.
                                    This results in the game loading back to the start of each
                                    level. The progress of each level is reset after each fight
                                    as a result.
                                </li>
                            </ul>
                        </li>

                        <li>
                            Solution:
                            <ul>
                                <li>
                                    I would need to change how the instanced combat scene is
                                    loaded. Current implementation loads a new scene which
                                    does not save the final state of the level before loading.
                                    I would have to implement a system that saves a state of the
                                    level prior to moving to the instanced combat phase.
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
                            UI: This project uses the new Unity UI and the Legacy UI.
                            Recreating and porting the Character creator and BattleUI
                            to the new Unity UI would be a huge improvement.
                        </li>
                        <li>
                            Inventory system: Works but is not utilized with character
                            system fully.
                        </li>
                        <li>
                            Generation of Items: WIP random item generator that would
                            generate items based on animals such as "of the Bear" would
                            be Stength and Stamina, "of the Owl" would be Intellect and
                            Wisdom etc..
                        </li>
                        <li>
                            Save system: Currently the game does not persist after
                            shutdown and going from Free-Roam into combat and back
                            into Free-Roam puts the player back at the start of the level.
                        </li>
                    </ul>

                    <h2>Evaluation of tools used:</h2>
                    <p>
                        At the time I decided to use Unity as most resources online said
                        that it was easier for beginners to get to grips with as C# as it
                        is less punishing as compared to C++ in Unreal. I would say that was
                        mostly true, I managed to transfer my programming knowledge from
                        python and VB.net to C# and the environment and tools provided by
                        Unity made working on the project simple and effective.
                    </p>

                    <h2>What I would have done differently:</h2>
                    <p>
                        I would have spent more time on planning the project more thoroughly.
                        I did not create a GDD before starting the project as I did not know
                        what they were. This resulted in vast changes during implementation
                        which caused confusion and wasted time at some points in the project.
                        I would've also planned the transition from Combat to open world differently
                        to make saving between the two states a lot easier.
                    </p>

                    <h2>Final takeaways moving forward:</h2>
                    <p>
                        I learned a lot about turn-based combat and RPG systems in general.
                        This was also my first experience creating a video game. It was
                        important as I identified my passion for creating gameplay systems and
                        made me appreciate the intricacies of RPG systems in existing games.
                        This project kick started my journey in game development.
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

export default TheDungeon;