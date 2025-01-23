import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

export default function About() {
    return (
        <div className="container">
            <div className="row pt-5">
                <div className="container col-md-4 body-main pt-5">
                    <img className="p-5-md" src="/assets/img/john-brunson-headshot.jpg" alt="A Picture of John Brunson" id="headshot" />
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <button type="button" className="btn btn-outline-primary">Contact Me!</button>
                    </div>
                </div>
                <div className="container col-md-8 body-main pt-5" id="brand-statement">
                    <h1 className="lora-header">Hi! Welcome to my portfolio!</h1>
                    <ul id="social-links">
                        <li className="p-3">
                            <a href="https://github.com/JohnBrunson/">
                                <FontAwesomeIcon icon={faSquareGithub} className="icon fa-2x fa-fw" />Github
                            </a>
                        </li>
                        <li className="p-3">
                            <a href="https://www.linkedin.com/in/john-brunson">
                                <FontAwesomeIcon icon={faLinkedin} className="icon fa-2x fa-fw" />LinkedIn
                            </a>
                        </li>
                        <li className="p-3">
                            <a href="https://www.twitter.com">
                                <FontAwesomeIcon icon={faTwitter} className="icon fa-2x fa-fw" />X (Formerly Twitter)
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