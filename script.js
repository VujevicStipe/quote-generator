const btn = document.querySelector("#btn");
const quote = document.querySelector("#qt");
const author = document.querySelector("#auth");

//https://github.com/lukePeavey/quotable
const url = "https://api.quotable.io/random";

function getquote() {
    fetch(url)
        .then((data) => data.json())
        .then((item) => {
            console.log(item.content);
            console.log(item.author);
            quote.innerHTML = item.content;
            author.innerHTML = item.author;
        });
};

window.addEventListener("load", getquote);
btn.addEventListener("click", getquote);


