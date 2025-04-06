// Mood Colors
const moodColors = {
    happy: '#ffd166',
    sad: '#a2d2ff',
    excited: '#ffb703',
    calm: '#bde0fe'
};

// Select Mood Function
function selectMood(mood) {
    // Change background color based on mood
    document.body.style.backgroundColor = moodColors[mood];

    // Store mood in history
    addMoodToHistory(mood);
}

// Add Mood to History
function addMoodToHistory(mood) {
    const historyList = document.getElementById('history-list');
    
    const li = document.createElement('li');
    li.textContent = `${getCurrentDate()} - ${mood.charAt(0).toUpperCase() + mood.slice(1)}`;
    
    historyList.appendChild(li);
}

// Get Current Date
function getCurrentDate() {
    const date = new Date();
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
}
