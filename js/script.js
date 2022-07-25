{
    const onFormSubmit = (inputCurrencyElement, outputCurrencyElement, outputAmountElement) => {
        return (event) => {
            event.preventDefault();

            const inputAmountElement = document.querySelector(".js-amountToConvert");

            const inputAmount = inputAmountElement.value;
            let inputCurrency = inputCurrencyElement.value;
            let outputCurrency = outputCurrencyElement.value;

            if (inputCurrency.localeCompare(outputCurrency) !== 0) {
                outputAmountElement.value = getExchangeRate(inputCurrency, outputCurrency, inputAmount);
            } else {
                outputAmountElement.value = "Wybież różne waluty.";
            }
        };
    };

    const getExchangeRate = (inputCurrency, outputCurrency, inputAmount) => {

        switch (inputCurrency) {
            case "pln":
                switch (outputCurrency) {
                    case "eur":
                        rate = 0.21;
                        return calculateResult(rate, inputAmount);
                    case "gbp":
                        rate = 0.18;
                        return calculateResult(rate, inputAmount);
                    case "usd":
                        rate = 0.22;
                        return calculateResult(rate, inputAmount);
                };
                break;
            case "eur":
                switch (outputCurrency) {
                    case "pln":
                        rate = 4.72;
                        return calculateResult(rate, inputAmount);
                    case "gbp":
                        rate = 0.85;
                        return calculateResult(rate, inputAmount);
                    case "usd":
                        rate = 1.02;
                        return calculateResult(rate, inputAmount);
                };
                break;
            case "gbp":
                switch (outputCurrency) {
                    case "pln":
                        rate = 5.57;
                        return calculateResult(rate, inputAmount);
                    case "eur":
                        rate = 1.18;
                        return calculateResult(rate, inputAmount);
                    case "usd":
                        rate = 1.2;
                        return calculateResult(rate, inputAmount);
                };
                break;
            case "usd":
                switch (outputCurrency) {
                    case "pln":
                        rate = 4.62;
                        return calculateResult(rate, inputAmount);
                    case "eur":
                        rate = 0.98;
                        return calculateResult(rate, inputAmount);
                    case "gbp":
                        rate = 0.83;
                        return calculateResult(rate, inputAmount);
                };
                break;
        };
    };

    const calculateResult = (rate, inputAmount) => {
        return (rate * inputAmount).toFixed(2);
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

    const toggleCurrencies = (outputCurrencyElement, inputCurrencyElement, outputAmountElement) => {
        return (event) => {
            const buf = outputCurrencyElement.value;

            outputCurrencyElement.value = inputCurrencyElement.value;
            inputCurrencyElement.value = buf;
            outputAmountElement.value = "";
        };
    };

    init();
}