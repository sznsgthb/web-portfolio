import React from 'react';
import './PortfolioPage.css'
import thumbnail1 from '/images/thumbnails/leaves.png';
// import thumbnail2 from '/images/thumbnails/smartbrain.png';
// import thumbnail3 from '/images/thumbnails/extinct.png';
import thumbnail4 from '/images/thumbnails/robots.png';

function PortfolioPage() {

    const projects = [
        {
            id: 1,
            title: 'Autumn Leaves',
            description: 'A short CSS animation of colourful leaves falling down, forming a pile.',
            image: thumbnail1,
            link1: 'https://sznsgthb.github.io/autumn-leaves/',
            link2: 'https://github.com/sznsgthb/autumn-leaves'
        },
        {
            id: 2,
            title: 'Smart Brain',
            description: 'Short description of project two.',
            // image: thumbnail2,
            link1: '',
            link2: ''
        },
        {
            id: 3,
            title: 'Extinct Animals',
            description: 'Short description of project three.',
            // image: thumbnail3,
            link1: '',
            link2: ''
        },
        {
            id: 4,
            title: 'Robo Friends',
            description: 'A simple, scrollable interface with automatically generated robots from an API with a searchbar.',
            image: thumbnail4,
            link1: 'https://sznsgthb.github.io/robofriends/',
            link2: 'https://github.com/sznsgthb/robofriends'
        },
      ];

    return (
        <>
            <h1>Here you find my recent creations</h1>
            <div className="portfolio-wrapper">
            {projects.map((project, index) => (
                <div className="project-section" key={project.id}>
                    <div
                        className={`project-content ${index % 2 === 0 ? 'normal' : 'reversed'}`}
                    >
                        {project.link1 ? (
                        <a href={project.link1} target="_blank" rel="noopener noreferrer">
                            <img
                            src={project.image}
                            alt={project.title}
                            className="project-image"
                            />
                        </a>
                        ) : (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="project-image"
                        />
                        )}
                    <div className="project-description">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                            <div className='project-buttons'>
                                {project.link2 && (
                                    <a
                                    href={project.link2}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="full-view-button"
                                    >
                                    <h3>Source code</h3>
                                    </a>
                                )}
                                                                {project.link1 && (
                                    <a
                                    href={project.link1}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="source-button"
                                    >
                                    <h3>View in full</h3>
                                    </a>
                                )}
                        </div>
                    </div>
                    </div>
                </div>
            ))}
            </div>
    </>
    );
  }

export default PortfolioPage;