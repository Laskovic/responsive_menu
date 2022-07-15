'use strict'

const hamburgerButton = document.querySelector(".burger-open");
const hamburgerMenuSection = document.querySelector(".wrapper2")

hamburgerButton.addEventListener('click', function(){
    hamburgerMenuSection.classList.toggle("wrapper2")
})