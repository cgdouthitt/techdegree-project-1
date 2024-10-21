/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * Creates a quotes array of objects with a quote and source property for every object
 * This can also have a citation, year, or tag property
***/

let quotes = [
  {
    quote: "We hold these truths to be self-evident: that all men are created equal.",
    source: "Thomas Jefferson",
    year: 1776,
  },
  {
    quote: "The ultimate measure of a man is not where he stands in moments of comfort and convenience, but where he stands at times of challenge and controversy.",
    source: "Martin Luther King, Jr.",
    citation: "Strength to Love",
    year: 1963,
    tag: "Historic"
  },
  {
    quote: "Dost thou love life? Then do not squander Time; for that's the Stuff Life is made of.",
    source: "Benjamin Franklin",
    year: 1746,
    tag: "Historic"
  },
  {
    quote: "What, like it's hard?",
    source: "Elle Woods (played by Reese Witherspoon)",
    citation: "Legally Blonde",
    year: 2001,
    tag: "Movie"
  },
  {
    quote: "I’m Batman",
    source: "Batman (played by Michael Keaton)",
    citation: "Batman",
    year: 1989,
    tag: "Movie"
  },
  {
    quote: "I'm the King of the World",
    source: "Jack Dawson (played by Leonardo DiCaprio)",
    citation: "Titanic",
    year: 1997,
    tag: "Movie"
  },
  {
    quote: "Get in loser, we’re going shopping",
    source: "Regina (played by Rachel McAdams)",
    citation: "Mean Girls",
    year: 2004,
    tag: "Movie"
  },
  {
    quote: "Just keep swimming",
    source: "Dory (played by Ellen DeGeneres)",
    citation: "Finding Nemo",
    year: 2003,
    tag: "Movie"
  },
  {
    quote: "I’ll be back",
    source: "The Terminator (played by Arnold Schwarzenegger)",
    citation: "The Terminator",
    year: 1984,
    tag: "Movie"
  }
]

/***
 * `getRandomQuote` function
 * Returns a random quotes object from the array of quotes
 * 
 * @param {number} max - The highest number value
 * @return {object} - The new quotes object to print
***/

function getRandomQuote (max) {
  let randomNumber = Math.floor(Math.random() * max);
  return quotes[randomNumber]
}

/***
 * `updateBackgroundColor` function
 * Sets the background color based on 3 random numbers
***/

function updateBackgroundColor () {
  let red = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  document.body.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`;
}

/***
 * `printQuote` function
 * Creates an html string to hold all the quotes object data and replaces the previous quote with the new one
 * Calls updateBackgroundColor to refresh the background color of the website
***/

function printQuote () {
  let quote = getRandomQuote(quotes.length);
  
  let html = `<p class="quote">${quote['quote']}</p>`;
  html += `<p class="source">${quote['source']}`;
  if (quote.citation) {
    html += `<span class="citation">${quote['citation']}</span>`;
  }
  if (quote.year) {
    html += `<span class="year">${quote['year']}</span>`;
  };
  if (quote.tag) {
    html += `<span class="year">${quote['tag']}</span>`;
  };
  html += `</p>`;
  document.getElementById('quote-box').innerHTML = html;
  
  updateBackgroundColor();
}

/***
 * `quoteAutoRefresh` function
 * Uses setInterval to call the printQuote function every 10 seconds to refresh the page with a new quote/background color
***/

function quoteAutoRefresh () {
  return setInterval(printQuote, 10000);
}

quoteAutoRefresh();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);