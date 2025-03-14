// Set the target date and time
let targetDate = new Date('September 25, 2025 00:00:00').getTime();

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
document.getElementById('magicSpan').addEventListener('click', function () {
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
    setTimeout(function () {
        surpriseContainer.classList.add('hidden');
    }, 60000); // 60000 milliseconds = 60 seconds
});

// Quiz

let user = "Rohan"
const quizQuestions = [
    {
        question: "What is Rohan's favorite color?",
        options: ["Blue", "Red", "Green", "Yellow"],
        answer: "Blue"
    },
    {
        question: `Which sport does Rohan like the most?`,
        options: ["Cricket", "Football", "Basketball", "Tennis"],
        answer: "Cricket"
    },
    {
        question: `What is Rohan's zodiac sign?`,
        options: ["Libra", "Virgo", "Leo", "Scorpio"],
        answer: "Libra"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuizQuestion() {
    const quizContainer = document.getElementById('quizContainer');
    const quizQuestion = document.getElementById('quizQuestion');
    const quizOptions = document.getElementById('quizOptions');
    const quizScore = document.getElementById('quizScore');

    const question = quizQuestions[currentQuestionIndex];
    quizQuestion.textContent = question.question;
    quizOptions.innerHTML = '';

    question.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => {
            if (option === question.answer) {
                score++;
                alert("Correct! 🎉");
            } else {
                alert("Oops, wrong answer! 😅");
            }

            currentQuestionIndex++;
            if (currentQuestionIndex < quizQuestions.length) {
                loadQuizQuestion();
            } else {
                quizScore.textContent = `Your final score: ${score}/${quizQuestions.length}`;
                quizOptions.innerHTML = '';
                document.getElementById('nextQuestion').style.display = 'none';
            }
        });
        quizOptions.appendChild(button);
    });
}

document.getElementById('magicSpan').addEventListener('click', () => {
    document.getElementById('quizContainer').classList.remove('hidden');
    loadQuizQuestion();
});

// Game
// Number Balance Puzzle Game
let leftTotal = 0;
let rightTotal = 0;

function startBalanceGame() {
    const numberList = document.getElementById('numberList');
    const leftTotalDisplay = document.getElementById('leftTotal');
    const rightTotalDisplay = document.getElementById('rightTotal');
    const gameResult = document.getElementById('gameResult');

    // Reset totals and result
    leftTotal = 0;
    rightTotal = 0;
    leftTotalDisplay.textContent = 'Total: 0';
    rightTotalDisplay.textContent = 'Total: 0';
    gameResult.textContent = '';

    // Generate random numbers
    numberList.innerHTML = '';
    for (let i = 0; i < 6; i++) {
        const number = document.createElement('div');
        const value = Math.floor(Math.random() * 20) + 1; // Random number between 1-20
        number.className = 'number';
        number.textContent = value;
        number.draggable = true;

        // Add dragstart event
        number.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text', value);
        });

        numberList.appendChild(number);
    }

    // Enable drop zones
    const dropZones = document.querySelectorAll('.dropZone');
    dropZones.forEach(zone => {
        zone.innerHTML = ''; // Clear previous numbers
        zone.addEventListener('dragover', (e) => e.preventDefault());
        zone.addEventListener('drop', (e) => handleDrop(e, zone));
    });
}

function handleDrop(event, zone) {
    event.preventDefault();
    const value = parseInt(event.dataTransfer.getData('text'));

    // Add value to the correct total
    if (zone.parentElement.id === 'leftScale') {
        leftTotal += value;
        document.getElementById('leftTotal').textContent = `Total: ${leftTotal}`;
    } else {
        rightTotal += value;
        document.getElementById('rightTotal').textContent = `Total: ${rightTotal}`;
    }

    // Display the dropped number in the zone
    const number = document.createElement('div');
    number.className = 'number';
    number.textContent = value;
    zone.appendChild(number);

    // Check if totals are balanced
    if (leftTotal === rightTotal) {
        document.getElementById('gameResult').textContent = 'Balanced! 🎉';
        document.getElementById('gameResult').style.color = 'lime';
    } else {
        document.getElementById('gameResult').textContent = 'Not Balanced Yet! ⏳';
        document.getElementById('gameResult').style.color = 'yellow';
    }
}

