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


// //  //New Idea
//  document.getElementById('magicSpan').addEventListener('click', function() {
//     // Show the surprise container
//     document.getElementById('surpriseContainer').classList.remove('hidden');
    
//     // Play a celebration sound (optional)
//     let audio = new Audio('celebration.mp3');
//     audio.play();
//   });
  

// Load the celebration sound only once
const audio = new Audio("audio.mp3");
audio.loop = true; // Ensure the song loops continuously

// Add click event listener
document.getElementById('magicSpan').addEventListener('click', function() {
    // Show the surprise container
    const surpriseContainer = document.getElementById('surpriseContainer');
    surpriseContainer.classList.remove('hidden');

    const need = document.getElementById('need');
    need.classList.remove('hidden')
    // Start playing the song (only if it’s not already playing)
    if (audio.paused) {
        audio.play();
    }

    // Hide the surprise container after 8 seconds
    setTimeout(function() {
        surpriseContainer.classList.add('hidden');
    }, 60000); // 60000 milliseconds = 60 seconds
});
