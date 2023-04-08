const button = document.querySelector(".new-quote");
button.addEventListener("click", getQuote);

const endpoint = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

const answerButton = document.querySelector("#js-tweet");



async function getQuote(){
    try{
        const response = await fetch(endpoint);
        if(!response.ok){
            throw Error(response.statusText);
        }
        const data = await response.json();
        console.log(data.drinks[0].strDrink);
        console.log(data.drinks[0].strInstructions)
        console.log(data.drinks[0].strDrinkThumb)

        displayQuote(data.drinks[0].strDrink);
        displayInstructions(data.drinks[0].strInstructions);
        displayImage(data.drinks[0].strDrinkThumb);

    }
    catch (err) {
        console.log(err);
        alert("Failed to fetch new drink");
    }
}
function displayQuote(quote){
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
}
function displayInstructions(quote){
    const instructionText = document.querySelector("#js-instruction-text");
    instructionText.textContent = quote;
}

function displayImage(quote){
    document.getElementById('placeholder').src = quote;
    // var img = new Image();
    // img.src = quote;
    // document.body.appendChild(img);
}
getQuote();