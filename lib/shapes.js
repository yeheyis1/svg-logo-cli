class Shape {
    constructor() {
      this.color = 'transparent'; // Default color
    }
  
    setColor(color) {
      if (this.isValidColor(color)) {
        this.color = color;
      } else {
        throw new Error('Invalid color. Please enter a valid color keyword or hexadecimal value.');
      }
    }
  
  // Function to validate color input
isValidColor(color) {
  const colorRegex = /^[a-zA-Z]+$|^#([0-9A-Fa-f]{3}){1,2}$/;  // Supports both color keywords and 3/6-digit hex codes
  return colorRegex.test(color);
}

    // Abstract method for rendering
    render() {
      throw new Error('Render method must be implemented.');
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect x="70" y="40" width="160" height="160" fill="${this.color}" />`;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="150,20 280,180 20,180" fill="${this.color}" />`;
    }
  }
  
  module.exports = { Circle, Square, Triangle };
  