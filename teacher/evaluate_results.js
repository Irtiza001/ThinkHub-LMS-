// Function to upload marks for Quiz, Assignment, and Midterm
function uploadMarks(studentId) {
    const quizMarks = document.getElementById(`quiz-${studentId}`).value;
    const assignmentMarks = document.getElementById(`assignment-${studentId}`).value;
    const midMarks = document.getElementById(`mid-${studentId}`).value;

    if (quizMarks && assignmentMarks && midMarks) {
        alert(`Marks for Student ${studentId} uploaded successfully!\nQuiz: ${quizMarks}, Assignment: ${assignmentMarks}, Mid: ${midMarks}`);
    } else {
        alert('Please enter all marks before uploading.');
    }
}

// Function to upload final exam marks
function uploadFinalMarks(studentId) {
    const finalMarks = document.getElementById(`final-${studentId}`).value;

    if (finalMarks) {
        alert(`Final marks for Student ${studentId} uploaded successfully! Final: ${finalMarks}`);
    } else {
        alert('Please enter final marks before uploading.');
    }
}
