import React from 'react';
import { Button } from 'reactstrap';

export default function LessonItem({ title, contentList}) {
    function handleClick(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    return (
        <div>
            { title }
            <Button color="success" className="ms-3" onClick={handleClick}>
                Megnéz
            </Button>
        </div>
    )
}
