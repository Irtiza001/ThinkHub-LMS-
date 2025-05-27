document.getElementById("uploadForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const file = document.getElementById("file").files[0];

    if (title && description && file) {
        alert("Lecture uploaded successfully!");
        // Here you can implement logic to send the form data to a server or API.
    } else {
        alert("Please fill all fields and select a file.");
    }
});
