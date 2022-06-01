'use strict'

const DOG_URL = "https://dog.ceo/api/breeds/image/random"

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
        doggos.appendChild(pic);
    });
};

document.querySelector(".return-doggo").addEventListener('click', addNewDoggo);