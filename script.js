const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99
const ACCESSORY_PRICE = 9.99;
const SPENDING_THRESHOLD = 200;

var bank_balance = 301.95
var amount = 0;

// function to calculate tax and format ammount
function calculateTax(amount) {
    return amount * TAX_RATE;
}
function formatAmount(amount) {
    return "$" + amount.toFixed( 2 );
}

//loop for buying until threshold
while (amount < bank_balance) {
    amount = amount + PHONE_PRICE;
    if (amount < SPENDING_THRESHOLD) {
      amount = amount + ACCESSORY_PRICE; 
    }
}
amount = amount + calculateTax(amount);

console.log(
    "Your purchase:" + formatAmount(amount)
);
if (amount > bank_balance) {
    console.log("You cannot afford this purchase")
}
else {
    console.log("Finally, You can buy Your phones!")
}
