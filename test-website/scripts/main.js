var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc == 'images/background-image.jpg') {
        myImage.setAttribute('src', 'images/test-image.jpg')
    } else {
        myImage.setAttribute('src', 'images/background-image.jpg')
    }
}

myButton.onclick = function() {
    setUserName();
}

function setUserName() {
    var myName = prompt('Please enter your name: ');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
}
