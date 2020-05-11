const exchangeRate = 23208;
console.log("we here ")
let currencySelector = prompt("Which Currency do you want to change ?");
let amountToChange = prompt("How much do you want to change ?")
let result = 0


function vndToUsd(amountVnd) {
    let convertedAmount = (amountVnd / exchangeRate).toFixed(2)
    return convertedAmount
}

function usdToVnd(amountUsd) {
    console.log("user typed amount", amountUsd)
    let convertedAmount = (amountUsd * exchangeRate).toFixed(2)
    return convertedAmount
}

//milestone 6

function bilateralConvertion() {
    if (typeof (parseInt(amountToChange)) !== "number") { alert("Must enter the number") }
    else {
        if (currencySelector === "VND") {
            result = usdToVnd(parseInt(amountToChange))

        } else if (currencySelector === "USD") {
            result = vndToUsd(parseInt(amountToChange))

        }
        alert("your total amount is ", result)

    }

    bilateralConvertion();



    //Milstone 7

    function formatCurrency(type, value) {
        const formatter = new Intl.NumberFormat(type, {
            currency: type,
            style: "currency"
        });
        return formatter.format(value);
    }

    const vietnam = "5,800,175"
    console.log(new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(number));

    const japan = "26,984"
    console.log(new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(number));

    const usa = "215.51"
    console.log(new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(number));

