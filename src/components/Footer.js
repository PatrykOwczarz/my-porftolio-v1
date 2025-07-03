import React from 'react'
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <a href="https://twitter.com/Demkolai"><XIcon /></a>
                <a href="https://github.com/PatrykOwczarz"><GitHubIcon /></a>
                <a href="https://www.linkedin.com/in/patryk-owczarz/"><LinkedInIcon /></a>
            </div>
            <p> &copy; {new Date().getFullYear()} Patryk Owczarz</p>
        </div>
    )
}

export default Footer;