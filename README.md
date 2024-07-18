❖ Description: 
- Developed a Quote of the Day displaying random quotes from the API.
- Enabled users to search for quotes by author name.
- Implemented front-end and back-end functionalities, including UI design & data storage.
Backend: Used Node and Express to create an API for generating random quotes and author search.
Frontend: Utilized simple React and CSS to display the Quote of the Day.

Getting Started
This guide will help you set up and run the Quote of the Day project on your local machine. The project consists of a backend server that provides random quotes and allows searching for quotes by author.

Prerequisites
Node.js (v12 or later)
npm (v6 or later) or yarn (v1.22 or later)
Git (for cloning the repository)
Setup Instructions
Clone the Repository

First, clone the project repository to your local machine:

bash
Copy code
git clone https://github.com/your-username/quote-of-the-day.git
cd quote-of-the-day
Install Backend Dependencies

Navigate to the backend directory and install the necessary dependencies:

bash
Copy code
cd backend
npm install
Install Frontend Dependencies

Navigate to the frontend/quote-of-the-day directory and install the necessary dependencies:

bash
Copy code
cd ../frontend/quote-of-the-day
npm install
Run the Backend Server

Start the backend server by running the following command in the backend directory:

bash
Copy code
npm start
The server will start at http://localhost:8080. You should see the message Server started at http://localhost:8080 in the terminal.

Run the Frontend Application

Start the frontend development server by running the following command in the frontend/quote-of-the-day directory:

bash
Copy code
npm start
The frontend application will start and automatically open in your default web browser at http://localhost:3000.

API Endpoints
The backend server provides the following endpoints:

Get a Random Quote

arduino
Copy code
GET http://localhost:8080/
This endpoint returns a random quote from the quotes dataset.

Response Example:

json
Copy code
{
  "text": "Be yourself; everyone else is already taken.",
  "author": "Oscar Wilde"
}
Search Quotes by Author

bash
Copy code
GET http://localhost:8080/search?author=<author_name>
This endpoint searches for quotes by the specified author. The author query parameter is required.

Response Example:

json
Copy code
[
  {
    "text": "Be yourself; everyone else is already taken.",
    "author": "Oscar Wilde"
  },
  {
    "text": "To live is the rarest thing in the world. Most people exist, that is all.",
    "author": "Oscar Wilde"
  }
]
Error Response Example:

json
Copy code
{
  "error": "Author query parameter is required"
}
json
Copy code
{
  "error": "No quotes found for the given author"
}


If you encounter a Module not found: Error: Can't resolve 'axios' error, ensure that axios is installed in your frontend/quote-of-the-day directory:

Install axios

bash
Copy code
cd frontend/quote-of-the-day
npm install axios
