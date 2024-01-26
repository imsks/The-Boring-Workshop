"use strict";
function addTwoNumbers({ a, b }) {
    return a + b;
}
const a = 2;
const b = 5;
console.log(addTwoNumbers({ a, b }));
function addThreeNumbers({ a, b, c, calledBy = "DEFAULT" }) {
    console.log("Function called by ", calledBy);
    return a + b + c;
}
const c = 10;
addThreeNumbers({ a, b, c });
addThreeNumbers({ a, b, c, calledBy: "USER" });
