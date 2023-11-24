import React from 'react';

export default function Video(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <iframe 
                src={props.url}
                title={props.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>

    );
}


