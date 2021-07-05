import "./Footer.css";
import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="main-footer">
                <div className="footer-info">
                    <h3>About This Project</h3>
                    <p>A series of mini projects made in <i class="fab fa-html5"></i> <b>HTML5</b>, <i class="fab fa-css3"></i> <b>CSS</b> and <i class="fab fa-js"></i> <b>VanillaJS</b> !</p>
                    <p>This landing page was made using <i class="fab fa-react"></i> <b>React</b>!</p>
                </div>
                <div className="contact">
                    <h3 className="contact-label">Contact Me: </h3>
                    <a href="https://github.com/IAmOZRules" target="_blank" rel="noreferrer"><i class="contact-icon fab fa-github"></i></a>
                    <a href="https://www.linkedin.com/in/iamozrules/" target="_blank" rel="noreferrer"><i class="contact-icon fab fa-linkedin"></i></a>
                    <a href="https://www.kaggle.com/shreyaansnahata" target="_blank" rel="noreferrer"><i class="contact-icon fab fa-kaggle"></i></a>
                </div>
            </footer>
        </div>
    );
}

export default Footer;