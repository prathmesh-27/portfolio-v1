import React from 'react';
import "../Skill/style.css"
export function Skills({ skills }) {
    return (
        <div id="skills-container">
            {skills.map((category, index) => (
                <div key={index} id={`card${index + 1}`} className="grid-item">
                    <h4>{category.title}</h4>
                    <ul className="skills">
                        {category.skills.map((skill, skillIndex) => (
                            <li key={skillIndex}>{skill}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}

