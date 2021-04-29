let currencyOwned = document.querySelector(".js-currencyOwned"); // currency amount
let currencyTypeText = document.querySelector(".js-currencyTypeText"); //catching Text depending of currency owned
let formCalc = document.querySelector(".js-form-calc"); //catching the form
console.log(currencyOwned);


let answer = document.querySelector(".answer"); //catching the full answer element block

let currencyPln = document.querySelector(".js-radio-pln"); //catching currency radio button
let currencyEur = document.querySelector(".js-radio-eur"); //catching currency radio button
let currencyGbp = document.querySelector(".js-radio-gbp"); //catching currency radio button
let currencyUsd = document.querySelector(".js-radio-usd"); //catching currency radio button

let valueEur = document.querySelector(".js-eur-value"); //catching currency exchange value
let valueGbp = document.querySelector(".js-gbp-value"); //catching currency exchange value
let valueUsd = document.querySelector(".js-usd-value"); //catching currency exchange value
let valueBtc = document.querySelector(".js-btc-value"); //catching currency exchange value
let valueEth = document.querySelector(".js-eth-value"); //catching currency exchange value
let valueBnb = document.querySelector(".js-bnb-value"); //catching currency exchange value
console.log(valueEur);
console.log(valueGbp);

let exchangeBtc = document.querySelector(".js-howMany-btc"); //catching currency exchange value
let exchangeEth = document.querySelector(".js-howMany-eth"); //catching currency exchange value
let exchangeBnb = document.querySelector(".js-howMany-bnb"); //catching currency exchange value

//below we have got historical table needed values

let btc20value = document.querySelector(".js-btc20-value");
let btc19value = document.querySelector(".js-btc19-value");
let btc18value = document.querySelector(".js-btc18-value");
let eth20value = document.querySelector(".js-eth20-value");
let eth19value = document.querySelector(".js-eth19-value");
let eth18value = document.querySelector(".js-eth18-value");
let bnb20value = document.querySelector(".js-bnb20-value");
let bnb19value = document.querySelector(".js-bnb19-value");
let bnb18value = document.querySelector(".js-bnb18-value");
console.log(btc20value);

let dreambtc20 = document.querySelector(".js-dream_btc20");
let dreambtc19 = document.querySelector(".js-dream_btc19");
let dreambtc18 = document.querySelector(".js-dream_btc18");
let dreameth20 = document.querySelector(".js-dream_eth20");
let dreameth19 = document.querySelector(".js-dream_eth19");
let dreameth18 = document.querySelector(".js-dream_eth18");
let dreambnb20 = document.querySelector(".js-dream_bnb20");
let dreambnb19 = document.querySelector(".js-dream_bnb19");
let dreambnb18 = document.querySelector(".js-dream_bnb18");
console.log(dreambtc20);

let dreambtc20now = document.querySelector(".js-dream_btc20Now");
let dreambtc19now = document.querySelector(".js-dream_btc19Now");
let dreambtc18now = document.querySelector(".js-dream_btc18Now");
let dreameth20now = document.querySelector(".js-dream_eth20Now");
let dreameth19now = document.querySelector(".js-dream_eth19Now");
let dreameth18now = document.querySelector(".js-dream_eth18Now");
let dreambnb20now = document.querySelector(".js-dream_bnb20Now");
let dreambnb19now = document.querySelector(".js-dream_bnb19Now");
let dreambnb18now = document.querySelector(".js-dream_bnb18Now");
console.log(dreambtc20now);


// below, we will change text depending on checked radio setting up currency type

