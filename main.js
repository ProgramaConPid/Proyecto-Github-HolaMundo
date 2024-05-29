// Add a button for the section about me
const secAboutMe = document.querySelector('.about-me');

const newButton = document.createElement('button');
let buttonText = 'Click Here!';

newButton.textContent = buttonText;
secAboutMe.appendChild(newButton)

newButton.style.padding = '10px';