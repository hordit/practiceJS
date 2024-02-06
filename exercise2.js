/* Write a script to calculate the amount of a purchase with a discount depending on the amount spent over the entire period(affiliate program).

- The total amount spent is stored in the variable "totalSpent"
- The amount of the current payment is stored in the variable "payment"
- The discount is stored in the variable "discount"

- If totalSpent from 100 до 1000 - bronze partner, discount 2%
- If totalSpent from 1000 до 5000 - silver partner, discount 5%
- If totalSpent more than 5000 - gold partner, discount 10%
- If totalSpent less than 100 - not a partner, discount 0%

- As a result, display the message: "We are placing an order for the amount [totalSpent] with a discount of [discount] %".

// 'Bronze partner, discount 2%'
// 'Silver partner, discount 5%'
// 'Gold partner, discount 10%'
// 'You don't have an affiliate discount yet'
*/

// 1 make wares
const totalSpent = 5000;
let payment = 500;
let discount = 0;

// 2 write the discount conditions
if(totalSpent >= 100 && totalSpent < 1000) {
    discount = 0.02;
    console.log('Bronze partner, discount 2%');
} else if(totalSpent >= 1000 && totalSpent < 5000) {
    discount = 0.05;
    console.log('Silver partner, discount 5%');
} else if(totalSpent >= 5000) {
    discount = 0.1;
    console.log('Gold partner, discount 10%');
} else {
    console.log("You don't have an affiliate discount yet");
}
payment = payment - payment * discount;
// 3 log messagge with totalSpent and discount
console.log(`We are placing an order for the amount ${payment} with a discount of ${discount * 100} %.`);