formCalc.addEventListener("change", () => {
    switch (true) {
        case currencyPln.checked:
            currencyTypeText.innerText = "Ile posiadasz złotych:";
            break;
        case currencyEur.checked:
            currencyTypeText.innerText = "Ile posiadasz euro:";
            break;
        case currencyGbp.checked:
            currencyTypeText.innerText = "Ile posiadasz funtów:";
            break;
        case currencyUsd.checked:
            currencyTypeText.innerText = "Ile posiadasz dolarów:";
            break;

    };
});
formCalc.addEventListener("submit", (event) => {
    event.preventDefault();
    switch (true) {
        case currencyPln.checked:
            exchangeBtc.innerText = currencyOwned.value / valueBtc.value;
            exchangeEth.innerText = currencyOwned.value / valueEth.value;
            exchangeBnb.innerText = currencyOwned.value / valueBnb.value;
            //below is the dream table
            dreambtc20.innerText = currencyOwned.value / btc20value.value;
            dreambtc19.innerText = currencyOwned.value / btc19value.value;
            dreambtc18.innerText = currencyOwned.value / btc18value.value;
            dreameth20.innerText = currencyOwned.value / eth20value.value;
            dreameth19.innerText = currencyOwned.value / eth19value.value;
            dreameth18.innerText = currencyOwned.value / eth18value.value;
            dreambnb20.innerText = currencyOwned.value / bnb20value.value;
            dreambnb19.innerText = currencyOwned.value / bnb19value.value;
            dreambnb18.innerText = currencyOwned.value / bnb18value.value;
            break;
        case currencyEur.checked:
            exchangeBtc.innerText = currencyOwned.value * valueEur.value / valueBtc.value;
            exchangeEth.innerText = currencyOwned.value * valueEur.value / valueEth.value;
            exchangeBnb.innerText = currencyOwned.value * valueEur.value / valueBnb.value;
            dreambtc20.innerText = currencyOwned.value * valueEur.value / btc20value;
            dreambtc19.innerText = currencyOwned.value * valueEur.value / btc19value;
            dreambtc18.innerText = currencyOwned.value * valueEur.value / btc18value;
            dreambtc20.innerText = currencyOwned.value * valueEur.value / btc20value;
            dreambtc19.innerText = currencyOwned.value * valueEur.value / btc19value;
            dreambtc18.innerText = currencyOwned.value * valueEur.value / btc18value;
            dreameth20.innerText = currencyOwned.value * valueEur.value / eth20value;
            dreameth19.innerText = currencyOwned.value * valueEur.value / eth19value;
            dreameth18.innerText = currencyOwned.value * valueEur.value / eth18value;
            dreambnb20.innerText = currencyOwned.value * valueEur.value / bnb20value;
            dreambnb19.innerText = currencyOwned.value * valueEur.value / bnb19value;
            dreambnb18.innerText = currencyOwned.value * valueEur.value / bnb18value;
            break;
        case currencyGbp.checked:
            exchangeBtc.innerText = currencyOwned.value * valueGbp.value / valueBtc.value;
            exchangeEth.innerText = currencyOwned.value * valueGbp.value / valueEth.value;
            exchangeBnb.innerText = currencyOwned.value * valueGbp.value / valueBnb.value;
            dreambtc20.innerText = currencyOwned.value * valueGbp.value / btc20value;
            dreambtc19.innerText = currencyOwned.value * valueGbp.value / btc19value;
            dreambtc18.innerText = currencyOwned.value * valueGbp.value / btc18value;
            dreambtc20.innerText = currencyOwned.value * valueGbp.value / btc20value;
            dreambtc19.innerText = currencyOwned.value * valueGbp.value / btc19value;
            dreambtc18.innerText = currencyOwned.value * valueGbp.value / btc18value;
            dreameth20.innerText = currencyOwned.value * valueGbp.value / eth20value;
            dreameth19.innerText = currencyOwned.value * valueGbp.value / eth19value;
            dreameth18.innerText = currencyOwned.value * valueGbp.value / eth18value;
            dreambnb20.innerText = currencyOwned.value * valueGbp.value / bnb20value;
            dreambnb19.innerText = currencyOwned.value * valueGbp.value / bnb19value;
            dreambnb18.innerText = currencyOwned.value * valueGbp.value / bnb18value;
            break;
        case currencyUsd.checked:
            exchangeBtc.innerText = currencyOwned.value * valueUsd.value / valueBtc.value;
            exchangeEth.innerText = currencyOwned.value * valueUsd.value / valueEth.value;
            exchangeBnb.innerText = currencyOwned.value * valueUsd.value / valueBnb.value;
            dreambtc20.innerText = currencyOwned.value * valueUsd.value / btc20value;
            dreambtc19.innerText = currencyOwned.value * valueUsd.value / btc19value;
            dreambtc18.innerText = currencyOwned.value * valueUsd.value / btc18value;
            dreambtc20.innerText = currencyOwned.value * valueUsd.value / btc20value;
            dreambtc19.innerText = currencyOwned.value * valueUsd.value / btc19value;
            dreambtc18.innerText = currencyOwned.value * valueUsd.value / btc18value;
            dreameth20.innerText = currencyOwned.value * valueUsd.value / eth20value;
            dreameth19.innerText = currencyOwned.value * valueUsd.value / eth19value;
            dreameth18.innerText = currencyOwned.value * valueUsd.value / eth18value;
            dreambnb20.innerText = currencyOwned.value * valueUsd.value / bnb20value;
            dreambnb19.innerText = currencyOwned.value * valueUsd.value / bnb19value;
            dreambnb18.innerText = currencyOwned.value * valueUsd.value / bnb18value;
            break;

    };
    dreambtc20now.innerText = (dreambtc20 - exchangeBtc) * valueBtc;
    dreambtc19now.innerText = (dreambtc19 - exchangeBtc) * valueBtc;
    dreambtc18now.innerText = (dreambtc18 - exchangeBtc) * valueBtc;
    dreameth20now.innerText = (dreameth20 - exchangeEth) * valueEth;
    dreameth19now.innerText = (dreameth19 - exchangeEth) * valueEth;
    dreameth18now.innerText = (dreameth18 - exchangeEth) * valueEth;
    dreambnb20now.innerText = (dreambnb20 - exchangeBnb) * valueBnb;
    dreambnb19now.innerText = (dreambnb19 - exchangeBnb) * valueBnb;
    dreambnb18now.innerText = (dreambnb18 - exchangeBnb) * valueBnb;
});
console.log(dreambtc20);
