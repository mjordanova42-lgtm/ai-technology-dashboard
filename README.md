# AI Technology Dashboard

AI Technology Dashboard is an interactive web dashboard for exploring AI and technology insights through a simple and responsive interface.

The project uses a public API to generate live insights and allows users to save, delete and revisit interesting insights. The dashboard also includes a daily streak feature that encourages users to return and explore new insights regularly.

## Features

- Generate live insights from a public API
- Save interesting insights
- Delete saved insights
- Display saved insights with date and time
- Daily insight streak with 🔥 indicator
- Store saved insights and streak data using LocalStorage
- Responsive design for desktop and mobile
- Error handling when the API is unavailable
- Interactive dashboard interface

## Technologies

- HTML5
- CSS3
- JavaScript
- Fetch API
- LocalStorage
- REST API

## Project Structure

ai-technology-dashboard/
 index.html
 style.css
 script.js
 README.md

## How to Run

No installation or additional dependencies are required.

1. Clone or download the repository.
2. Open `index.html` in a web browser.
3. Click "Generate Insight" to load a new insight.
4. Click "Save" to add an insight to the collection.
5. Use "Delete" to remove a saved insight.
6. Generate an insight on different days to build your daily streak.

## How It Works

The application uses JavaScript's `fetch()` function to request data from a public API.

When an insight is generated, it is displayed in the dashboard. Users can save interesting insights, which are stored in the browser using LocalStorage.

Each saved insight contains its text and the date and time when it was saved.

The daily streak tracks consecutive days on which the user generates at least one insight. The streak is stored locally in the browser and increases when the user returns on the following day.

## Error Handling

The application checks whether the API request was successful. If the API cannot be reached or returns an unsuccessful response, an error message is displayed instead of allowing the application to fail silently.

## What I Learned

This project helped me practice building a complete small web application with the help of AI.

I learned how to work with a public API using `fetch()`, handle asynchronous operations with `async/await`, process API responses, manipulate the DOM and handle errors.

I also learned how to use `LocalStorage` to persist information in the browser and how to organize JavaScript code into separate functions with clear responsibilities.

Another important part of the project was using AI as a development assistant while testing, debugging and improving the application step by step.

## Future Improvements

Possible future improvements include:

- Adding more AI and technology data sources
- Adding search and filtering
- Adding categories for saved insights
- Adding visual analytics
- Connecting the application to a backend database
- Adding user accounts and cloud-based data storage

## Author

Created as a final project for the AI Coding: Basics course.
