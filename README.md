# svg-logo-cli

This is a Node.js command-line application that generates an SVG logo based on user input. The user is prompted to provide up to three characters of text, a text color, a shape (circle, square, triangle), and a shape color. The application generates an SVG file containing the specified text and shape.

## Features
- Prompts for text (up to three characters), text color, shape, and shape color.
- Generates an SVG file based on the user's input.
- Supports color keywords and hexadecimal color codes for text and shape.
- Unit tests for shape rendering using Jest.

## Walkthrough Video
[Link to Walkthrough Video](https://drive.google.com/file/d/19wo3NccW1e0BXxN7aYrTWwC2lwykrE8E/view)

## Installation
1. Clone the repository:
   ```bash
   git clone YOUR_REPO_URL
## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```
