import React from 'react';
import "../Myself/style.css"

export function Myself({ aboutmeHtml, hobbies }) {
    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: aboutmeHtml }}></div>
            <br />
            <h6>A Peek into My Hobbies and Interests</h6>
            <ul className="Hobbies-list">
                {hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>
        </div>
    );
}
