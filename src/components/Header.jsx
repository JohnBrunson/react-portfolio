// From the docs: https://docs.fontawesome.com/v5/web/use-with/react
// This is written since I had already written a good deal of the page before and it was easier to carry over the existing code as opposed to rewriting the navigational elements wholesale. It could probably stand a rewrite to be a bit more "React-Like" but this will do for now.
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
// It may be possible to use something like the below here, but for now this is rendering.
// const element = <FontAwesomeIcon icon={faHouse} />

export default function Nav() {
    return (
        <header>
            <nav className="navbar sticky-top navbar-expand border-bottom-custom navbar-custom" data-bs-theme="dark">
                <div className="container-fluid sticky-top">
                    <Link className="navbar-brand" href="index.html">
                        <FontAwesomeIcon icon={faHouse} id="home-icon" />
                    </Link>
                    <button className="navbar-toggler sticky-top" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse-md navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item px-2 raleway-nav">
                                <Link className="nav-link" to="/Portfolio">Portfolio</Link>
                            </li>
                            <li className="nav-item px-2 raleway-nav">
                                <Link className="nav-link" to="/Resume">Resume</Link>
                            </li>
                            <li className="nav-item px-2 raleway-nav">
                                <Link className="nav-link" to="/Contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    )
}