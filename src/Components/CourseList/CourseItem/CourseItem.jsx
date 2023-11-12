import React from 'react';
import './CourseItem.css';
import ModuleList from './ModuleList/ModuleList';

export default function CourseItem({ author, title, modules }) {
    return (
        <li className="course-item">
            {title} ({author}) - {modules.length} module(s)
            <ModuleList modules={modules} />
        </li>
    );
}
