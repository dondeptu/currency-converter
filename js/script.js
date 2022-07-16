let inputCurrencyElement = document.querySelector(".js-convertFrom");
let inputAmountElement = document.querySelector(".js-amountToConvert");
let outputCurrencyElement = document.querySelector(".js-convertTo");
let outputAmountElement = document.querySelector(".js-amountAfterConvert");
let formElement = document.querySelector(".js-form");
let eurToPln = 4.7;
let eurToGbp = 0.86;
let eurToUsd = 1.05;
let changeButton = document.querySelector(".js-form__button")

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let inputCurrency = inputCurrencyElement.value;
    let inputAmount = inputAmountElement.value;
    let outputCurrency = outputCurrencyElement.value;
    let outputAmount = "";
    console.log(inputCurrency.localeCompare(outputCurrency));
    if (inputCurrency.localeCompare(outputCurrency) !== 0) {
        switch (inputCurrency) {
            case "pln":
                if (outputCurrency === "eur") {
                    outputAmount = (1 / eurToPln * inputAmount).toFixed(2);
                } else if (outputCurrency === "gbp") {
                    outputAmount = (1 / eurToPln * inputAmount * eurToGbp).toFixed(2);
                } else if (outputCurrency === "usd") {
                    outputAmount = (1 / eurToPln * inputAmount * eurToUsd).toFixed(2);
                }
                console.log(outputAmount);
                outputAmountElement.value = outputAmount;
                break;
            case "eur":
                if (outputCurrency === "pln") {
                    outputAmount = (eurToPln * inputAmount).toFixed(2);
                } else if (outputCurrency === "gbp") {
                    outputAmount = (eurToGbp * inputAmount).toFixed(2);
                } else if (outputCurrency === "usd") {
                    outputAmount = (eurToUsd * inputAmount).toFixed(2);
                }
                console.log(outputAmount);
                outputAmountElement.value = outputAmount;
                break;
            case "gbp":
                if (outputCurrency === "pln") {
                    outputAmount = (1 / eurToGbp * inputAmount * eurToPln).toFixed(2);
                } else if (outputCurrency === "eur") {
                    outputAmount = (eurToGbp * inputAmount).toFixed(2);
                } else if (outputCurrency === "usd") {
                    outputAmount = (1 / eurToGbp * inputAmount * eurToUsd).toFixed(2);
                }
                console.log(outputAmount);
                outputAmountElement.value = outputAmount;
                break;
            case "usd":
                if (outputCurrency === "pln") {
                    outputAmount = (1 / eurToUsd * inputAmount * eurToPln).toFixed(2);
                } else if (outputCurrency === "eur") {
                    outputAmount = (1 / eurToUsd * inputAmount).toFixed(2);
                } else if (outputCurrency === "gbp") {
                    outputAmount = (1 / eurToUsd * inputAmount * eurToGbp).toFixed(2);
                }
                console.log(outputAmount);
                outputAmountElement.value = outputAmount;
                break;
            default:
                console.log("Coś poszło nie tak");
        }
    } else {
        console.log("Waluty nie mogą być takie same");
        outputAmountElement.value = "Wybież różne waluty.";
    }
});

changeButton.addEventListener("click", () => {
    buf = outputCurrencyElement.value;
    outputCurrencyElement.value = inputCurrencyElement.value;
    inputCurrencyElement.value = buf;
    outputAmountElement.value = "";
})