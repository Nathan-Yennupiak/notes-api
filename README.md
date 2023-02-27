API Documentation:

API endpoint: https://notes-api-f6i7.onrender.com/api/v1/notes

This endpoint is a RESTful API that allows users to retrieve and create notes.

METHOD:

GET: Retrieves a list of all notes. POST: Creates a new inote.

Request Header: Content-Type: application/json

RESPONSE:

GET: Returns a JSON array of all notes. POST: Returns the newly created note as a JSON object.

FIELDS FOR NOTES:

title (TEXT): title of note 
description (TEXT): description of note

EXAMPLE : Adding Note using JSON Format

{ 

  "title": "New Task" 
  description: "Finish AI Course on Udemy"  

}
