# Responsive Calculator

A responsive keyboard-controlled calculator built using HTML, CSS, and JavaScript. The calculator supports basic arithmetic operations, operator precedence, full expression evaluation, keyboard input, and input validation.

## Features

* Addition
* Subtraction
* Multiplication
* Division
* Modulus
* Keyboard input support
* Button click support
* Backspace support
* Enter key support
* AC / Clear functionality
* Operator precedence
* Full inline expression evaluation
* Decimal number support
* Divide-by-zero handling
* Invalid keyboard input handling
* Responsive design for desktop, tablet, and mobile

## Technologies Used

* HTML5
* CSS3
* JavaScript

## Project Structure

```text
responsive-calculator/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## Example

The calculator can evaluate expressions such as:

```text
12 + 5 * 3 - 4
```

The calculator follows operator precedence, so multiplication is performed before addition and subtraction.

## Keyboard Controls

| Key         | Function              |
| ----------- | --------------------- |
| `0-9`       | Numbers               |
| `+`         | Addition              |
| `-`         | Subtraction           |
| `*`         | Multiplication        |
| `/`         | Division              |
| `%`         | Modulus               |
| `.`         | Decimal               |
| `Backspace` | Delete last character |
| `Enter`     | Calculate             |
| `AC`        | Clear                 |

## JavaScript Logic

The calculator uses separate functions for each mathematical operation:

```text
add()
subtract()
multiply()
divide()
modulus()
```

Operator precedence is handled using separate number and operator stacks to evaluate complete expressions correctly.

## Learning Outcomes

* JavaScript functions
* DOM manipulation
* Keyboard event handling
* Button event handling
* Operator precedence
* Expression parsing
* Regular expressions
* Error handling
* Input validation
* Responsive web design

## Author

**Aswin S**
