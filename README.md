# Movie Browse Application

## Overview

This project is a responsive, mobile-first movie search application built using React, Typescript, Tailwind CSS, and Lucide icons. It utilizes a public movie API i.e. TMDB API to fetch and display movie data on the homepage. The application includes features like search, infinite scrolling, advanced filtering, dark mode, a "My List" page, detailed view modals, and trending movies.

## Installation

#### Clone the Repository

`git clone https://github.com/Jerry-Sharma21/Movie_Browser.git`

#### Install Dependencies

`npm install`

#### Run the Application

`npm run dev`
The application will be accessible at [http://localhost:5173](http://localhost:5173)

#### Note: Due to TMDB API restrictions in India, you may need to use a VPN to access the API and fetch movie data.

## Features

#### Responsive Design:

The application is designed to be mobile-first and responsive, ensuring it works seamlessly across various screen sizes.

#### Movie List Display:

The homepage displays a list of movies, including their titles, poster images, and release years.

#### Search Functionality:

Users can search for movies by title. The movie list updates dynamically as the user types, fetching relevant results from the movie API.

#### Infinite Scrolling:

The application implements infinite scrolling to handle large numbers of search results, ensuring a smooth user experience.

#### Advanced Filtering (Optional):

Users can filter movies by genre, release year range, and rating range. Filters update the movie list dynamically.

#### Favorite Movies:

Users can save their favorite movies locally using browser storage. The "My List" page allows users to view and manage their favorite movies, including the ability to remove stored favorites.

#### Dark Mode:

The application supports dark mode, providing a comfortable viewing experience in low-light environments.

#### Detailed View Modal:

Each movie on the list can be clicked to view more detailed information in a modal window, enhancing the user's ability to explore movie details without leaving the homepage.

#### Trending Movies:

A section for trending movies is displayed at the top of the homepage, highlighting popular movies currently trending.

## Design Decisions

#### React & Tailwind CSS:

React was chosen for its component-based architecture and ease of state management, while Tailwind CSS was used for styling due to its utility-first approach, allowing for rapid UI development.

#### Lucide Icons:

The Lucide icon library was integrated for clean, customizable icons throughout the application.

#### Responsive Design:

A mobile-first approach was adopted to ensure the application is usable on a wide range of devices, with breakpoints and flexible layouts implemented to enhance responsiveness.

#### Search Feature:

The search functionality is implemented with debouncing to optimize API calls and improve performance. The movie list updates in real-time as the user types, providing a smooth user experience.

#### Infinite Scrolling:

Infinite scrolling was implemented without relying on third-party libraries, providing better control over the implementation and performance optimization.

#### Filtering Options:

Advanced filtering options were added to give users more control over the movie list, enhancing the application's usability and customization.

#### Local Storage for Favorites:

The use of browser storage to save favorite movies allows users to retain their preferences even after refreshing or closing the browser.

#### Alias Support for Development

Alias support has been added to simplify import paths during development, improving code readability and maintainability. This allows for more manageable and cleaner import statements throughout the project. Sorted imports alphabetically, following best coding practices.

## Possible Improvements

#### Enhanced Error Handling:

Improve error handling for API requests and user interactions to provide more informative feedback and a better user experience.

#### Unit Testing:

Add unit tests for critical components and functionality to ensure the application remains robust and maintainable.

#### Performance Optimization:

Further optimize the application's performance by reducing API call frequency, lazy loading images, and implementing service workers for caching.

#### PWA Support:

Convert the application into a Progressive Web App (PWA) to enhance offline usability and provide a more native-like experience.

#### Better Loading and Empty States:

Improve the user experience by providing better loading indicators and empty states when there are no search results or when data is being fetched.

#### External Libraries for Enhanced UI:

Consider using external libraries like Material UI or Framer Motion to create a more interactive and visually appealing user interface. These libraries offer advanced components and animations that could further enhance the user experience, but they were not specified in the assignment.

## Accessibility and SEO

Accessibility: The application follows accessibility best practices, including semantic HTML, ARIA roles, and keyboard navigation support.

SEO: Meta tags, descriptive titles, and proper use of headings ensure the application is optimized for search engines.
