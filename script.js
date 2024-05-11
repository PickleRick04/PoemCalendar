window.onload = function() {
    var password;
    var count = 0;

    do {
        if (password.toLowerCase() === "hanchkik" && password !== "hanchkik") {
            password = prompt("In Kleinbuchstaben, du Depp:", ""); 
        }
        else if(count <2){
            password = prompt("Wie nenne ich Frau Deiss in Kleinbuchstaben:", "")
        }
        else {
            password = prompt("Wie nenne ich Frau Deiss in Kleinbuchstaben:", ""); 
        }

        count++;
    } while (password !== "hanchkik" && count < 5);

    if (password === "hanchkik") {
        document.getElementById('content').style.display = 'block'; 
    } else {
        alert("Du hesch di blamiert.");
        window.location = 'about:blank'; 
    }
};
