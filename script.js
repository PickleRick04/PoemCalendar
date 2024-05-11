window.onload = function() {
    var password;
    var count = 0;
    var maxAttempts = 5;
    password = prompt("Wie nenne ich Frau Deiss in Kleinbuchstaben: ", "");
    do {
        if (password === "hanchkik" || passwort === " ") {
            document.getElementById('content').style.display = 'block';
            break;
        }
        if(password.toLowerCase === "hanchkik" && passwort !== "hanchkik"){
            password = prompt("In Kleinbuchstaben: ", "");
        }
        count++;
    } while (count < maxAttempts);

    if (password !== "hanchkik" && passwort != " ") {
        alert("Du hesch di blamiert.");
        window.location = 'https://www.youtube.com/watch?v=YgSPaXgAdzE';
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
