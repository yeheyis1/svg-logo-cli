const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

// Function to generate SVG content
function generateSVG(text, textColor, shape) {
  return `
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">
      ${shape.render()}
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;
}

// Prompt user for input
inquirer.prompt(
  [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for your logo text:',
    validate: function (input) {
       // Alphanumeric regex: only letters and numbers, no spaces or special characters
       const alphanumericRegex = /^[a-zA-Z0-9]+$/;
      if (input.length > 3) {
        return 'Please enter up to three characters.';
      } else if (!alphanumericRegex.test(input)) {
        return 'please enter only alphamumeric characters (letters and numbers).';
      }
      return true;
    }
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color (color keyword or hexadecimal):',
    validate: (input) => {
      const colorRegex = /^[a-zA-Z]+$|^#[0-9A-Fa-f]{6}$/;
      if (colorRegex.test(input)) {
        return true;
      }
      return 'Please enter a valid color keyword or hexadecimal code.';
    }
  },
  {
    type: 'list',
    name: 'shapeType',
    message: 'Choose a shape for your logo:',
    choices: ['Circle', 'Square', 'Triangle']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color (color keyword or hexadecimal):',
    validate: (input) => {
      const colorRegex = /^[a-zA-Z]+$|^#[0-9A-Fa-f]{6}$/;
      if (colorRegex.test(input)) {
        return true;
      }
      return 'Please enter a valid color keyword or hexadecimal code.';
    }
  }
]).then(answers => {
  let shape;
  switch (answers.shapeType) {
    case 'Circle': shape = new Circle(); break;
    case 'Square': shape = new Square(); break;
    case 'Triangle': shape = new Triangle(); break;
  }
  
  // Set the shape color
  shape.setColor(answers.shapeColor);

  // Generate SVG content
  const svgContent = generateSVG(answers.text, answers.textColor, shape);

  // Write the SVG content to a file
  fs.writeFileSync('logo.svg', svgContent);
  console.log('Generated logo.svg');
});
