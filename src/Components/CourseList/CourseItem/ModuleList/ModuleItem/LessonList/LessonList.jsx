import React from 'react';
import LessonItem from './LessonItem/LessonItem';

export default function LessonList({ lessons }) {
    let LessonListJSX = null;
    if (lessons.length > 0) {
        LessonListJSX = (
            <ul>
                { lessons.map(lesson => <LessonItem key={lesson.id} {...lesson} />) }
            </ul>
        );
    }


    return (
        <>{LessonListJSX}</>
    );
}
