window.onload = function() {
    var password;
    var count = 0;

    do {
        if (count > 0 && password.toLowerCase() === "hanchkik" && password !== "hanchkik") {
            password = prompt("In Kleinbuchstaben, du Depp:", ""); // If incorrect case used
        } else {
            password = prompt("Wie nenne ich Frau Deiss in Kleinbuchstaben:", ""); // First or correct case prompt
        }

        count++;
    } while (password.toLowerCase() !== "hanchkik" && count < 5);

    if (password.toLowerCase() === "hanchkik") {
        alert("Souverään!");
        document.getElementById('content').style.display = 'block'; // Show content if correct
    } else {
        alert("Du hesch di blamiert.");
        window.location = 'about:blank'; // Redirect if failed after 5 attempts
    }
};
