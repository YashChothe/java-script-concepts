const customerId = 12345;
let customerEmail = "yashchothe@gmail.com";
var customerPassword = "34526";
customerCity="jaipur";

// customerId=34; not allowed as it is constant

customerEmail="yc@gmail.com";
customerPassword="543";
customerCity= "Bengaluru"

console.log(customerId);


/*
     Prefer not to use var
because of issue in block scope and functional scope


*/
console.table([customerId,customerEmail,customerPassword,customerCity]);
