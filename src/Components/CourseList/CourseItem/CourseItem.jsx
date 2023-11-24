import React, { useState } from 'react';
import './CourseItem.css';
import ModuleList from './ModuleList/ModuleList';

export default function CourseItem({ author, title, modules }) {
    const [showModules, toggleModules] = useState(false);

    function handleClick(event) {
        event.preventDefault();
        event.stopPropagation();
        toggleModules(oldVisibility => !oldVisibility);
    }

    const ModuleState = showModules ? '[+]' : '[-]';

    return (
        <li className="course-item" onClick={handleClick}>
            <code>{ModuleState}</code>
            {title} ({author}) - {modules.length} module(s)
            {showModules ? <ModuleList modules={modules} /> : null}
        </li>
    );
}
        