import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin, faBluesky } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

export default function About() {
    useEffect(() => {
        document.title = "About - John Brunson's Portfolio";
    }, []);
    return (
        <div className="container">
            <div className="row pt-5 mb-5">
                <div className="container col-md-4 body-main pt-5">
                    <img className="p-5-md" src="/assets/img/john-brunson-headshot.jpg" alt="A Picture of John Brunson" id="headshot" />
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <Link to="/Contact">
                            <button type="button" className="btn btn-outline-primary">Contact Me!</button>
                        </Link>

                    </div>
                </div>
                <div className="container col-md-8 body-main pt-5" id="brand-statement">
                    <h1 className="lora-header">Hi! Welcome to John Brunson's portfolio!</h1>
                    <ul id="social-links">
                        <li className="p-3">
                            <a href="https://github.com/JohnBrunson/" target="_blank">
                                <FontAwesomeIcon icon={faSquareGithub} className="icon fa-2x fa-fw" />Github
                            </a>
                        </li>
                        <li className="p-3">
                            <a href="https://www.linkedin.com/in/john-brunson" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} className="icon fa-2x fa-fw" />LinkedIn
                            </a>
                        </li>
                        <li className="p-3">
                            <a href="https://bsky.app/profile/sleepyprogrammer.bsky.social" target="_blank">
                                <FontAwesomeIcon icon={faBluesky} className="icon fa-2x fa-fw" />Bluesky
                            </a>
                        </li>
                    </ul>
                    <p className="raleway-body">
                        By day, I'm a User Acceptance Tester. After having considerable experience working one on one with customers, I have a good idea of what they want and what they don't. I have a good idea of how they'll break the software and the sharp edges that need to be filed down.
                    </p>
                    <p className="raleway-body">
                        By night, I'm building things. My tools are technology, imagination, and code. It's the exciting thing about technology. Every day, I get to craft a bit of magic. Need one or both of those services? Contact me! Perhaps I can help!
                    </p>
                </div>
            </div>
        </div>
    );
}