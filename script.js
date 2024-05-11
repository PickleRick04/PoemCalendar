window.onload = function() {
    var password;
    var count = 0;

    do {
        password = prompt("Wie nenne ich Frau Deiss in Kleinbuchstaben: ", "")
        if(count > 0){
            if (password === "hanchkik" || password === ' ') {
                document.getElementById('content').style.display = 'block'; }
            else if (password.toLowerCase() === "hanchkik" && password !== "hanchkik") {
                password = prompt("In Kleinbuchstaben, du Depp:", ""); 
            }
            else if(count <2){
                password = prompt("Do better bro: ", "")
            }
            else {
                password = prompt("Wie nenne ich Frau Deiss in Kleinbuchstaben: ", ""); 
            }
        }
        count++;
    } while (password !== "hanchkik" && count < 5);
        alert("Du hesch di blamiert.");
        window.location = 'about:blank';
    
};
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.day a').forEach(function(day) {
        day.onclick = function() {
            if (this.getAttribute('data-poem') === 'yes') {
                const poemText = this.nextElementSibling;
                alert(poemText.textContent.trim());
            } else {
                alert('');
            }
        };
    });
});
