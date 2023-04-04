const button = document.querySelector(".new-quote");
button.addEventListener("click", getQuote);

const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

const answerButton = document.querySelector("#js-tweet");
answerButton.addEventListener("click", showAnswer);



async function getQuote(){
    try{
        const response = await fetch(endpoint);
        if(!response.ok){
            throw Error(response.statusText);
        }
        const json = await response.json();
        //console.log(json.question);
        displayQuote(json.question);
        showAnswer(json.answer);

    }
    catch (err) {
        console.log(err);
        alert("Failed to fetch new trivia");
    }
}
function displayQuote(quote){
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
}
function showAnswer(quote){
    const answerText = document.querySelector("#js-answer-text");
    answerText.textContent = quote;
}

getQuote();