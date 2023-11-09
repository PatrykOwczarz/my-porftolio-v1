import React from 'react'
import '../styles/ProjectDetails.css'
import Button from '@material-ui/core/Button';
import Picture1 from '../assets/images/realm-warp.jpg'
import Picture2 from '../assets/images/realm-warp-level-design.jpg'
import Picture3 from '../assets/images/realm-warp-gravity-flowchart.jpg'
import Picture4 from '../assets/images/realm-warp-ragdoll.jpg'
import Picture5 from '../assets/images/realm-warp-ai.jpg'
import Picture6 from '../assets/images/realm-warp-navmesh.jpg'
import GithubIcon from '../assets/images/Github.png'

function RealmWarp() {

    return (

        <div className='main'>
            <h1 className='title'>Realm Warp</h1>

            <hr></hr>
            {/* Intro Section */}
            <div className='section'>
                <div className='text'>
                    <h1>Introduction</h1>
                    <h2>Summary:</h2>
                    <p>
                        C# project using Unity. Inspired by Half-Life 2 and Control,
                        Realm Warp is a physics manipulation game focused on telekinesis,
                        levitation and force push mechanics to defeat enemies and navigate the
                        game world. It also features a "dark realm" in which the player becomes
                        stronger and gains access to more powers.
                    </p>
                    <div className='lists'>
                        <div>
                            <h3>Core functionality:</h3>
                            <ul>
                                <li>
                                    Telekinetic Gravity Manipulation system
                                </li>
                                <li>
                                    Force Push
                                </li>
                                <li>
                                    Ragdolls
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
                        This was a solo project for my individual project module in my final
                        year of university. The title for my dissertation and the premise for
                        this project was: "Creating a 3D Physics Based Action Game in Unity".
                        I used various video tutorials on YouTube over the course of the project
                        to gain knowledge on how to implement the systems.
                    </p>
                </div>
                <div className='media'>

                    <iframe width="480" height="270"
                        src="https://www.youtube.com/embed/KxAylqFRk6Q?si=jUiVxm05Wby9-Sst"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="autoplay; encrypted-media;"
                        allowFullScreen>
                    </iframe>

                    <div className='button'>
                        <Button
                            variant="contained"
                            color="default"
                            href="https://github.com/PatrykOwczarz/Realm-Warp"
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
                        This was a passion project focused on learning how to create systems
                        that manipulate gravity and simulate supernatural powers.
                    </p>


                    <h2>Initial Vision:</h2>
                    <p>
                        The initial vision for the project was to create a game in which the player
                        controlled a character with supernatural abilities capable of picking up objects
                        and throwing them in a desired direction. Other powers would include
                        force push and levitation which would only be available if the player
                        entered a "dark realm" through pressing a key for a limited time.
                    </p>

                    <h2>Initial Design:</h2>
                    <p>
                        The initial design was slightly different than the final implementation.
                        The plan was to implement the dark realm as a tool for the player to switch
                        into on demand and have a limited amount of total time per level to be in
                        that realm. Due to time constraints linked to Covid, the implementation
                        had to be simplified to a power-up orb that would enable the use of
                        force push and levitation for a specific time.
                    </p>

                    <h2>Preliminary Planning:</h2>
                    <p>
                        The planning phase involved extensive research on existing systems
                        present in other games. The main inspiration was the game Control by
                        Remedy Entertainment. I found that the gameplay features present in the
                        game were aligned with my vision for my game. The main protagonist had
                        access to telekinetic powers which followed a 3 part effect. The object
                        would animate and float into the air slightly, then fly towards the player
                        and float above the right hand of the character. The player could then
                        launch the object at the crosshair location. This was the base idea
                        upon which I built my telekinetic system.
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
                    <h2>Telekinetic gravity manipulation system:</h2>
                    <ul>
                        <li>
                            An implementation in 2 parts - A raycast system and the main
                            telekinesis controller.
                        </li>
                        <li>
                            First a raycast would be shot from the hand of the player character
                            to the crosshair position. If the object would be a valid one with
                            the tag "Telekinesis", then this object would be manipulated using
                            the telekinesis controller.
                        </li>
                        <li>
                            The telekinesis controller system uses a finite state machine with 4 states:
                            WAITING, LIFT, PULL and THROW. The system starts out in the WAITING
                            state until the raycast system returns a valid object.
                        </li>
                        <li>
                            The system then transitions to the LIFT state which lifts the object 2 units
                            into the air and then transfers control to the PULL state which pulls the
                            object towards the players hand.
                        </li>
                        <li>
                            The object would then levitate by the players hand awaiting player input.
                            When the player presses the left mouse button the state transitions to
                            THROW and the object would be propelled with a force based on the mass of
                            the object being carried in the direction of the crosshair.
                        </li>
                        <li>
                            Finally the state returns to WAITING for another object to be thrown.
                        </li>
                    </ul>

                    <p>Link to code on Github: <a href="https://github.com/PatrykOwczarz/Realm-Warp/blob/main/Realm%20Warp/Assets/Scripts/TelekinesisController.cs">TelekinesisController.cs</a></p>


                    <h2>Force Push:</h2>
                    <ul>
                        <li>
                            A GameObject with a box collider was placed in front of the player.
                        </li>
                        <li>
                            A script called ForcePush.cs was implemented which would activate and deactivate
                            the collider of the aforementioned GameObject.
                        </li>
                        <li>
                            To force push, the player would first have to pick up a dark realm orb
                            and then press the Q key.
                        </li>
                        <li>
                            The force push was simulated by activating the box collider which would apply a
                            force to any objects caught in the box collider in a direction away from the
                            player location. The collider would then deactivate unless Q is pressed again.
                        </li>

                    </ul>

                    <p>Link to code on Github: <a href="https://github.com/PatrykOwczarz/Realm-Warp/blob/main/Realm%20Warp/Assets/Scripts/ForcePush.cs">ForcePush.cs</a></p>

                    <h2>Ragdolls:</h2>
                    <ul>
                        <li>
                            Used Unity's Ragdoll builder. Input each joint of the player model into
                            the builder to create rigidbodies at each limb. Each rigidbody acts
                            independently based on gravity. Unity would assign each limb/body
                            part with a mass to simulate ragdoll behaviour.
                        </li>
                        <li>
                            I wrote a script that would deactivate the animation manager
                            and enable the rigidbodies of each limb, causing the model to
                            enter ragdoll mode. Ragdoll mode would only be used when the enemy
                            was defeated.
                        </li>

                    </ul>

                    <p>Link to code on Github: <a href="https://github.com/PatrykOwczarz/Realm-Warp/blob/main/Realm%20Warp/Assets/Scripts/Ragdoll.cs">Ragdoll.cs</a></p>

                    <h2>Technical issues along the way:</h2>

                    <ul>
                        <li>
                            Problem:
                            <ul>
                                <li>
                                    Initial implementation of the PULL functionality did not work as
                                    intended. The object would fly towards a specific location relative
                                    to the player character position. That position was a single coordinate
                                    in the game world. This meant that unless the object exactly flew into
                                    that spot, it would begin orbiting around the player to try and reach
                                    that specific spot.
                                </li>
                            </ul>
                        </li>

                        <li>
                            Solution:
                            <ul>
                                <li>
                                    Wrote a coroutine which would update the position simultaneously
                                    with other actions in the game. I also limited the max velocity
                                    of the object to make it track the location more easily.
                                </li>
                            </ul>
                        </li>

                        <li>
                            Problem:
                            <ul>
                                <li>
                                    The ragdoll does not react naturally when hit by the object
                                    being projected from the telekinesis system. Can be seen in
                                    the YouTube demo. The enemy is hit and flies in the opposite
                                    direction to the cube being thrown. Not sure what the root cause
                                    is but I imagine it is to do with the way the collision applies
                                    the force to the ragdolls individual limbs. The sword collision
                                    also has something to do with this as it absorbs the impact of the
                                    cube without affecting the overall movement of the ragdoll.
                                </li>
                            </ul>
                        </li>

                        <li>
                            Solution:
                            <ul>
                                <li>
                                    No solution, expanded upon in Areas of Improvement section.
                                </li>
                            </ul>
                        </li>

                    </ul>

                </div>
                <div className='media'>
                    <img src={Picture3} alt="Profile" width="400" height="500" />
                    <img src={Picture4} alt="Profile" width="480" height="400" />

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
                            There are limited amounts of objects that can be picked up.
                            This was due to several bugs encountered during development
                            so the current implementation was a compromise to finish the
                            main functionality on time for my deadline.
                        </li>
                        <li>
                            The enemy AI was not very complex, following a simple state
                            machine implementation which just followed the player if they
                            entered their aggro radius.
                        </li>
                        <li>
                            Some bugs with the rag doll collision caused the enemy
                            to move in the opposite direction to the intended direction.
                            This would be a priority as I believe a fix can be made by tweaking
                            the behaviour after the enemy is defeated. Disabling collision for
                            the sword can also help in properly transfering momentum to the ragdoll.
                        </li>
                        <li>
                            Level design could do with some work. Work on expanding and
                            improving the "adventure" level to make it more interesting.
                            An improvment would be to incentivise use of the levitation and
                            telekinesis to solve puzzles or require it for traversal.
                        </li>
                        <li>
                            Adding sound would enhance the experience a lot. After recently playing
                            Control, I realised that what really makes the game feel special is the "whooshing"
                            sound that is played every time you pick up an object. Adding some sound
                            for force push and lifting and throwing objects would really amplify the
                            experience.
                        </li>
                    </ul>

                    <h2>Evaluation of tools used:</h2>
                    <p>
                        I think Unity was a good choice for this project as my focus was on
                        implementing the system and not on visual fidelity which Unreal engine
                        has an advantage in. I have used some "preview" packages which were not
                        officially implemented as part of the Unity engine package which could have
                        cause some bugs in implementation as the tools have not been fully tested.
                        The preview package aided in creating the aim animation using IK rigging.
                    </p>

                    <h2>What I would have done differently:</h2>
                    <p>
                        The only thing I would do differently would be to implement the dark realm
                        in a different way. I would implement it as a "cooldown ability" commonly
                        implemented in MMORPGs. The player would press the button to enter the dark
                        realm for 10-15 secs and that ability would go on a 1 min cooldown before it
                        could be used again. This would give the player more freedom and choice when
                        they could use the dark realm powers rather than tie the powers to a powerup
                        in a specific location in the game level.
                    </p>

                    <h2>Final takeaways moving forward:</h2>
                    <p>
                        I am happy how the project turned out. I will come back to this project
                        in the future to fix some of the bugs with the ragdoll physics and rework
                        the dark realm as mentioned in the above section. I have learned a lot
                        about animation-based gameplay systems and how to incorporate ragdoll physics
                        into the game. Working on the telekinesis system made me appreciate the system
                        present in Control. The system is incredibly polished and most of the environment
                        can be broken apart and manipulated in some way.
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

export default RealmWarp;