import React from 'react';
import ModuleItem from './ModuleItem/ModuleItem';

export default function ModuleList({ modules }) {
    let ModuleListJSX = null;
    if (modules.length > 0) {
        ModuleListJSX = (
            <ul>
                { modules.map(module => <ModuleItem key={module.id} {...module} />) }
            </ul>
        );
    }


    return (
        <>{ModuleListJSX}</>
    );
}
