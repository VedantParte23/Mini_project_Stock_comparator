function searchStock() {
    const stock = document.getElementById("stockInput").value;

    if (stock === "") {
        document.getElementById("stockResult").innerHTML =
            "<p>Please enter a stock ticker.</p>";
        return;
    }

    document.getElementById("stockResult").innerHTML =
        `<p>You searched for: <strong>${stock.toUpperCase()}</strong></p>`;
}
function compareStocks() {
    const stock1 = document.getElementById("stock1").value;
    const stock2 = document.getElementById("stock2").value;

    if (stock1 === "" || stock2 === "") {
        document.getElementById("compareResult").innerHTML =
            "<p>Please enter both stock tickers.</p>";
        return;
    }

    document.getElementById("compareResult").innerHTML =
        `<p>Comparing <strong>${stock1.toUpperCase()}</strong> 
        with <strong>${stock2.toUpperCase()}</strong></p>`;
}