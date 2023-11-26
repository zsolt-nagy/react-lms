# React LMS

Learning Management System client using React.

- Display courses
- Public course creation module

Out of scope

- Credential management. All features are public, including course creation
- Student progress tracking. As students don't log in, we can't track their progress. 
- Authors are only strings. Author management is out of scope.

## Course data model

- Courses can be listed. Course names are unique
- Author: `string` 
- Title: `string`
- Modules: `list<Module>`

`Module` 

- Title: `string`
- List of lessons: `list<Lesson>`

`Lesson`

- Title: `string`
- ContentList: `list<Content>`

`Content` = `TextSection` | `Video` | `CodeExample` | `Test` 

```
{
    id: 1,
    type: "TextSection",
    title: "Text Section Cím",
    text: "..."
}

{
    id: 2,
    type: "Video",
    title: "Video Cím",
    url: "Video URL",
}


{
    id: 3,
    type: "CodeExample",
    title: "Kód példa címe",
    description: "Kód példa leírása",
    codeText: "function f() {}",
    language: "javascript",
}
```

- individual content types are yet to be specified.


## Database Schema

```
Course (id: int, author: string, title: string)

Pl.:
id  author  title
1   John    JavaScript Fundamentals
2   Jane    React Fundamentals  


Module (id: int, title: string, courseId: int)

Pl.:
id      title                   courseId
1       Datatypes               1
2       Objektumok és Tömbök    1
3       Függvények              1 
4       JSX                     2


Lesson (id: int, title: string, moduleId: int)

Pl.:
id      title                       moduleId
1       Egyszerű adattípusok        1          
2       JavaScript adattípusok      1
3       Függvények                  1


LessonContent (id: int, type: (TextSection|Video|CodeExample), order: 1, contentId: int)
id      type           order   contentId
1       TextSection    1       1
2       Video          2       1
3       CodeExample    3       1


TextSection (id, title, text) 
1     "Boolean típus"       "A bookean típusnak két lehetséges értéke van: true vagy false."

Video (id, title, url)
1     "JavaScript adattípusok"       "https://www.youtube.com/embed/3lMvVCvYeyY"

CodeExample (id, title, description, codeText, language)
...
```

```
[
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
                                type: "TextSection",
                                title: "Boolean típus",
                                text: "A bookean típusnak két lehetséges értéke van: true vagy false.",
                            },
                            {
                                id: 2,
                                type: "Video",
                                title: "JavaScript adattípusok",
                                url: "https://www.youtube.com/embed/3lMvVCvYeyY",
                            },
                            {
                                id: 3,
                                type: "CodeExample",
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
        modules: [{
            id: 4, 
            title: "JSX",
            lessons: []
        }],
    },
]
```


## Credits

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



