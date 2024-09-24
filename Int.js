const loadingMessages = [
    "Booting up Err's System...",
    "Checking system integrity...",
    "Loading required modules...",
    "Establishing secure connections...",
    "Initializing graphical interface...",
    "Loading user preferences...",
    "Engaging security protocols...",
    "DedSec system active...",
    "Loading complete. Welcome to Err's World..."
];

let currentMessageIndex = 0;
const loadingTextElement = document.getElementById('loading-text');

function displayNextMessage() {
    if (currentMessageIndex < loadingMessages.length) {
        const newMessage = loadingMessages[currentMessageIndex] + "\n";
        loadingTextElement.textContent += newMessage;
        currentMessageIndex++;

        setTimeout(displayNextMessage, 600);
    } else {
        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
            document.getElementById('main-content').style.display = 'block';
        }, 600);
    }
}


window.onload = displayNextMessage;
