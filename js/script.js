{
    const onFormSubmit = (inputCurrencyElement, outputCurrencyElement, outputAmountElement) => {
        return (event) => {
            event.preventDefault();
            const inputAmountElement = document.querySelector(".js-amountToConvert");

            const inputAmount = inputAmountElement.value;
            const inputCurrency = inputCurrencyElement.value;
            const outputCurrency = outputCurrencyElement.value;

            if (inputCurrency.localeCompare(outputCurrency) !== 0) {
                outputAmountElement.value = calculateResult(getExchangeRate(inputCurrency, outputCurrency), inputAmount);
            } else {
                outputAmountElement.value = "Wybież różne waluty.";
            }
        };
    };

    const getExchangeRate = (inputCurrency, outputCurrency) => {
        switch (inputCurrency) {
            case "pln":
                switch (outputCurrency) {
                    case "eur":
                        return 0.21;
                    case "gbp":
                        return 0.18;
                    case "usd":
                        return 0.22;
                };
                break;
            case "eur":
                switch (outputCurrency) {
                    case "pln":
                        return 4.72;
                    case "gbp":
                        return 0.85;
                    case "usd":
                        return 1.02;
                };
                break;
            case "gbp":
                switch (outputCurrency) {
                    case "pln":
                        return 5.57;
                    case "eur":
                        return 1.18;
                    case "usd":
                        return 1.2;
                };
                break;
            case "usd":
                switch (outputCurrency) {
                    case "pln":
                        return 4.62;
                    case "eur":
                        return 0.98;
                    case "gbp":
                        return 0.83;
                };
                break;
        };
    };

    const calculateResult = (rate, inputAmount) => {
        return (rate * inputAmount).toFixed(2);
    };

    const toggleCurrencies = (outputCurrencyElement, inputCurrencyElement, outputAmountElement) => {
        return (event) => {
            const buf = outputCurrencyElement.value;

            outputCurrencyElement.value = inputCurrencyElement.value;
            inputCurrencyElement.value = buf;
            outputAmountElement.value = "";
        };
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");
        const changeButton = document.querySelector(".js-form__button");
        const outputCurrencyElement = document.querySelector(".js-convertTo");
        const inputCurrencyElement = document.querySelector(".js-convertFrom");
        const outputAmountElement = document.querySelector(".js-amountAfterConvert");

        formElement.addEventListener("submit", onFormSubmit(inputCurrencyElement, outputCurrencyElement, outputAmountElement));
        changeButton.addEventListener("click", toggleCurrencies(outputCurrencyElement, inputCurrencyElement, outputAmountElement));
    };

    init();
}