import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import TextSection from '../Content/TextSection/TextSection';
import Video from '../Content/Video/Video';
import CodeExample from '../Content/CodeExample/CodeExample';
import { CONTENT_TYPES } from '../../Constants/ContentTypes';

export default function LessonModal({ toggle, modal, contentList, title }) {

    let ContentJsx = [];

    for (let content of contentList) {
        if (content.type === CONTENT_TYPES.TEXT_SECTION) {
            ContentJsx.push( <TextSection key={content.id} {...content} />);
        } else if (content.type === CONTENT_TYPES.VIDEO) {
            ContentJsx.push( <Video key={content.id} {...content} />);
        } else if (content.type === CONTENT_TYPES.CODE_EXAMPLE) {
            ContentJsx.push( <CodeExample key={content.id} {...content} />);
        }
    }


    return (
        <Modal isOpen={modal} toggle={toggle} data-bs-theme="dark" backdrop="static">
            <ModalHeader toggle={toggle}>{ title }</ModalHeader>
            <ModalBody>
                {ContentJsx}
            </ModalBody>
            <ModalFooter>
            <Button color="success" onClick={toggle}>
                Bezár
            </Button>
            </ModalFooter>
        </Modal>
    );
}
