import React from 'react';
import '../styles/skills.css';

const imagePaths = {
    html: '/images/html.png',
    css: '/images/css.png',
    javascript: '/images/javascript.png',
    python: '/images/python.png',
    sql: '/images/sql.png',
    git: '/images/git.png',
    github: '/images/github.png',
    linux: '/images/linux.png',
    react: '/images/react.png',
    api_rest: '/images/api-rest.png',
    graphql: '/images/graphql.png',
    go_SOON_: '/images/go.png',
};

const Skills = () => {
    return (
        <section className="skills-section">
            <div className="category-title">
                <span></span>
                <h2>Skills</h2>
            </div>
            <div className="skills-container">
                {Object.keys(imagePaths).map((key) => (
                    <div className="skill" key={key}>
                        <img src={imagePaths[key]} alt={`skill-${key}`} />
                        <p>{key.toUpperCase()}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export { Skills };
