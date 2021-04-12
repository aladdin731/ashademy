
import React from 'react';


const Footer = () => {
    return(
        <div className="footer">
            <div className="icons-container-footer">
                <div className="footer-icon">
                    <a href="https://github.com/aladdin731/ashademy" target="_blank">
                        <img className="icon" src={window.githubIcon} alt="" />
                    </a>
                </div>
                <div className="footer-icon">
                    <a href="https://www.linkedin.com/feed/" target="_blank">
                        <img className="icon" src={window.linkedinLogo} alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;