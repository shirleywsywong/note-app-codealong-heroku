# Note App Code Along

In this code along we’re aiming to make a full functional we application which

- allows a user to create an account
- allows a user to sign in
- allows a user to create a note - allows them to update a note

## Running the project

to run the project locally;

- `npm i` or `yarn i`
- `npm run start:server` or `yarn run start:server`
- `npm run start:client` or `yarn run start:client`
- make sure you have an instance of mongodb running (run `mongod`)

## Branches

### Master

### Part-1-final

This branch has the;

- `userModel`, `userRoutes`, and `userService`
- NodeJS/express server

### Part-2-final

This branch adds the

- `notesModel`, `notesRoutes`, and `notesService`
- `tokenService` for creating a JWT token `verifyToken` middleware

### Part-3-Starter

This branch adds a `create-react-app` frontend portion to the project, with built in `material-ui` components.

### Part-3-final

This branch introduces

- Front end error handling from form responses
- Front end authorization/router handling
- login functionality
- Creating a note getting only your notes

### Part-4-final

This branch introduces

- ref population using mongoose (notes.user)
- displaying a single note via react router
- updating a single note

### Part-5-final

this branch introduces

- deployment to heroku changes
  - Procfile
  - env variables
