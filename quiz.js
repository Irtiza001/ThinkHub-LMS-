let timeLeft = 300;
const timer = setInterval(() => {
    document.getElementById("time").textContent = --timeLeft;
    if (timeLeft <= 0) {
        clearInterval(timer);
        alert("Time's up! Auto-submitting.");
        document.getElementById("quizForm").submit();
    }
}, 1000);

document.getElementById("quizForm").onsubmit = (e) => {
    e.preventDefault();
    alert("Quiz submitted! You will receive feedback soon.");
};
