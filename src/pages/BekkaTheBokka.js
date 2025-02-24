import React from 'react'
import '../styles/ProjectDetails.css'
import Button from '@material-ui/core/Button';
import Title from '../assets/images/bekka-the-bokka-title.png'
import Picture1 from '../assets/images/bekka-the-bokka.png'
import Picture2 from '../assets/images/bekka-the-bokka-inventory.png'
import Picture3 from '../assets/images/bekka-the-bokka-sound-system.png'
import Picture4 from '../assets/images/bekka-the-bokka-one-shot-audio.png'
import Picture5 from '../assets/images/bekka-the-bokka-building.png'
import Picture6 from '../assets/images/bekka-the-bokka-climbing.png'
import Picture7 from '../assets/images/bekka-the-bokka-main-menu.png'
import GithubIcon from '../assets/images/Github.png'

function BekkaTheBokka() {

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
                        C# project in Unity. Created for the GMTK Game Jam 2024. The theme was "Built to scale".
                        The game fit the theme by building a path for you to scale up it in a platformer style game.
                        Created by a team of 9 people. My role on the team was Programmer.
                        <br></br>
                        <br></br>
                        This project was created in a 4 days and placed 693 out of 7614 entries in the Game Jam!
                    </p>
                    <div className='lists'>
                        <div>
                            <h3>Core functionality:</h3>
                            <ul>
                                <li>
                                    Building path from an inventory of available blocks
                                </li>
                                <li>
                                    2D platformer movement and climbing systems
                                </li>
                                <li>
                                    Layered music per level and cutscene systems
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
                        As part of the 9 person team. I was the main programmer alongside the tech lead on the team.
                        I worked on creating the Inventory system for the available building blocks including the system for placing them
                        into the world and the Sound system used in the game.
                        Through the use of the DOTween plugin I was able to fade in and out tracks between levels.
                        Other tasks included various bug fixes and asset implementation as well as some placeholder UI implementation.
                    </p>
                </div>
                <div className='media'>

                    <iframe width="480" height="270"
                        src="https://www.youtube.com/embed/z0CI9ZrzUSk?si=zddiCToadZ53WOI_"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="autoplay; encrypted-media;"
                        allowFullScreen>
                    </iframe>

                    <div className='button'>
                        <Button
                            variant="contained"
                            color="default"
                            href="https://scoodi.itch.io/bekka-the-bokka"
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
                        I was approached by friends who I met at Develop:Brighton 2024. I expressed my interest
                        in game jams when we met in person. When Jasmine has reached out to me about the team that she was forming,
                        I eagerly accepted and got to know everyone on the team. We worked incredibly effectively during the
                        4 day Game Jam and I have seriously improved my development skills but also teamwork, communication and
                        especially time management as this was my first time doing a 4 day game jam.
                    </p>


                    <h2>Initial Vision:</h2>
                    <p>
                        The theme was "Built to Scale". Prior to starting the game jam we had ambitions to make a
                        2D isometric action game inspired by Vampire Survivors. This quickly changed after the theme was
                        revealed and we moved to the idea of building something to climb (scale) up it. The idea of deliveries
                        came up and we quickly started doing research on the main idea behind the game. One of us mentioned Death Stranding
                        and we found out that it was based on a real Japanese occupation of the "Bokka". A Bokka was a
                        courier who would carry supplies to remote mountain guesthouses inaccessible to vehicles. That is how we
                        settled on making Rebecca (Bekka) the Bokka who had a magical pen which allows her to summon terrain to
                        climb the rough mountain landscape to deliver goods to the residents.
                    </p>

                    <h2>Initial Design:</h2>
                    <p>
                        The initial design was a traditional platformer which would require the player to jump on the placed blocks.
                        We iterated on the idea and decided to make a climbing mechanic instead which would be different from
                        other platforming games. Thus turning the game into more of a puzzle game with platforming elements as
                        we created levels with various difficulties based on the "inventory" of available pieces on set difficulty.
                    </p>

                    <h2>Preliminary Planning:</h2>
                    <p>
                        We setup a Miro board to generate ideas for the project and to have a place for the artists to create a
                        mood board for the style of the game. We brainstormed various options for the type of characters and
                        settled on making animals for the characters in the game. We also created a Trello board to add tasks
                        and keep track of who is working on what at a given time. We used Discord as the main medium of communication
                        during the project.
                    </p>
                </div>
                <div className='media'>
                    <img src={Picture1} alt="Profile" width="480" height="200" />
                    <img src={Picture7} alt="Profile" width="508" height="286" />


                </div>
            </div>

            <hr></hr>
            {/* Noteable Achievements and Learnings Section */}
            <div className='section'>
                <div className='text'>
                    <h1>Notable Achievements and Learnings</h1>
                    <h2>Scalable Inventory System</h2>
                    <ul>
                        <li>
                            The Inventory was based on a Scriptable Object which was
                            created for each level of the game. Each level had a specific list
                            of blocks you can place.
                        </li>
                        <li>
                            The system expanded the inventory window based on how many blocks
                            were used for that level and difficulty. It created a button for
                            each one and loaded the prefab information for each block to be
                            created at the cursor location when pressed. Each Scriptable Object
                            also had the icon for the corresponding block.
                        </li>
                        <li>
                            The system was super expandable and in the end the level designer
                            was able to easily create new levels without having to tamper with
                            any of the inventory code.
                        </li>


                    </ul>

                    <p>Link to code on Github: <a href="https://github.com/Scoodi/BuiltToScale/blob/main/Assets/Scripts/ItemStorage/InventoryUI.cs">InventoryUI.cs</a></p>

                    <h2>Fading Music system</h2>
                    <ul>
                        <li>
                            George (Musician on the team) wanted to create a sound system
                            that would blend between different tracks as the player progressed
                            the game. Our level system was split into Stages and Levels in the format
                            Stage-Level (1-1, 1-2 etc). George created the same music track but
                            with added levels of complexity which would evolve per level.
                        </li>
                        <li>
                            To facilitate this, I created a 2 source music system which would load
                            different tracks at the same time in the playback. To do this I utilized
                            the DOTween plugin to create a Fade effect from one track to the other
                            by decreasing the audio of the currently playing sound track, and
                            increasing the audio of the new track at the same playback time to the
                            current music volume set in the settings.
                        </li>
                        <li>
                            This created an awesome system which created the illusion that
                            the track was becoming more complex as Bekka traveled closer to
                            her destination, creating an element of excitement as she was nearing
                            one of the characters.
                        </li>
                        <li>
                            George and I were really pleased with the outcome and I thoroughly
                            enjoyed creating his vision in code form.
                        </li>
                    </ul>

                    <p>Link to code on Github: <a href="https://github.com/Scoodi/BuiltToScale/blob/main/Assets/Scripts/SoundManager.cs">SoundManager.cs</a></p>

                    <h2>One-Shot sound system</h2>
                    <ul>
                        <li>
                            Efficient system to play one-shot sounds. Each time such as footsteps,
                            UI clicks or damage events would happen, the function would instantiate
                            a new AudioSource which would load the desired clip and play it.
                        </li>
                        <li>
                            The function keeps track of the length of the sound clip and
                            automatically clears the memory and destroys the AudioSource and
                            its reference in memory after the sound is finished.
                        </li>
                        <li>
                            This essentially means we were able to play 32 separate sounds at one
                            time and not need to keep a reference table of any kind to track them
                            as the memory was automatically cleared after the sound was done playing.
                        </li>

                    </ul>

                    <p>Link to code on Github: <a href="https://github.com/Scoodi/BuiltToScale/blob/main/Assets/Scripts/SoundManager.cs">SoundManager.cs</a></p>


                </div>

                <div className='mediaCode'>
                    <img src={Picture2} alt="Profile" width="528" height="173" />
                    <img src={Picture3} alt="Profile" width="410" height="260" />
                    <img src={Picture4} alt="Profile" width="402" height="128" />

                </div>
            </div>

            <hr></hr>
            {/* Reflection on Project Outcome Section*/}
            <div className='section'>
                <div className='text'>
                    <h1>Reflection on Project Outcome</h1>
                    <h2>Areas of Improvement:</h2>

                    <p>
                        This was a 4 day Game Jam and so there were a few things we had to cut
                        and a few things both me and Louis (the main programmer/designer) wish
                        we would've done differently.
                    </p>

                    <ul>
                        <li>
                            Main thing was to leave more time at the end of the jam for
                            QA and bug fixing. We ended up developing right up to the last
                            hour which left us with virtually no time to fix any major bugs
                            and stressed us out due to some last minute hick-ups. This meant
                            that the game launched with some major oversights (which we fixed
                            after the game jam as a team)
                        </li>
                        <li>
                            The control scheme was not very intuitive. This was the main feedback
                            we got from the people that played and rated our game during the voting
                            phase of the Jam. We have since gone back and altered the controls as
                            per user feedback.
                        </li>
                        <li>
                            We created a system which tracked movement of blocks in order
                            to make sure every block is stationary before it is settled.
                            This ensured that players would not be able to do some crazy
                            ways to beat levels by spawning blocks and freezing them in the air.
                            This system unfortunately was very rushed and it created a bug which
                            required to restart the game to fix as it prevented players from
                            settling blocks. This has since been fixed.
                        </li>
                        <li>
                            We had to rush the cutscenes so the final cutscene was not what we
                            fully envisioned. This goes back to the first point of better planning
                            and cutting out bloat features sooner to make sure the main features
                            were completed and tested way in advance ahead of submission.
                        </li>
                    </ul>

                    <h2>Evaluation of tools used:</h2>
                    <p>
                        Unity was a great engine to quickly prototype and release a game for this
                        game jam. Most of the team was also alreay somewhat confident with Unity
                        so this ensured that we were able to rapidly cooperate and implement all
                        the gameplay mechanics, UI and Sound. The DOTween plugin was an absolutely
                        amazing asset which allowed us to make animations for UI elements and fading
                        for the music system with much less hassle. Github was also an effective,
                        albeit a bit fidgetty version control system for this game jam. We have ran
                        into conflicts which cost us some time during development as there is no
                        file lock in place which caused some confusion in communication at times.
                    </p>

                    <h2>What I would have done differently:</h2>
                    <p>
                        I think I would have planned more carefully to ensure that I had sufficient time
                        to test all the features which I have created fully before we submitted our
                        project. Other than that I was incredibly happy with the team and it reflected
                        as we got a top 9% placement in the game jam.
                    </p>

                    <h2>Final takeaways moving forward:</h2>
                    <p>
                        This was a fantastic learning opportunity and I had a great time working with the team.
                        Huge thanks to the team: Jasmine, Louis, Lorin, Marion, Paige, George, Kyle and last but
                        certainly not least, Sophie.
                    </p>
                </div>
                <div className='media'>
                    <img src={Picture5} alt="Profile" width="508" height="286" />
                    <img src={Picture6} alt="Profile" width="508" height="286" />

                </div>
            </div>
            <br></br>
        </div>

    );

};

export default BekkaTheBokka;