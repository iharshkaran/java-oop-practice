# Notes App Backend

A simple REST API for a Notes application built using **Node.js**, **Express.js**, and **MongoDB**.

## Features

- Create a note
- Get all notes
- Update a note
- Delete a note

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

## Installation

```bash
git clone <repository-url>
cd notesapp
npm install
```

## Environment Variables

Create a `.env` file in the root directory and add:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

## Run the Server

```bash
npm start
```

or

```bash
npx nodemon server.js
```

## API Endpoints

| Method | Endpoint | Description |
|---------|----------|-------------|
| POST | `/notes` | Create a note |
| GET | `/notes` | Get all notes |
| PATCH | `/notes/:id` | Update a note |
| DELETE | `/notes/:id` | Delete a note |

## Author

Harsh