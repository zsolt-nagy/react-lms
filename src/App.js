import { useState, useEffect } from "react";
import PageHeader from "./Components/PageHeader/PageHeader";
import CourseList from "./Components/CourseList/CourseList";
import { CONTENT_TYPES } from "./Constants/ContentTypes";

function App() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("https://k9mrg7-8080.csb.app/api/courses")
            .then((x) => x.json())
            .then((courseList) => {
                setCourses(courseList);
            });
    }, []);

    return (
        <>
            <PageHeader />
            <CourseList courses={courses} />
        </>
    );
}

export default App;
