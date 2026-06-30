# 📰 Live News Feed

A modern and responsive Live News Feed web application built using **HTML, CSS, and JavaScript (ES6 Modules)**. The application fetches real-time news articles from the NewsData.io API and displays them in an attractive card-based layout.

## 🚀 Features

* 🔍 Search news by keyword
* 📂 Filter news by category
* 📰 Display latest live news articles
* ⏳ Loading indicator while fetching data
* ⚠️ Error handling for failed requests
* 📱 Responsive user interface
* 🔗 Direct link to read full news articles
* 🖼️ News image support with fallback placeholder

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6 Modules)
* NewsData.io API

## 📁 Project Structure

```text
live-news-feed/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── api.js
│   ├── app.js
│   ├── controller.js
│   ├── render.js
│   └── state.js
│
└── README.md
```

## ⚙️ How It Works

### 1. User Interaction

* User enters a search keyword or selects a news category.
* Clicking the Search button triggers the application.

### 2. Data Fetching

* `api.js` sends requests to the NewsData.io API.
* News data is fetched asynchronously using `fetch()`.

### 3. State Management

* `state.js` stores:

  * Articles
  * Search term
  * Selected category
  * Loading state
  * Error state

### 4. Controller Logic

* `controller.js` manages communication between API and UI.
* Handles loading, success, and error states.

### 5. Rendering

* `render.js` dynamically creates news cards and updates the DOM.

## 📷 Application Screens

### Header Section

* Search Bar
* Category Dropdown
* Search Button

### News Section

* News Image
* News Title
* News Description
* Read More Link

## 🔄 Categories Supported

* General
* Business
* Technology
* Sports
* Health

## 📚 JavaScript Concepts Used

* ES6 Modules
* Async/Await
* Fetch API
* DOM Manipulation
* Event Handling
* State Management
* Template Literals
* Error Handling
* Arrow Functions

## ▶️ Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/live-news-feed.git
```

2. Open the project folder

```bash
cd live-news-feed
```

3. Run using VS Code Live Server or open `index.html` in a browser.

## 🎯 Learning Outcomes

Through this project, I learned:

* API Integration
* Modular JavaScript Architecture
* Asynchronous Programming
* DOM Manipulation
* State Management
* Error Handling
* Responsive Web Design

## 👨‍💻 Author

**Anoop Vishwakarma**

B.Tech Computer Science Engineering (2025–2029)

Medhavi Skills University | Physics Wallah Institute of Innovation

## ⭐ Future Improvements

* Dark Mode
* Infinite Scrolling
* Pagination
* Bookmark News
* Save Favorites using Local Storage
* Multiple Language Support

## 📄 License

This project is created for educational and learning purposes.
