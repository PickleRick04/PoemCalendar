window.onload = function() {
    var password;
    var count = 0;

    do {
        password = prompt("Wie nenne ich Frau Deiss in Kleinbuchs{taben:", "")
        if(count > 0){
            if (password.toLowerCase() === "hanchkik" && password !== "hanchkik") {
                password = prompt("In Kleinbuchstaben, du Depp:", ""); 
            }
            else if(count <2){
                password = prompt("Do better, bro: ", "")
            }
            else {
                password = prompt("Wie nenne ich Frau Deiss in Kleinbuchstaben:", ""); 
            }
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
    const monthDays = {
        january: 31, february: 28, march: 31, april: 30, may: 31, june: 30,
        july: 31, august: 31, september: 30, october: 31, november: 30, december: 31
    };

    for (let month in monthDays) {
        const daysContainer = document.getElementById(`${month}-days`);
        for (let day = 1; day <= monthDays[month]; day++) {
            if ((day - 1) % 10 === 0) {
                var group = document.createElement('div');
                group.className = 'days-group';
                daysContainer.appendChild(group);
            }
            let dayDiv = document.createElement('div');
            dayDiv.className = 'day';
            dayDiv.innerHTML = `<a href="javascript:void(0);" data-poem="no">Day ${day}</a>`;
            group.appendChild(dayDiv);
        }
    }

    addDayClickHandlers();
});

function addDayClickHandlers() {
    document.querySelectorAll('.day a').forEach(function(dayLink) {
        dayLink.onclick = function() {
            if (this.getAttribute('data-poem') === 'yes') {
                const poemText = this.nextElementSibling;
                alert('Load and display poem for ' + poemText.textContent.trim());
            } else {
                alert('No poem available for this day.');
            }
        };
    });
}
