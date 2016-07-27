var link = document.querySelector(".btn-contacts");

var popup = document.querySelector(".feedback");
var close = document.querySelector(".feedback-close");

var form = popup.querySelector("form");
var login = popup.querySelector("[name=text-feedback]");
var email = popup.querySelector("[name=email-feedback]");
var textarea = popup.querySelector("[name=textarea-feedback]");

var storage = localStorage.getItem("login");
var storage2 = localStorage.getItem("email");

var overlay = document.querySelector(".overlay");
    
link.addEventListener("click", function(event) {
    event.preventDefault();
    overlay.classList.add("overlay-show");
    popup.classList.add("feedback-show");
    if (storage) {
        login.value = storage;
        email.value = storage2;  
    }
    
});
    
close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("feedback-show");
    overlay.classList.remove("overlay-show");
});
    
form.addEventListener("submit", function(event) {
    if (!login.value || !email.value || !textarea.value) {
        event.preventDefault();
        console.log("нужно заполнить поля");
    } else {
        localStorage.setItem("login", login.value);
        localStorage.setItem("email", email.value); 
    }
});

window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("feedback-show")) {
            popup.classList.remove("feedback-show");
        }
    }
});


var mainlist = document.querySelector('.main-navigator-list')


function setup_for_width(mql) {
    if (mql.matches) {
        mainlist.classList.add('hidden-menu');
    } 
    else {
        mainlist.classList.remove('hidden-menu');
    }
}
 
var mql = window.matchMedia("screen and (max-width: 635px)"); 
 
mql.addListener(setup_for_width); // Добавим прослушку на смену результата
 
setup_for_width(mql); // Вызовем нашу функцию