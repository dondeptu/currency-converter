{
    const onFormSubmit = (inputCurrencyElement, outputCurrencyElement, outputAmountElement) => {
        return (event) => {
            event.preventDefault();
            const inputAmountElement = document.querySelector(".js-amountToConvert");

            const inputAmount = inputAmountElement.value;
            const inputCurrency = inputCurrencyElement.value;
            const outputCurrency = outputCurrencyElement.value;

            outputAmountElement.value = inputCurrency.localeCompare(outputCurrency) !== 0 ? calculateResult(inputCurrency, outputCurrency, inputAmount).toFixed(2) : "Wybież różne waluty.";
        };
    };

    const getExchangeRate = (currency) => {
        switch (currency) {
            case "eur":
                return 4.72;
            case "gbp":
                return 5.57;
            case "usd":
                return 4.62;
            case "pln":
                return 1.0;
        }
    }

    const calculateResult = (inputCurrency, outputCurrency, inputAmount) => {
        return ((inputAmount * getExchangeRate(inputCurrency)) / getExchangeRate(outputCurrency));
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