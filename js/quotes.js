const quotes = [
    {
        quote: "kim",
        author: "hyunwoo",
    },
    {
        quote: "choi",
        author: "bumjin",
    },
    {
        quote: "park",
        author: "kipyo",
    },
    {
        quote: "jeon",
        author: "chaeyoun",
    },
    {
        quote: "kang",
        author: "guyong",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;