import React from 'react';
import './CourseItem.css';

export default function CourseItem({ author, title, modules }) {
  return (
    <li className="course-item">{title} ({author}) - {modules.length} module(s)</li>
  );
}
