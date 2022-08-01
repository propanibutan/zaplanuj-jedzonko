'use strict';
// localStorage.clear();

//pokazywanie extrastuff + imie do góry
function desktopShowUp() {
    if (localStorage.length > 0) {
        firstEntry.classList.add('d-none');
        extraStuff.classList.remove('d-none');
        userInfoName.innerText = localStorage.getItem("savedName");
    }
}

//zapisywanie sie na elementy
    //logowanie
const loginForm = document.querySelector('#login-form');
const userInfoName = document.querySelector('.user-info_name');
const firstEntry = document.querySelector('.first-entry-js');
const extraStuff = document.querySelector('.main-app__extrastuff');
    //dodaj przepis
const addRecipeButton = document.querySelector('.widgets_add_recipe');
const addRecipeMenu = document.querySelector('.adding-recipe-js');
    //dodaj plan
const addPlanButton = document.querySelector('#widgets_add_plan');
const addPlanMenu = document.querySelector('#adding-plan');

//event na button z dodawaniem userName [LOGOWANIE]
loginForm.addEventListener('submit', function(event){
    event.preventDefault();
    let userName = document.getElementById('loginName').value;
    //jeśli savedName==null to pokaz logowanie znowu, jeżeli ktoś kliknie tylko na button z logowaniem bez wpisywania imienai to sie nic nie stanie
    if (userName !== "") {
        localStorage.setItem('savedName', userName);
    }
    location.reload();
    desktopShowUp();
});

//niepokazywanie logowania
if (localStorage.length > 0) {
    firstEntry.classList.add('d-none');
    extraStuff.classList.remove('d-none');
    userInfoName.innerText = localStorage.getItem("savedName");
}

//pokazywanie menu z nowym przepisem i ukrywanie pulpitu na klikniecie
addRecipeButton.addEventListener('click', function(event){
    addRecipeMenu.classList.remove('d-none');
    extraStuff.classList.add('d-none');
});

//pokazywanie menu z nowym planem i ukrywanie pulpitu na klikniecie
addPlanButton.addEventListener('click', function(event){
    addPlanMenu.classList.remove('d-none');
    extraStuff.classList.add('d-none');
});

// console.log(localStorage.getItem("savedName"));

//wyłączanie alertów

const alertsContainer = document.querySelector(".pulpit_alerts");
const alertsArray = Array.from(alertsContainer.children);

alertsArray.forEach(alertElement => {
    const closeButton = alertElement.querySelector('.alert_x_div');
    closeButton.addEventListener('click', (event) => {
        alertElement.classList.add('d-none');
    });
});

const localStorageSavedName = localStorage.getItem("savedName");
const navigationBarLinks = document.querySelectorAll('.navigation-bar_link');
const navigationBarLinksArray = Array.from(navigationBarLinks);

if (!localStorageSavedName) {
    navigationBarLinksArray.forEach(link => {
        link.href = 'app.html'
    })
}

console.log(localStorageSavedName)