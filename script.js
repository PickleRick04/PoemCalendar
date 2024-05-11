window.onload = function() {
    var password;
    var count = 0;

    do {
        password = prompt("Wie nenne ich Frau Deiss in Kleinbuchstaben:", "")
        if (password.toLowerCase() === "hanchkik" && password !== "hanchkik") {
            password = prompt("In Kleinbuchstaben, du Depp:", ""); 
        }
        else if(count <2){
            password = prompt("Do better, bro: ", "")
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
document.addEventListener("DOMContentLoaded", function() {
    const modal = document.createElement('div');
    modal.className = 'modal';
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
    const closeSpan = document.createElement('span');
    closeSpan.className = 'close';
    closeSpan.innerHTML = '&times;';
    closeSpan.onclick = function() { 
        modal.style.display = "none"; 
    };
    modalContent.appendChild(closeSpan);
    const content = document.createElement('p');
    modalContent.appendChild(content);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    document.querySelectorAll('.day a').forEach(function(day) {
        day.onclick = function() {
            if (this.getAttribute('data-poem') === 'yes') {
                content.textContent = 'Loading poem content for ' + this.textContent; // Replace this with actual poem content fetching logic.
                modal.style.display = "block";
            } else {
                alert('No poem available for this day.');
            }
        };
    });

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});


