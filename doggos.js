'use strict'

const DOG_URL = "https://dog.ceo/api/breeds/image/random"
const LAB_URL = "https://dog.ceo/api/breed/labrador/images/random"
const HSKY_URL = "https://dog.ceo/api/breed/husky/images/random"

const doggos = document.querySelector(".doggos");

function addNewDoggo() {
    const promise = fetch(DOG_URL);
    promise
    .then(function(response) {
        const processingPromise = response.json();
        return processingPromise;
        
    })
    .then(function(processedResponse) {
        const pic = document.createElement("img");
        pic.src = processedResponse.message;
        pic.setAttribute('class', 'img');
        pic.alt = "Cute doggo";
        doggos.prepend(pic);
    });
};

document.querySelector("#return-doggo").addEventListener('click', addNewDoggo);

function addNewLabbo() {
    const promise = fetch(LAB_URL);
    promise
    .then(function(response) {
        const processingPromise = response.json();
        return processingPromise;
        
    })
    .then(function(processedResponse) {
        const pic = document.createElement("img");
        pic.src = processedResponse.message;
        pic.setAttribute('class', 'img');
        pic.alt = "Cute doggo";
        doggos.prepend(pic);
    });
};

document.querySelector("#return-labbo").addEventListener('click', addNewLabbo);

function addNewHusky() {
    const promise = fetch(HSKY_URL);
    promise
    .then(function(response) {
        const processingPromise = response.json();
        return processingPromise;
        
    })
    .then(function(processedResponse) {
        const pic = document.createElement("img");
        pic.src = processedResponse.message;
        pic.setAttribute('class', 'img');
        pic.alt = "Cute doggo";
        doggos.prepend(pic);
    });
};

document.querySelector("#return-husky").addEventListener('click', addNewHusky);