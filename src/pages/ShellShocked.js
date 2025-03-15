import React from 'react'
import '../styles/ProjectDetails.css'
import Button from '@material-ui/core/Button';
import Title from '../assets/images/shellshocked.png'
import Picture1 from '../assets/images/shellshocked-art.jpg'
import Picture2 from '../assets/images/shellshocked-menu.png'
import Picture3 from '../assets/images/shellshocked-enemy-stats.png'
import Picture4 from '../assets/images/shellshocked-movement.png'
import Picture5 from '../assets/images/shellshocked-enemy-spawner.png'
import Picture6 from '../assets/images/shellshocked-cluster-bubble.png'
import Picture7 from '../assets/images/shellshocked-spawning-bubbles.png'
import Picture8 from '../assets/images/shellshocked-game.png'
import Picture9 from '../assets/images/shellshocked-upgrades.png'
import GithubIcon from '../assets/images/Github.png'

function ShellShocked() {

    return (

        <div className='main'>
            <h1 className='title'><img src={Title} alt="Title" width="480" height="200" /></h1>

            <hr></hr>
            {/* Intro Section */}
            <div className='section'>
                <div className='text'>
                    <h1>Introduction</h1>
                    <h2>Summary:</h2>
                    <p>
                        C# project in Unity.
                        Created for The Global Game Jam 2025. The theme of this game jam was
                        bubbles. The game was inspired by the wave-based "Vampire Survivors"
                        genre. Created by a team of 7 people. I was one of two programmers on
                        the project.

                    </p>
                    <div className='lists'>
                        <div>
                            <h3>Core functionality:</h3>
                            <ul>
                                <li>
                                    Wave-based survival mechanics
                                </li>
                                <li>
                                    Player power system progressed through XP by defeating enemies
                                </li>
                                <li>
                                    Over the top visuals and VFX
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
                                    FMOD
                                </li>
                                <li>
                                    Git/Github
                                </li>
                            </ul>
                        </div>
                    </div>

                    <h2>My Contribution:</h2>
                    <p>
                        As one of two programmers we divided the workload between ourselves.
                        I was in charge of working on enemy AI and the corresponding spawning logic.
                        The enemy AI is fairly simple due to this being a 2 day game jam. I implemented
                        a very expandable and easy to customise enemy system utilizing Scriptable Objects in Unity.
                        I created a blueprint for enemies and what each enemy needed and it was really simple to
                        plug in the necessary data and assets to then spawn the enemies via the spawner. After being
                        done with the enemies I helped with implementing the main menu UI and the volumes sliders
                        in the settings. I also worked on the cluster bubbles upgrade and parts of making the map.
                    </p>
                </div>
                <div className='media'>

                    <iframe width="480" height="270"
                        src="https://www.youtube.com/embed/GWNC5nwkbhc?si=u0wxztj9n53rXgnN"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="autoplay; encrypted-media;"
                        allowFullScreen>
                    </iframe>

                    <div className='button'>
                        <Button
                            variant="contained"
                            color="default"
                            href="https://scoodi.itch.io/shellshocked"
                        >
                            Play the Game

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
                        This game jam was a follow-up with the same people I worked on Bekka the Bokka with. It was great to
                        catch up with them again. We had a lot of fun working together on the first project so we
                        teamed up again to work on this project. This time around it a 2 day game jam as opposed to the
                        prior 4 day game jam which was much more challenging from a time-management and scope perspective.
                        We took our learnings from the previous team project and set out to create this game.
                    </p>


                    <h2>Initial Vision:</h2>
                    <p>
                        The theme was "Bubbles". At first we were stumped on what to make out of this theme. We first
                        started experimenting with the idea of playing as a janitor and making a puzzle game in which
                        the player had to navigate a dirty room and had a limited amount of "cleaning bubbles" to
                        navigate. Not everyone was keen on that idea so we kept on brainstorming. Louis (the other
                        programmer) stumbled upon a mantis shrimp which created cavitation bubbles with its punch.
                        We loved that idea and set out to make an action game with "Keith the Mantis Shrimp".
                    </p>

                    <h2>Initial Design:</h2>
                    <p>
                        In the previous game jam we played with the idea of making a "Vampire Survivors" like game.
                        It didn't fit the previous theme but it worked for this one so we started to design the gameplay
                        loop. We thought the idea of making a over-the-top humour inspired by anime. We set out to
                        create a loop where with each defeated crustacean, Keith gained in power until he would
                        unleash huge world-ending punches.
                    </p>

                    <h2>Preliminary Planning:</h2>
                    <p>
                        We setup a Miro board to generate ideas for the project and to have a place for the artists to create a
                        mood board for the style of the game. We brainstormed various options for the type of characters and
                        settled on making crustacean for the characters in the game. We also created a Trello board to add tasks
                        and keep track of who is working on what at a given time. We used Discord as the main medium of communication
                        during the project.
                    </p>
                </div>
                <div className='media'>
                    <img src={Picture1} alt="Profile" width="300" height="300" />
                    <img src={Picture2} alt="Profile" width="455" height="245" />


                </div>
            </div>

            <hr></hr>
            {/* Noteable Achievements and Learnings Section */}
            <div className='section'>
                <div className='text'>
                    <h1>Notable Achievements and Learnings</h1>
                    <h2>Enemy Scriptable Object and AI</h2>
                    <ul>
                        <li>
                            The enemies were made using Scriptable Objects which are data containers.
                            You can use them to make instances of specific enemy types with specific
                            data.
                        </li>
                        <li>
                            The enemy AI is very simple. The enemies move towards the player and
                            when they collide, they deal damage to the player. We have 3 different enemy
                            types which vary in size, health, damage, and movement speed.
                        </li>

                    </ul>

                    <h2>Enemy Spawner</h2>
                    <ul>
                        <li>
                            The enemy spawner was an attempt at creating a Wave-based spawner similar
                            to that seen in other games in the genre. My twist on it was adding a difficulty
                            rating to each enemy and using that to control how many enemies could spawn.
                            the standard enemy had a rating of 1, the fast enemy had a rating of 2, and the
                            strong enemy had a rating of 3.
                        </li>
                        <li>
                            Per wave, the maximum difficulty threshhold would increase based on the wave
                            count. Round 1 had a rating of 5 and it increased by 5 every wave. This meant
                            that wave 1 could have any combination of the 3 enemies as long as they totaled
                            to a sum of 5. This could be a fast and strong enemy, a strong and 2 weak,
                            5 weak enemies etc.
                        </li>
                        <li>
                            The spawning location was based on predefined waypoints which were attached
                            to the player. This simulated the enemies spawning just outside the screen
                            view of the player to replicate the feel of spawning seen in Vampire Survivors.
                            This created a diverse yet somewhat unbalanced experience because sometimes in
                            later round the player would be swarmed by stong enemies without the power
                            to defeat them efficiently yet. I will talk more about this in the later section.
                        </li>
                        <li>
                            Overall I was pleased with this implementation, despite it being a bit rough
                            around the edges. There was a lot of room for improvement and optimisation which
                            is exciting.
                        </li>
                    </ul>

                    <h2>Cluster Bubbles</h2>
                    <ul>
                        <li>
                            I helped making one of the powerups which was the cluster bubble attack.
                            when unlocked, each punch would send cluster bubbles in random directions
                            from the cavitation bubble of the punch. This was aimed to help clear small
                            hordes of enemies later in the game.
                        </li>
                        <li>
                            The damage scaling of each bubble had to be less than the punch itself.
                            Each punch ended up shooting 3 bubbles in a random direction and the
                            damage was half a normal punch. This ended up adding a considerable
                            amount of extra damage and make playing the game in the later stages
                            more fun.
                        </li>

                    </ul>

                    <h2>UI work</h2>
                    <ul>
                        <li>
                            I aided in the creation of the main menu and the volume sliders.
                            I worked with George who was our composer on the team. We used FMOD for
                            this project so it was exciting for me to learn how to implement and
                            use it in this project.
                        </li>
                        <li>
                            The UI was fairly simple but learning how to control audio channels in
                            FMOD using sliders in Unity was a fantastic learning opportunity for me.
                        </li>

                    </ul>


                </div>

                <div className='mediaCode'>
                    <img src={Picture3} alt="Profile" width="392" height="252" />
                    <img src={Picture4} alt="Profile" width="490" height="350" />
                    <img src={Picture5} alt="Profile" width="440" height="266" />
                    <img src={Picture6} alt="Profile" width="539" height="189" />
                    <img src={Picture7} alt="Profile" width="406" height="70" />

                </div>
            </div>

            <hr></hr>
            {/* Reflection on Project Outcome Section*/}
            <div className='section'>
                <div className='text'>
                    <h1>Reflection on Project Outcome</h1>
                    <h2>Areas of Improvement:</h2>

                    <p>
                        This was a 2 day Game Jam and so there were a few things we had to cut
                        and a few things both me and Louis (the main programmer/designer) wish
                        we would've done differently.
                    </p>

                    <ul>
                        <li>
                            The enemy spawner was very unoptimised, it spanwed all the enemies at
                            the same time which caused some lag on slower machines when the number
                            of enemies to spawn ramped up. I knew this was the case but with the 2
                            day time limit I had to cut some corners to ensure the game was playable.
                        </li>
                        <li>
                            The actual game UI was very barebones. The score display was very basic,
                            the health bar was not pinned to the character position instead just placed
                            in the middle of the screen to save some time. This looks very bad if the
                            player moves to any of the level bounds.
                        </li>
                        <li>
                            The control were a bit annoying to get right and they could use a bit of work.
                            Also the clipping on terrain and enemy collision could use some precise
                            tweaking.
                        </li>
                        <li>
                            A weird bug with FMOD which did not load the initial sound values
                            when the game was booted up in the browser. To fix you have to start the game
                            and exit back to main menu then the sound works. Did not have time to fix this
                            bug.
                        </li>
                    </ul>

                    <h2>Evaluation of tools used:</h2>
                    <p>
                        Unity was a great engine to quickly prototype and release a game for this
                        game jam. Most of the team was also alreay somewhat confident with Unity
                        so this ensured that we were able to rapidly cooperate and implement all
                        the gameplay mechanics, UI and Sound. Github was also an effective,
                        albeit a bit fidgetty version control system for this game jam. FMOD was fantastic
                        and made the audio workflow much more efficient after we implemented the system
                        correctly.
                    </p>

                    <h2>What I would have done differently:</h2>
                    <p>
                        I would put more emphasis on efficient implementations now that I know
                        what I am doing. My approach with these game jams is to "make it work, no
                        matter the cost" which sometimes means the game runs much slower. That is
                        something that I do only because of the really tight 48 hour deadline.
                    </p>

                    <h2>Final takeaways moving forward:</h2>
                    <p>
                        This was a fantastic learning opportunity and I had a great time working with the team.
                        Huge thanks to the team: Jasmine, Louis, Paige, Dylan, George Walker and last but certainly
                        not least, George Pack.
                    </p>
                </div>
                <div className='media'>
                    <img src={Picture8} alt="Profile" width="500" height="285" />
                    <img src={Picture9} alt="Profile" width="500" height="285" />

                </div>
            </div>
            <br></br>
        </div>

    );

};

export default ShellShocked;