let inputCurrencyElement = document.querySelector(".js-convertFrom");
let inputAmountElement = document.querySelector(".js-amountToConvert");
let outputCurrencyElement = document.querySelector(".js-convertTo");
let outputAmountElement = document.querySelector(".js-amountAfterConvert");
let formElement = document.querySelector(".js-form");
let changeButton = document.querySelector(".js-form__button")

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let inputCurrency = inputCurrencyElement.value;
    let inputAmount = inputAmountElement.value;
    let outputCurrency = outputCurrencyElement.value;
    let outputAmount = "";
    if (inputCurrency.localeCompare(outputCurrency) !== 0) {
        switch (inputCurrency) {
            case "pln":
                inputCurrency = 1 / 4.7;
                switch (outputCurrency) {
                    case "eur":
                        outputCurrency = 1;
                        outputAmount = (inputCurrency / outputCurrency * inputAmount).toFixed(2);
                        break;
                    case "gbp":
                        outputCurrency = 1 / 0.86;
                        outputAmount = (inputCurrency / outputCurrency * inputAmount).toFixed(2);
                        break;
                    case "usd":
                        outputCurrency = 1 / 1.05;
                        outputAmount = (inputCurrency / outputCurrency * inputAmount).toFixed(2);
                        break;
                }
                outputAmountElement.value = outputAmount;
                break;
            case "eur":
                inputCurrency = 1;
                switch (outputCurrency) {
                    case "pln":
                        outputCurrency = 1 / 4.7;
                        outputAmount = (inputCurrency / outputCurrency * inputAmount).toFixed(2);
                        break;
                    case "gbp":
                        outputCurrency = 1 / 0.86;
                        outputAmount = (inputCurrency / outputCurrency * inputAmount).toFixed(2);
                        break;
                    case "usd":
                        outputCurrency = 1 / 1.05;
                        outputAmount = (inputCurrency / outputCurrency * inputAmount).toFixed(2);
                        break;
                }
                outputAmountElement.value = outputAmount;
                break;
            case "gbp":
                inputCurrency = 1 / 0.86;
                switch (outputCurrency) {
                    case "pln":
                        outputCurrency = 1 / 4.7;
                        outputAmount = (inputCurrency / outputCurrency * inputAmount).toFixed(2);
                        break;
                    case "eur":
                        outputCurrency = 1;
                        outputAmount = (inputCurrency / outputCurrency * inputAmount).toFixed(2);
                        break;
                    case "usd":
                        outputCurrency = 1 / 1.05;
                        outputAmount = (inputCurrency / outputCurrency * inputAmount).toFixed(2);
                        break;
                }
                outputAmountElement.value = outputAmount;
                break;
            case "usd":
                inputCurrency = 1 / 1.05;
                switch (outputCurrency) {
                    case "pln":
                        outputCurrency = 1 / 4.7;
                        outputAmount = (inputCurrency / outputCurrency * inputAmount).toFixed(2);
                        break;
                    case "eur":
                        outputCurrency = 1;
                        outputAmount = (inputCurrency / outputCurrency * inputAmount).toFixed(2);
                        break;
                    case "gbp":
                        outputCurrency = 1 / 1.05;
                        outputAmount = (inputCurrency / outputCurrency * inputAmount).toFixed(2);
                        break;
                }
                outputAmountElement.value = outputAmount;
                break;
        }
    } else {
        outputAmountElement.value = "Wybież różne waluty.";
    }
});

changeButton.addEventListener("click", () => {
    buf = outputCurrencyElement.value;
    outputCurrencyElement.value = inputCurrencyElement.value;
    inputCurrencyElement.value = buf;
    outputAmountElement.value = "";
})