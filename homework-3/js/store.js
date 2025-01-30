const price = 40.99; //realistically this price will likely change but tbh as a programmer I don't care so const
const tax = 0.07; //sales tax is pretty much a constant throughout a state
const discount = 0.10; //once again this is just a constant because I say so
let totalAfterTax = price * (1 + tax); //a calculation, use let
let discountedAfterTax = price * (1 + tax) * (1 - discount); //a calculation, use let
console.log("Total After Tax: ", "$" + totalAfterTax.toFixed(2));
console.log("Eligible for discount?", totalAfterTax>50);
console.log("Discounted Total After Tax: ", "$" + discountedAfterTax.toFixed(2));
