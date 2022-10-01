"use strict"

// Getting access to the DOM

let quoteText = document.querySelector('h5');
let authorName = document.querySelector('h6');
let generateButton = document.querySelector('button');

// API Fetch and Promise function

let adviceFunc = () => {

fetch('https://type.fit/api/quotes')
.then(response =>  response.json())
.then(json => {
 
 console.log(json);
 
 // Quotes were stored in objects in an array
 
 console.log(json.length);
 let randomAdviceIndex = Math.floor(Math.random() * json.length);
 let randomAdviceGotten = json[randomAdviceIndex];
 
 // Key Pair for Quote = text
 quoteText.textContent = randomAdviceGotten.text;
 
 //Key Pair for Author = author
 authorName.textContent = `Author:      ${randomAdviceGotten.author}`;
})

}

// Generate Button

generateButton.onclick = () => adviceFunc();


// Display Quote to when page is loaded 

window.onload = () => adviceFunc();

























































































