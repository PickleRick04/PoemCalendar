window.onload = function() {
    var password = prompt("Wie nenne ich Frau Deiss in Kleinbuchstaben:", "");
    if(password.toLowerCase === "hanchkik" && password != "hanchkik"){
        var password = prompt("In Kleinbuchstaben du Depp:", "");
        if (password === "hanchkik") {
            document.getElementById('content').style.display = 'block';
        }
    }
    if (password === "hanchkik") {
        document.getElementById('content').style.display = 'block';
    } else {
        alert("Incorrect password. You cannot access the content.");
        window.location = 'about:blank'; // Optionally redirect them to another page or just blank it out
    }
};
