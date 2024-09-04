 // Ensure 'c' is defined globally or initialized before use
 var c = 5; // Initialize the number of chances

 function validate() {
     var n = document.getElementById("guessField").value;
     var ln = Number("{{number}}");
 
     // Check if the input is empty
     if (n === '') {
         alert('Please enter a number');
         return;
     }
 
     // Convert input to a number
     n = Number(n);
 
     // Debugging: Log values to the console
     console.log('User guess:', n);
     console.log('Lucky number:', ln);
     console.log('Chances remaining:', c);
 
     // Check if the guess is correct
     if (n === ln) {
         alert('Your guess is correct!');
         // Optionally, disable further input or show a success message
         return;
     } else if (n > ln) {
         alert('Number is too high!\nChances remaining: ' + (c - 1));
         c = c - 1;
     } else {
         alert('Number is too low!\nChances remaining: ' + (c - 1));
         c = c - 1;
     }
 
     // Optionally, handle the case when no chances are left
     if (c <= 0) {
         alert('Game over! No chances remaining.');
         // Optionally, disable further input or show a game over message
     }
 }
 
 