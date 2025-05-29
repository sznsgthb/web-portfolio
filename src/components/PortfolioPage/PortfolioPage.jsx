import React from 'react';
import ScrollAnimation from '../../containers/ScrollAnimation';
import './PortfolioPage.css'
import thumbnail1 from '/images/thumbnails/leaves.png';
import thumbnail2 from '/images/thumbnails/smartbrain.png';
import thumbnail3 from '/images/thumbnails/extinct.png';
import thumbnail4 from '/images/thumbnails/robots.png';

function PortfolioPage() {

    const projects = [
        {
            id: 1,
            title: 'Autumn Leaves',
            description: 'A gentle cascade of colorful leaves floats to the ground in this short CSS animation, collecting into a soft autumn pile.',
            image: thumbnail1,
            link1: 'https://sznsgthb.github.io/autumn-leaves/',
            link2: 'https://github.com/sznsgthb/autumn-leaves'
        },
        {
            id: 2,
            title: 'Smart Brain',
            description: 'A full-stack face detection app built with React, Node.js, Express, and PostgreSQL. Users can register, sign in, and submit image URLs to detect faces and corresponding sentiments using the Clarifai API. Includes a working backend, user authentication, and database integration. For this variant, React classes and tachyons were used',
            image: thumbnail2,
            link1: 'https://smart-brain-k79y.onrender.com/',
            link2: 'https://github.com/sznsgthb/smart-brain'
        },
        {
            id: 3,
            title: 'Extinct Animals',
            description: 'An educational web app that fetches data from an external API to showcase extinct animals. It features a visually engaging timeline and an interactive world map pinpointing where each species was last observed. Built with a React frontend and Node.js to retrieve the coordinates',
            image: thumbnail3,
            link1: 'https://extinct-animals.onrender.com/',
            link2: 'https://github.com/sznsgthb/extinct-animals'
        },
        {
            id: 4,
            title: 'Robo Friends',
            description: 'A simple, scrollable React interface that generates a lineup of some cool looking robots from an external API. Includes a live search bar to help you find your favorite bot with ease.',
            image: thumbnail4,
            link1: 'https://sznsgthb.github.io/robofriends/',
            link2: 'https://github.com/sznsgthb/robofriends'
        },
      ];

    return (
        <>
            <ScrollAnimation animation="fadeInUp" delay={500}>
                <h1>Here you'll find my recent creations</h1>
            </ScrollAnimation>

            
            <div className="portfolio-wrapper">
            {projects.map((project, index) => (
                  <ScrollAnimation
                  key={project.id}
                  animation="fadeInUp"
                  delay={index === 0 ? 1000 : 200}
                >
                <div className="project-section">
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
                </ScrollAnimation>
            ))}
            </div>
    </>
    );
  }

export default PortfolioPage;