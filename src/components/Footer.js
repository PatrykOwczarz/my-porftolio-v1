import React from 'react'
import TwitterIcon from "@material-ui/icons/Twitter"
import GithubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import '../styles/Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <a href="https://twitter.com/Demkolai"><TwitterIcon /></a>
                <a href="https://github.com/PatrykOwczarz"><GithubIcon /></a>
                <a href="https://www.linkedin.com/in/patryk-owczarz/"><LinkedInIcon /></a>
            </div>
            <p> &copy; {new Date().getFullYear()} Patryk Owczarz</p>
        </div>
    )
}

export default Footer;