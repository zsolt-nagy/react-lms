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

- individual content types are yet to be specified.


## Credits

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



