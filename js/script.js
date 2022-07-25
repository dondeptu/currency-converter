{
    const getExchangeRate = (inputCurrency, outputCurrency, inputAmount) => {

        switch (inputCurrency) {
            case "pln":
                switch (outputCurrency) {
                    case "eur":
                        rate = 0.21;
                        return (rate * inputAmount).toFixed(2);
                    case "gbp":
                        rate = 0.18;
                        return (rate * inputAmount).toFixed(2);
                    case "usd":
                        rate = 0.22;
                        return (rate * inputAmount).toFixed(2);
                }
                break;
            case "eur":
                switch (outputCurrency) {
                    case "pln":
                        rate = 4.72;
                        return (rate * inputAmount).toFixed(2);
                    case "gbp":
                        rate = 0.85;
                        return (rate * inputAmount).toFixed(2);
                    case "usd":
                        rate = 1.02;
                        return (rate * inputAmount).toFixed(2);
                }
                break;
            case "gbp":
                switch (outputCurrency) {
                    case "pln":
                        rate = 5.57;
                        return (rate * inputAmount).toFixed(2);
                    case "eur":
                        rate = 1.18;
                        return (rate * inputAmount).toFixed(2);
                    case "usd":
                        rate = 1.2;
                        return (rate * inputAmount).toFixed(2);
                }
                break;
            case "usd":
                switch (outputCurrency) {
                    case "pln":
                        rate = 4.62;
                        return (rate * inputAmount).toFixed(2);
                    case "eur":
                        rate = 0.98;
                        return (rate * inputAmount).toFixed(2);
                    case "gbp":
                        rate = 0.83;
                        return (rate * inputAmount).toFixed(2);
                }
                break;
        }
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