function toggleBalanceGame() {
    const gameContainer = document.getElementById('balanceGameContainer');
    gameContainer.classList.toggle('hidden');
    if (!gameContainer.classList.contains('hidden')) {
        startBalanceGame();
    }
}


// Message

// Define the correct password
const correctPassword = "rohanbro26";  // Replace with the password you want

// Function to check password
function checkPassword() {
    const passwordInput = document.getElementById("password").value;

    if (passwordInput === correctPassword) {
        // Show the message form
        document.getElementById("message-form").classList.remove("hidden");
        alert("Password correct! You can now  send a message.");
    } else {
        alert("Incorrect password. Please try again.");
    }
}


//Email
// Add event listener to the form
document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get the message content
    const message = encodeURIComponent(document.getElementById("message").value);

    // Create the mailto link
    //const mailtoLink = `mailto:myyasheducational@gmail.com?subject=Greeting by Rohan&body=${message}`;
    const mailtoLink = `https://wa.me/+919784317690?text=Greeting by Rohan: +${message}`;

    // Open the mail client
    window.location.href = mailtoLink;

    // Reset the form
    this.reset();
});


// //New Idea for Updatation

function update() {
    let customElement = document.getElementsByClassName("custom")[0];
    let check = customElement.style.display;

    if (check === "none") {
        customElement.style.display = "block";
    } else {
        customElement.style.display = "none";
    }
}

//Now Edit

// Default target date (September 25, 2025)
// let targetDate = new Date('September 25, 2025 00:00:00').getTime();

// Function to start/update countdown
function updateTimer() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // document.getElementById("count").innerHTML =`${days}d ${hours}h ${minutes}m ${seconds}s`;
}


// Function to update everything from User Input
function setCountdown() {
    const userInput = document.getElementById("dob").value;
    if (userInput) {
        targetDate = new Date(userInput).getTime();
    }
    updateTimer(); // Immediately update UI
    let userName = document.getElementById("name").value;
    let userNameNew = document.getElementById("name").value;
    document.getElementById("real").innerHTML = userName;
    document.getElementById("realNew").innerHTML = userNameNew;
    document.getElementById("quizContainer").style.display="none";
}



// Change Photo
document.getElementById("photoUpload").addEventListener("change", function (event) {
    let file = event.target.files[0]; // Get the uploaded file

    if (file) {
        let reader = new FileReader(); // Create a FileReader to read the file
        reader.onload = function (e) {
            document.getElementById("rohanImage").src = e.target.result; // Set uploaded image
        };
        reader.readAsDataURL(file); // Convert file to a URL
    }
});
document.getElementById("photoUploadCake").addEventListener("change", function (event) {
    let file = event.target.files[0]; // Get the uploaded file

    if (file) {
        let reader = new FileReader(); // Create a FileReader to read the file
        reader.onload = function (e) {
            document.getElementById("cake").src = e.target.result; // Set uploaded image
        };
        reader.readAsDataURL(file); // Convert file to a URL
    }
});

//Change Video
document.getElementById("videoUpload").addEventListener("change", function (event) {
    let file = event.target.files[0]; // Get the uploaded file
    let videoElement = document.getElementById("rohanVideo");

    if (file) {
        let reader = new FileReader(); // Create a FileReader to read the file
        reader.onload = function (e) {
            videoElement.src = e.target.result; // Set uploaded video
            videoElement.style.display = "block"; // Show video
            videoElement.load(); // Reload video source
        };
        reader.readAsDataURL(file); // Convert file to a URL
    } else {
        videoElement.style.display = "none"; // Hide video if no file selected
    }
});


// Start the countdown and update every second
// updateTimer();
// setInterval(updateTimer, 1000);


