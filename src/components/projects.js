import React from 'react';
import '../styles/projects.css'

const Projects = () => {
    const projectsData = [
        {
            id: 1,
            title: 'TODOs Manager',
            thumbnailURL: '/images/todos_preview.png',
            projectURL: 'https://todos-manager-react.vercel.app/',
            type: 'Frontend',
        },
        {
            id: 2,
            title: 'Fake Store',
            thumbnailURL: '/images/fake-store.png',
            projectURL: 'https://fake-store-murex.vercel.app/',
            type: 'Frontend',
        },
        // {
        //     id: 2,
        //     title: 'Example',
        //     thumbnailURL: '/images/example.jpeg',
        //     projectURL: 'https://todos-manager-react.vercel.app/',
        //     type: 'Backend', // Agrega el tipo de proyecto
        // },
    ];

    const frontendProjects = projectsData.filter((project) => project.type === 'Frontend');
    const backendProjects = projectsData.filter((project) => project.type === 'Backend');

    return (
        <section className="projects-section">
            <div className="category-title">
                <span></span>
                <h2 id="projects">Projects</h2>
            </div>
            <div className="projects-container">
                <div className="sub-category">
                    <h3 className='sub-title'>Frontend Projects</h3>
                    <div className="project-list">
                        {frontendProjects.map((project) => (
                            <div className="project" key={project.id}>
                                <a href={project.projectURL} target='_blank' rel="noopener noreferrer">
                                    <div className="project-content">
                                        <img src={project.thumbnailURL} alt={project.title} />
                                        <h3>{project.title}</h3>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="sub-category">
                    <h3 className='sub-title'>Backend Projects</h3>
                    <div className="project-list">
                        {backendProjects.map((project) => (
                            <div className="project" key={project.id}>
                                <a href={project.projectURL} target='_blank' rel="noopener noreferrer">
                                    <div className="project-content">
                                        <img src={project.thumbnailURL} alt={project.title} />
                                        <h3>{project.title}</h3>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export { Projects };
