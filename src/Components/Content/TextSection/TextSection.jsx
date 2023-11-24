import React from 'react'

export default function TextSection(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            {props.text}
        </div>
    )
}
