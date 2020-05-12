const USD = {
    VND: 23388.85,
    EUR: 0.92,
    KRW: 1223.56,
    USD: 1,
    JPY: 107.64,
    CNY: 7.10

}




let from = document.getElementById("fromList").value // tag from HTML
let to = document.getElementById("toList").value // tag from HTML
let amount = document.getElementById("amountInput").value // tag from HTML
let result = document.getElementById("resultArea"); // tag from HTML
let convertedAmount = 0 // use for get converted value from function 
let formatamount = ''
console.log(USD[from])


function convertnow() {

    let from = document.getElementById("fromList").value// tag from HTML
    let to = document.getElementById("toList").value// tag from HTML
    let amount = document.getElementById("amountInput").value


    console.log(from, to, amount)
    convertedamount = USD[to] / USD[from] * amount
    let finalResult = formatCurrency(to.toString(), convertedamount)

    console.log(finalResult)
    resultArea.innerHTML = `Result:   ${amount} ${from} to ${to} is ${finalResult}`
}



function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
        currency: type,
        style: "currency"
    });
    return formatter.format(value);
}


