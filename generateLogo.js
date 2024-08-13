const fs = require('fs');

// Function to generate the SVG content
function generateSVGContent(shape, text, color) {
    let svg = `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">`;

    // Add shape
    if (shape === 'Circle') {
        svg += `<circle cx="100" cy="100" r="80" fill="${color}" />`;
    } else if (shape === 'Square') {
        svg += `<rect x="20" y="20" width="160" height="160" fill="${color}" />`;
    } else if (shape === 'Triangle') {
        svg += `<polygon points="100,10 190,190 10,190" fill="${color}" />`;
    }

    // Add text
    svg += `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20" fill="black">${text}</text>`;

    svg += `</svg>`;
    return svg;
}

// Function to save SVG to file
function saveSVG(shape, text, color) {
    const svgContent = generateSVGContent(shape, text, color);
    fs.writeFileSync('logo.svg', svgContent);
    console.log('Logo generated and saved as logo.svg');
}

// Example usage
saveSVG('Circle', 'My Logo', '#00FF00');
