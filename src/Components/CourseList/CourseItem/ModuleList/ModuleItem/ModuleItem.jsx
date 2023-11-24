import React, { useState } from 'react';
import LessonList from './LessonList/LessonList';

export default function ModuleItem({ title, lessons }) {
  const [showLessons, toggleLessons] = useState(false);

  const LessonState = showLessons ? '[+]' : '[-]';

  function handleClick(event) {
    event.preventDefault();
    event.stopPropagation();
    toggleLessons(oldLessonState => !oldLessonState);
  }

  return (
    <li onClick={handleClick}>
      <code>{LessonState}</code>
      {title} ({lessons.length} lesson(s))
      {showLessons ? <LessonList lessons={lessons} /> : null}
    </li>
  )
}
