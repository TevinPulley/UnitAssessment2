///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
  {
    name: "pizza",
    price: 9.99,
  },
  {
    name: "pasta",
    price: 8.99,
  },
  {
    name: "salad",
    price: 7.99,
  },
];

//CODE HERE
const cartTotal = cart.reduce(function (acc, elem) {
  return acc + elem.price;
}, 0);

console.log(cartTotal);
//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = function (cartTotal, couponValue, tax) {
  return cartTotal * tax + cartTotal + couponValue;
};
console.log(calcFinalPrice(26.97, -5, 0.06));
//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
customerObject 
"type of food" such as entree or desert, whatever they want. and will be a string.
Number of Calories. people count them, lets do it for them. will be a number.
tags. such as gluten free or vegetarian. customer is looking for each of these. it will be an array of strings, as there are multiple values.
price:Number. customer is on a budget and wants to know the price. will be a number.



*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const customerObject = [
  {
    type: "entree",
    Calories: 900,
    tags: ["gluton-free", "vegetarian"],
    price: 6,
  },
];

//I thought this was strange... hopefully i didnt misunderstand the question.
