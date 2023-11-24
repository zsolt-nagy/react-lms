import { useState } from "react";
import PageHeader from "./Components/PageHeader/PageHeader";
import CourseList from "./Components/CourseList/CourseList";
import { CONTENT_TYPES } from "./Constants/ContentTypes";

function App() {
    const [courses, setCourses] = useState([
        {
            id: 1,
            author: "John",
            title: "JavaScript Fundamentals",
            modules: [
                {
                    id: 1,
                    title: "Datatypes",
                    lessons: [
                        {
                            id: 1,
                            title: "Egyszerű adattípusok",
                            contentList: [
                                {
                                    id: 1,
                                    type: CONTENT_TYPES.TEXT_SECTION,
                                    title: "Boolean típus",
                                    text: "A bookean típusnak két lehetséges értéke van: true vagy false.",
                                },
                                {
                                    id: 2,
                                    type: CONTENT_TYPES.VIDEO,
                                    title: "JavaScript adattípusok",
                                    url: "https://www.youtube.com/embed/3lMvVCvYeyY",
                                },
                                {
                                    id: 3,
                                    type: CONTENT_TYPES.CODE_EXAMPLE,
                                    title: "Függvények",
                                    description: "Így hívhatsz meg egy függvényt",
                                    codeText: `
function f() {}
f();
                                    `,
                                    language: "javascript",
                                },
                            ],
                        },
                        {
                            id: 2,
                            title: "Objektumok és tömbök",
                            contentList: [],
                        },
                        {
                            id: 3,
                            title: "Függvények",
                            contentList: [],
                        },
                    ],
                },
                {
                    id: 2,
                    title: "Variables",
                    lessons: [],
                },
                {
                    id: 3,
                    title: "If-else",
                    lessons: [],
                },
                {
                    id: 4,
                    title: "Loops",
                    lessons: [],
                },
            ],
        },
        {
            id: 2,
            author: "Jane",
            title: "React Fundamentals",
            modules: [],
        },
    ]);

    return (
        <>
            <PageHeader />
            <CourseList courses={courses} />
        </>
    );
}

export default App;
