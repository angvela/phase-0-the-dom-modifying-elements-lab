// Remove the <main> element
const main = document.getElementById('main');
main.remove();

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set its ID and content
newHeader.id = 'victory';
newHeader.textContent = 'Angela is the champion';

// Append it to the <body>
document.body.append(newHeader);
