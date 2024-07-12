let btn = document.getElementById("btn");
btn.addEventListener("click", function money() {
    let amount = document.getElementById("amount").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;

    if (amount === "" || isNaN(amount)) {
        alert("Xato!");
        return;
    }

    fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
        .then((responce) => responce.json())
        .then((data) => {

            let rate = data.rates[to];

            let convertedAmount = (amount * rate).toFixed(2);
            let result = document.getElementById("result").textContent = (amount + from + " = " + convertedAmount + to);

        }) .catch((error) => {
            console.error("Error fetching exchange rate:", error);
        })

}) 

