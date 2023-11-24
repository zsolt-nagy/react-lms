import React, { useState } from 'react';
import { Button } from 'reactstrap';
import LessonModal from '../../../../../../LessonModal/LessonModal';

export default function LessonItem({ title, contentList}) {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    function handleClick(e) {
        e.preventDefault();
        e.stopPropagation();
        toggle();
    }

    return (
        <div>
            { title }
            <Button color="success" className="ms-3" onClick={handleClick}>
                Megnéz
            </Button>   
            <LessonModal toggle={toggle} modal={modal} contentList={contentList} title={title} />  
        </div>
    )
}
