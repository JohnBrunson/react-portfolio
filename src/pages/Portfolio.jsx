//import React from 'react';
import Project from '../components/Project';

const Portfolio = () => {
    const projects = [
        {
            title: 'The Gamers Journal',
            image: '/assets/img/the-gamers-journal-hero.png',
            deployedLink: 'https://johnbrunson.github.io/the-gamers-journal/',
            repoLink: 'https://github.com/JohnBrunson/the-gamers-journal'
        },
        // {
        //     title: 'Project Two',
        //     image: 'link_to_image_2',
        //     deployedLink: 'link_to_deployed_app_2',
        //     repoLink: 'link_to_repo_2'
        // },
        // Add more projects as needed
    ];

        return (
            <div className="portfolio">
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        title={project.title}
                        image={project.image}
                        deployedLink={project.deployedLink}
                        repoLink={project.repoLink}
                    />
                ))}
            </div>
        );
    };

    export default Portfolio;
