{
    const getExchangeRate = (inputCurrency, outputCurrency, inputAmount) => {

        switch (inputCurrency) {
            case "pln":
                inputCurrency = 1 / 4.7;
                switch (outputCurrency) {
                    case "eur":
                        outputCurrency = 1;
                        return calculateResult;
                    case "gbp":
                        outputCurrency = 1 / 0.86;
                        return calculateResult;
                    case "usd":
                        outputCurrency = 1 / 1.05;
                        return calculateResult;
                }
                break;
            case "eur":
                inputCurrency = 1;
                switch (outputCurrency) {
                    case "pln":
                        outputCurrency = 1 / 4.7;
                        return calculateResult;
                    case "gbp":
                        outputCurrency = 1 / 0.86;
                        return calculateResult;
                    case "usd":
                        outputCurrency = 1 / 1.05;
                        return calculateResult;
                }
                break;
            case "gbp":
                inputCurrency = 1 / 0.86;
                switch (outputCurrency) {
                    case "pln":
                        outputCurrency = 1 / 4.7;
                        return calculateResult;
                    case "eur":
                        outputCurrency = 1;
                        return calculateResult;
                    case "usd":
                        outputCurrency = 1 / 1.05;
                        return calculateResult;
                }
                break;
            case "usd":
                inputCurrency = 1 / 1.05;
                switch (outputCurrency) {
                    case "pln":
                        outputCurrency = 1 / 4.7;
                        return calculateResult;
                    case "eur":
                        outputCurrency = 1;
                        return calculateResult;
                    case "gbp":
                        outputCurrency = 1 / 1.05;
                        return calculateResult;
                }
                break;
        }
    }

    const calculateResult = (inputCurrency, outputCurrency, inputAmount) => {
        return (inputCurrency / outputCurrency * inputAmount).toFixed(2);
    }

    const outputAmountElement = document.querySelector(".js-amountAfterConvert");
    const formElement = document.querySelector(".js-form");
    const changeButton = document.querySelector(".js-form__button")


    formElement.addEventListener("submit", (event) => {
        event.preventDefault();

        const inputCurrencyElement = document.querySelector(".js-convertFrom");
        const inputAmountElement = document.querySelector(".js-amountToConvert");
        const outputCurrencyElement = document.querySelector(".js-convertTo");
        const inputAmount = inputAmountElement.value;
        let inputCurrency = inputCurrencyElement.value;
        let outputCurrency = outputCurrencyElement.value;
        let outputAmount = "";
        if (inputCurrency.localeCompare(outputCurrency) !== 0) {
            outputAmountElement.value = getExchangeRate(inputCurrency, outputCurrency, inputAmount);
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
}