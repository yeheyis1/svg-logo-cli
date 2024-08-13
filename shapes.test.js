const { Circle, Square, Triangle } = require('./lib/shapes');


describe('Circle', () => {
  it('should render a circle with the specified color', () => {
    const shape = new Circle();
    shape.setColor('blue');
    expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
  });
});

describe('Square', () => {
  it('should render a square with the specified color', () => {
    const shape = new Square();
    shape.setColor('red');
    expect(shape.render()).toEqual('<rect x="70" y="40" width="160" height="160" fill="red" />');
  });
});

describe('Triangle', () => {
  it('should render a triangle with the specified color', () => {
    const shape = new Triangle();
    shape.setColor('green');
    expect(shape.render()).toEqual('<polygon points="150,20 280,180 20,180" fill="green" />');
  });
});
