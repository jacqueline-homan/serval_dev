//alert("Hello, I'm a JavaScript alert box!");
//var name = prompt("What is your name?");
//alert("Hello, " + name);

//var month, day, year;

/*
a = 5;
a = 1000000;
a = 123.456;
a = -700;
alert(a);
*/

var firstName = prompt("Enter your first name.");
alert("Hello, " + firstName + "!" + " Your name has: " + firstName.length + " letters.");

/*var balance = 500;
var newbal = [10..1000];
var userinput = "Yes" || "No";
if ((balance =< 10) && (balance => 0)) {
	prompt("Your account balance has fallen to or below $10. Would you like to add funds?"){
		if (userinput = "Yes"){
			prompt("How much would you like to add?")
				alert("Your balance is now: " + newbal)
		}else if (userinput = "No"){
			return;
		}		
	}
}
*/

/*
var grade = "premium";
userinput = prompt("what fuel grade do you want?");
switch (grade) {
	case "regular": 
		alert("Price: $2.79/gal");
	break;
	case "plus":
		alert("Price: $3.15/gal")
	break;
	case "premium":
		alert("Price: $3.85/gal");
	break;
	case "diesel":
		alert("Price: $4.15/gal");
	break;
	default:
		alert("Invalid grade");
}
*/

/*Best Practice: Define or declare your function first at the
top of your js file, then call them.
*/
var headline = document.getElementById('mainHeadline');
headline.innerHTML = "Serval Cat Starts Dev Bootcamp";

function servalTalk() {
	document.write("Hi, I'm Hazuki, the software developer who is a serval cat!", '<p>');
}
servalTalk();


function addTwoNumbers(a,b) {
	
	var result = a + b;
	document.write("This is the browser ouptut of the result of the values passed to the two parameters (or args) of the 'addTwoNumbers' function: " + result + '<p>');
	document.write("The addTwoNumbers function also contains another JavaScript function 'document.write'.");

}

/*You can now call your function anywhere else in your code
AFTER you've defined/declared it.
*/
addTwoNumbers(5,7);


