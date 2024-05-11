window.onload = function() {
    var password;
    var count = 0;
    var maxAttempts = 5;

    do {
        password = prompt("Wie nenne ich Frau Deiss in Kleinbuchstaben: ", "");
        if (password === "hanchkik") {
            document.getElementById('content').style.display = 'block';
            break; // Beendet die Schleife sofort nach Erfolg
        }
        if(password.toLowerCase === "hanchkik" && passwort !== "hanchkik"){
            alert("Kleinbuchstaben, du Depp");
        }
        count++;
    } while (count < maxAttempts);

    if (password !== "hanchkik") {
        alert("Du hesch di blamiert.");
        window.location = 'about:blank';
    }
};
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.day a').forEach(function(day) {
        day.onclick = function() {
            if (this.getAttribute('data-poem') === 'yes') {
                const poemText = this.nextElementSibling;
                alert('Load and display poem for ' + poemText.textContent.trim());
            } else {
                alert('No poem available for this day.');
            }
        };
    });
});
