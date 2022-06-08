// Toggle : permettant le menu deroulant.

let settingsmenu = document.querySelector(".settings-menu");
let darkBtn = document.getElementById('dark-btn');

function settingsMenuToggle() {
    settingsmenu.classList.toggle("settings-menu-height");
}


// DarkBtn : fonctionnement on/off du btn et changement en theme noir.

darkBtn.onclick = function() {
    darkBtn.classList.toggle('dark-btn-on');
    document.body.classList.toggle('dark-theme');

    if (localStorage.getItem('theme') == 'light') {
        localStorage.setItem('theme', 'dark');
        
    }
    else {
        localStorage.setItem('theme', 'light');
    }
}



// Dak-theme : resolution du pb actualisation de la page en gardant le theme séléctionné.


if (localStorage.getItem('theme') == 'light') {
    darkBtn.classList.remove('dark-btn-on');
    document.body.classList.remove('dark-theme');
}
else if (localStorage.getItem('theme') == 'dark') {
    darkBtn.classList.add('dark-btn-on');
    document.body.classList.add('dark-theme');
}
else {
    localStorage.setItem('theme', 'light');
}

