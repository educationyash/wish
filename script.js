 // Set the target date and time
 const targetDate = new Date('September 25, 2025 00:00:00').getTime();

 // Function to update the countdown
 function updateCountdown() {
     const now = new Date().getTime();
     const timeRemaining = targetDate - now;

     if (timeRemaining <= 0) {
         document.getElementById('count').innerHTML = 'Happy Birthday Rohan';
         clearInterval(interval);
         return;
     }

     const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
     const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

     document.getElementById('count').innerHTML = 
         `${days} days : ${hours.toString().padStart(2, '0')} hours : ` +
         `${minutes.toString().padStart(2, '0')} minutes : ${seconds.toString().padStart(2, '0')} seconds`;
 }

 // Update the countdown every second
 const interval = setInterval(updateCountdown, 1000);