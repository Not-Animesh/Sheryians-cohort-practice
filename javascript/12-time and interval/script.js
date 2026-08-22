let count = 0;
let intervalId = null;

// setInterval()
function startTimer() {
  if (intervalId !== null) return;

  intervalId = setInterval(() => {
    count++;
    document.getElementById("count").textContent = count;
  }, 1000);
}

// clearInterval()
function stopTimer() {
  clearInterval(intervalId);
  intervalId = null;
}

// Reset
function resetTimer() {
  stopTimer();

  count = 0;
  document.getElementById("count").textContent = count;
}

// setTimeout()
// Runs only once after 5 seconds
setTimeout(() => {
  console.log("5 seconds completed");
}, 5000);