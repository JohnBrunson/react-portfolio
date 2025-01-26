import React, { useEffect } from 'react';
import Project from '../components/Project';

const Portfolio = () => {
    useEffect(() => {
        document.title = "Portfolio - John Brunson's Portfolio";
    }, []);
    const projects = [
        {
            title: 'The Gamers Journal',
            image: '/assets/img/the-gamers-journal-hero.png',
            deployedLink: 'https://johnbrunson.github.io/the-gamers-journal/',
            repoLink: 'https://github.com/JohnBrunson/the-gamers-journal'
        },
        {
            title: 'Readme Generator',
            image: '/assets/img/readme-generator-screenshot.png',
            deployedVideo: 'https://drive.google.com/file/d/1XhMNqVZMb_oSLj968scPwo7V_ON19NlA/view',
            repoLink: 'https://github.com/JohnBrunson/readme-generator'
        },
        {
            title: 'Employee Tracker',
            image: '/assets/img/employee-tracker-screenshot.png',
            deployedVideo: 'https://drive.google.com/file/d/1tMdL-3GTxuD-OfLcpyNOr9YZemC_5_eG/view?usp=sharing',
            repoLink: 'https://github.com/JohnBrunson/employee-tracking'
        },
        {
            title: 'Vehicle Builder',
            image: '/assets/img/vehicle-builder-screenshot.png',
            deployedVideo: 'https://drive.google.com/file/d/141BzHhC2LAO2EFBiyQ60TvW3yOKlPNEw/view?usp=sharing',
            repoLink: 'https://github.com/JohnBrunson/vehicle-builder'
        },
        {
            title: 'Simple HTML Page',
            image: '/assets/img/simple-html-page-screenshot.png',
            deployedLink: 'https://johnbrunson.github.io/mini-project-1/',
            repoLink: 'https://github.com/JohnBrunson/mini-project-1'
        },
        {
            title: 'Python Hangman',
            image: '/assets/img/python-hangman-screenshot.png',
            deployedVideo: 'https://drive.google.com/file/d/1sPb8uwVSD87AeKi8jH7eHi0Elkhq8qVh/view?usp=sharing',
            repoLink: 'https://github.com/JohnBrunson/python-hangman'
        }
        // Add more projects as needed
    ];

    return (
        <div className="container mb-5">
            <div className="row">
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        title={project.title}
                        image={project.image}
                        deployedLink={project.deployedLink}
                        deployedVideo={project.deployedVideo}
                        repoLink={project.repoLink}
                    />
                ))}
            </div>
        </div>
    );
};

export default Portfolio;