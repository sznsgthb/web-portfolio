import React from 'react';
import ScrollAnimation from '../../containers/ScrollAnimation.js';
import './Portfolio.css'
import thumbnail1 from '/images/thumbnails/dashboard.png';
import thumbnail2 from'/images/thumbnails/calculator.png';
import thumbnail3 from '/images/thumbnails/leaves.png';
import thumbnail4 from '/images/thumbnails/smartbrain.png';
import thumbnail5 from '/images/thumbnails/extinct.png';
import thumbnail6 from '/images/thumbnails/robots.png';

function PortfolioPage() {

    const projects = [
        {
            id: 1,
            title: 'The Competence Chronicle',
            description: 'The first version of my latest project: a comprehensive, holistic app designed to help users unlock their full potential. Users can log the skills they want to develop, set practical goals, and attach actionable steps to achieve them — allowing them to effectively master each skill. Future updates will introduce progress bars, overview charts, mood trackers, and additional features to support every aspect of goal achievement.',
            image: thumbnail1,
            link1: 'https://the-competence-chronicle.netlify.app/#/',
            link2: 'https://github.com/sznsgthb/the-competence-chronicle'
        },
        {
            id: 2,
            title: 'Calculator',
            description: 'A simple calculator interface built with React, allowing users to perform basic operations such as addition, subtraction, multiplication, and division.',
            image: thumbnail2,
            link1: 'https://sznsgthb.github.io/react-calculator/',
            link2: 'https://github.com/sznsgthb/react-calculator'
        },
        {
            id: 3,
            title: 'Smart Brain',
            description: 'A full-stack face detection app built with React, Node.js, Express, and PostgreSQL. Users can register, sign in, and submit image URLs to detect faces and corresponding sentiments using the Clarifai API. Includes a working backend, user authentication, and database integration. For this variant, React classes and tachyons were used.',
            image: thumbnail4,
            link1: 'https://smart-brain-k79y.onrender.com/',
            link2: 'https://github.com/sznsgthb/smart-brain'
        },
        {
            id: 4,
            title: 'Extinct Animals',
            description: 'An educational web app that fetches data from an external API to showcase extinct animals. It features a visually engaging timeline and an interactive world map pinpointing where each species was last observed. Built with a React (hooks) frontend and Node.js to retrieve the coordinates.',
            image: thumbnail5,
            link1: 'https://extinct-animals.onrender.com/',
            link2: 'https://github.com/sznsgthb/extinct-animals'
        },
        {
            id: 5,
            title: 'Robo Friends',
            description: 'A simple, scrollable React interface that generates a lineup of some awesome looking robots from an external API. Includes a live search bar to help you find your favorite bot with ease.',
            image: thumbnail6,
            link1: 'https://sznsgthb.github.io/robo-friends/',
            link2: 'https://github.com/sznsgthb/robo-friends'
        },
        {
            id: 6,
            title: 'Autumn Leaves',
            description: 'A gentle cascade of colorful leaves floats to the ground in this short CSS animation, collecting into a soft autumn pile.',
            image: thumbnail3,
            link1: 'https://sznsgthb.github.io/autumn-leaves/',
            link2: 'https://github.com/sznsgthb/autumn-leaves'
        },
      ];

    return (
        <div>
            <ScrollAnimation animation="fadeInUp" delay={500}>
                <h1 className="h1-portfoliopage">Projects</h1>
            </ScrollAnimation>
            
            <div className="portfolio-wrapper">
            {projects.map((project, index) => (
                  <ScrollAnimation
                  key={project.id}
                  animation="fadeInUp"
                  delay={index === 0 ? 1500 : 400}
                >
                    <section className="project-section">
                        <h2 className="project-title">{project.title}</h2>

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
                </section>
                </ScrollAnimation>
            ))}
            </div>
    </div>
    );
  }

export default PortfolioPage;