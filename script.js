'use strict'

const hamburgerButton = document.querySelector(".burger-open");
const hamburgerMenuSection = document.querySelector(".wrapper2")
const navBar = document.querySelector('.wrapper')

hamburgerButton.addEventListener('click', function(){
    hamburgerMenuSection.classList.toggle("wrapper2")
    hamburgerButton.classList.toggle("toggled3")
})