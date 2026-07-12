# BMI Calculator

A simple and interactive BMI (Body Mass Index) Calculator built with HTML, CSS, and JavaScript.

## Features

* Calculate BMI based on height and weight
* Input validation for height and weight fields
* Displays BMI value instantly
* Shows BMI category:

  * Underweight
  * Normal Weight
  * Overweight
  * Obese
* Clean and responsive user interface

## Technologies Used

* HTML5
* CSS3
* JavaScript

## Project Structure

```bash
BMI-Calculator/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## How It Works

1. Enter your height in centimeters (cm).
2. Enter your weight in kilograms (kg).
3. Click the **Calculate BMI** button.
4. The application calculates your BMI and displays the corresponding weight category.

## BMI Formula

```javascript
BMI = weight / ((height * height) / 10000)
```

## BMI Categories

| BMI Range      | Category      |
| -------------- | ------------- |
| Less than 18.5 | Underweight   |
| 18.5 - 24.9    | Normal Weight |
| 25.0 - 29.9    | Overweight    |
| 30.0 and above | Obese         |