// 📌 Include FFmpeg.js in your project (CDN)
const loadFFmpeg = async () => {
    const { createFFmpeg, fetchFile } = FFmpeg;
    const ffmpeg = createFFmpeg({ log: true });
    await ffmpeg.load();
    return { ffmpeg, fetchFile };
};

// 📌 WebM → MP3 convert karne ka function
const convertToMP3 = async (webmBlob) => {
    const { ffmpeg, fetchFile } = await loadFFmpeg();
    
    ffmpeg.FS("writeFile", "input.webm", await fetchFile(webmBlob));
    await ffmpeg.run("-i", "input.webm", "-q:a", "0", "-map", "a", "output.mp3");

    const mp3Data = ffmpeg.FS("readFile", "output.mp3");
    const mp3Blob = new Blob([mp3Data.buffer], { type: "audio/mp3" });
    const mp3Url = URL.createObjectURL(mp3Blob);

    // ✅ Sirf MP3 download trigger karo
    const a = document.createElement("a");
    a.href = mp3Url;
    a.download = "recording.mp3";
    document.body.appendChild(a);
    a.click();
    URL.revokeObjectURL(mp3Url);
};

//Recording

let mediaRecorder;
let recordedChunks = [];
let timer;
let seconds = 0; // ✅ Ab yeh sahi se initialize hai

document.getElementById("startBtn").addEventListener("click", async () => {
    let countdown = document.getElementById("countdown");
    countdown.style.display = "block";
    document.getElementById("startBtn").disabled = true;
    document.getElementById("stopBtn").style.display = "none";
    document.getElementById("timer").style.display="block";
    document.getElementById("startBtn").style.display="none";

    // Countdown animation (5 se 1 tak)
    for (let i = 5; i > 0; i--) {
        countdown.innerText = i;
        countdown.style.transform = "scale(1)";
        countdown.style.opacity = "0.7";
        await new Promise((resolve) => setTimeout(resolve, 500));
        countdown.style.transform = "scale(2.5)";
        await new Promise((resolve) => setTimeout(resolve, 500));
    }
    countdown.style.display = "none";

    try {
        const stream = await navigator.mediaDevices.getDisplayMedia({
            video: { width: 1080, height: 1920, frameRate: 30 }, // ✅ High Quality Video
            audio: true
        });

        mediaRecorder = new MediaRecorder(stream, { mimeType: "video/webm; codecs=vp9" });
        recordedChunks = [];

        mediaRecorder.ondataavailable = (event) => recordedChunks.push(event.data);

        mediaRecorder.onstop = () => {
            const blob = new Blob(recordedChunks, { type: "video/webm" });
            const url = URL.createObjectURL(blob);

            const a = document.createElement("a");
            a.href = url;
            a.download = "screen-recording.webm";
            document.body.appendChild(a);
            a.click();
            URL.revokeObjectURL(url);
        };

        mediaRecorder.start();
        document.getElementById("stopBtn").style.display = "inline-block";
        document.getElementById("startBtn").disabled = true;

        // ✅ Timer Start
        seconds = 0;
        updateTimer();
        timer = setInterval(() => {
            seconds++;
            updateTimer();
        }, 1000);

        // ✅ 60 sec ke baad recording stop ho jayegi
        setTimeout(() => {
            if (mediaRecorder.state !== "inactive") {
                stopRecording();
            }
        }, 60000);
    } catch (err) {
        console.error("Error:", err);
        document.getElementById("startBtn").disabled = false;
    }
});

document.getElementById("stopBtn").addEventListener("click", stopRecording);
document.getElementById("stopBtn").style.display = "none";

function stopRecording() {
    clearInterval(timer);
    document.getElementById("stopBtn").style.display = "none";
    document.getElementById("startBtn").style.display="block"
    if (mediaRecorder && mediaRecorder.state !== "inactive") {
        mediaRecorder.stop();
    }
}

function updateTimer() {
    document.getElementById("timer").innerText = `Recording: ${seconds}s`;
}
