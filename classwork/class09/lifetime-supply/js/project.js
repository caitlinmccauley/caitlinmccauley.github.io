// Store your current age into a variable

var currentAge = 26

// Store a maximum age into a variable

var maxAge = 100 

// Store a favorite drink (from a drop-down) into a variable
var select = document.getElementById('#item');
console.log(select);

// Store an amount per day into a variable

var amount = 2;

// Calculate how much you would drink for the rest of your life!

var total = ((maxAge - currentAge) * amount * 365)

console.log(total)

// Output your results to the user

$('#solution').html (function () {
    $('#solution').html('total');
})
