function goBack() {
    window.history.back();
}

function submitAssignment(event, title) {
    event.preventDefault();
    const statusId = title.includes("1") ? "status-1" : "status-2";
    document.getElementById(statusId).innerText = `✅ ${title} submitted successfully!`;
    document.getElementById(statusId).style.color = "#28a745";
}
