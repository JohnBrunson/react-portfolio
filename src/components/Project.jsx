//import React from 'react';

const Project = ({ title, image, deployedLink, repoLink }) => {
    return (
        <div className="container">
            <div className="row pt-5">
                <div className="container col-md-5 body-main pt-5">
                    <div className="project">
                        <h3 className="lora-header">{title}</h3>
                        <img className="projects-screenshot"src={image} alt={`${title} screenshot`} />
                        <div className="project-links">
                            <a className='raleway-nav' href={deployedLink} target="_blank" rel="noopener noreferrer">View Deployed App</a>
                            <br />
                            <a className='raleway-nav' href={repoLink} target="_blank" rel="noopener noreferrer">View GitHub Repo</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;