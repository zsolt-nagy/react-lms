import React from 'react';

export default function CodeExample(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <pre>
                <code>
{props.codeText}                    
                </code>
            </pre>
            <p>{props.description}</p>
        </div>
    );
}
