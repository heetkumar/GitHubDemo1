var x = "Hello World!"
const a1 = 10;
const b1 = 40;
var a = function () 
{ 
    var x = "Hi";
    console.log("a: message = "+x);
    b();
    
};
const b = function ()
{
    console.log("b: message = "+x);
    console.log(h(a1,b1));
}

function h (a1,b1)
{
    console.log("h inside : "+a1+b1);
    return a1+(+b1);
}

var multiplier = function (mult) {
     var imp = function (x) {
         return mult*x;
     };
     return imp;
}

// here in arguments also we take function name also in JS it possible only in JS.

var dooperation = function (x,operation) {
    return operation(x); // assign the value to inner function 
}

var multnum = multiplier(10);  // creating the object of the function

var result = dooperation(5,multnum);
console.log(result);

var z = {t: 10};
var p1 = z;
console.log(z);
console.log(p1);

/* alert is used to display the warning box */

alert("Result of 5*10 :"+result);

/* prompt box for taking input from the user */

var input = prompt("Please enter your name");

/* it also provide the ok and cancel button . 
   After clicking the OK input value will be stored into the variable .
*/

alert(input); // with the help of alert box we are displaying input from the user 

/* Confirm box :

A confirm box is often used to have the user verify or accept something.
When a confirm box pops up, the user must click either OK or Cancel to proceed.

If the user clicks OK, the box returns true. If the user clicks Cancel, the box returns false.
*/

var ipt = confirm("Do you really want to exit ?");
// showing the result of confirm box throw alert box

if (ipt == true)
{
    alert("Thanks for visiting");
}
else
{
    alert("Thanks for staying with us");
}

document.write(" Direct displaying to the webpage ( Displaing the sum of 10 and 5):",10+5,"\n");