/* Write a script for processing a purchase in a store.

- The user's balance is stored in the "balance" variable
- The purchase amount is stored in the "payment" variable

- Before chaking, display the following message:
"The total cost of the order is [number of] credits. Check the amount of available funds in the account."

- If the purchase amount does not exeed the balance:
   - Substract the purchase amount from the balance
   - Displaythe messagge: "There are [number of] credits left in the account"
- If the purchase amount exeeds the balance:
   - Display the massege: "There are not enough funds in the account for the operation!"
   - At the and, display the message: "Operation completed" 

"Evrething is fine, we withdraw money...Thank you for your purchase!"
*/

let balance = 10000;
const payment = 2000;

console.log(`The total cost of the order is ${payment} credits. Check the amount of available funds in the account`);

if (balance >= payment) {
    console.log('Evrething is fine, we withdraw money...Thank you for your purchase!');

    balance -= payment;

    console.log(`There are ${balance} credits left in the account`);
}else{
    console.log('There are not enough funds in the account for the operation!');
}

console.log('Operation completed');

