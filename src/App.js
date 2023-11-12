import { useState } from "react";
import PageHeader from "./Components/PageHeader/PageHeader";
import CourseList from "./Components/CourseList/CourseList";

function App() {
    const [courses, setCourses] = useState([
        {
            author: "John",
            title: "JavaScript Fundamentals",
            modules: [],
        },
        {
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
