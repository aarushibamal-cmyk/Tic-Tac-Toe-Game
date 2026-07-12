# 🎨 Color Scheme Switcher

A simple JavaScript project that changes the background color of the webpage when a user clicks on a colored button.

## 🚀 Features

- Change the webpage background color with a single click.
- Uses JavaScript DOM manipulation.
- Uses event listeners to handle button clicks.
- Beginner-friendly project for learning HTML, CSS, and JavaScript.

## 📂 Project Structure

```text
Color-Scheme-Switcher/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript

## 📖 How It Works

1. Select all color buttons using `querySelectorAll()`.
2. Add a click event listener to each button.
3. Detect which button was clicked.
4. Change the background color of the page using the button's ID.

### JavaScript Logic

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        body.style.backgroundColor = event.target.id;
    });
});
```

## 🎯 Concepts Practiced

- DOM Manipulation
- Event Handling
- Event Object
- querySelectorAll()
- forEach()
- CSS Styling


## 👩‍💻 Author

**Aarushi Bamal**

Created while learning JavaScript DOM Manipulation and Event Handling.