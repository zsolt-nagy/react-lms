import React from 'react';
import CourseItem from './CourseItem/CourseItem';

export default function CourseList({ courses }) {

    const CourseItemsJSX = courses.map(course => (
        <CourseItem 
            key={course.id} 
            {...course} />
    ));

    return (
        <section>
            CourseList 
            <ul>
                {CourseItemsJSX}
            </ul>
        </section>
    );
}
