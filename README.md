# Blog Platform

A simple and dynamic web application that allows users to read articles, bookmark their favorites, and explore new content. The application fetches random articles and images from external APIs and provides an interactive user interface with hover effects, custom fonts, and a cohesive color palette.

## Features

- Dynamic article fetching from the JSONPlaceholder API
- Random images fetched from Lorem Picsum API
- Bookmarking functionality for favorite articles
- Pagination for easy navigation through articles
- Hover effects for an interactive user experience
- Custom typography using Google Fonts
- Responsive design with Bootstrap

## Demo

![Blog Platform Demo](https://blog-platform-topaz-mu.vercel.app/)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/blog-platform.git
2. **Navigate to the project Dictionary**
   ```bash
   cd blog-platform
3. **install dependecies**
   ```bash
   npm install
4. **Start the development server**
   ```bash
   npm start
5. **Open your browser and go to**: ![(http://localhost:3000)](http://localhost:3000)

## Usage
1. **Viewing Articles:** The application will automatically display articles fetched from the JSONPlaceholder API. Users can view a list of articles with titles, descriptions, and images.
2. **Bookmarking Articles:** Users can bookmark their favorite articles. Bookmarked articles can be found in the "Your Bookmarks" section.
3. **Pagination:** Navigate through articles using the pagination controls at the bottom of the article list.
4. **Sorting:** Use the sorting options to organize articles based on selected criteria.



## Project Structure
   ```bash
blog-platform/
│
├── public/
│   ├── index.html          # Main HTML file for the application
│   └── favicon.ico         # Favicon for the application
│
├── src/
│   ├── components/         # React components for different UI parts
│   │   ├── ArticleFeed.js  # Component for displaying articles
│   │   ├── CreateArticle.js # Component for adding new articles
│   │   ├── Header.js       # Header component for navigation
│   │   ├── Pagination.js    # Pagination component for article navigation
│   │   └── Sort.js         # Sorting component for article sorting
│   │   ├── App.css         # Main application styles
│   │   └── ArticleFeed.css  # Styles specific to ArticleFeed component
│   │
│   ├── App.js              # Main application component
│   ├── index.js            # Entry point for the React application
│   └── reportWebVitals.js  # Performance measuring tool
│
├── package.json             # Project metadata and dependencies
└── README.md                # Project documentation



