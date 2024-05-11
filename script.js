window.onload = function() {
    var password = prompt("Please enter the password to view this page:", "");
    if (password === "enter") {
        document.getElementById('content').style.display = 'block';
    } else {
        alert("Incorrect password. You cannot access the content.");
        window.location = 'about:blank'; // Optionally redirect them to another page or just blank it out
    }
};
