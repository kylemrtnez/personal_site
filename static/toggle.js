'use strict'

// function 
// function toggleDisplay() {
//     let dropdownContent = document.getElementsByClassName('dropdown-content');
//     dropdownContent.forEach(function(ele) {
//         ele.classList.toggle('toggle-display');
//     });
// }

window.addEventListener('load', function() {
    function toggleDisplay() {
        let dropdownContent = document.getElementsByClassName('dropdown-content');
        for (let i = 0; i < dropdownContent.length; i++) {
            dropdownContent[i].classList.toggle('toggle-display');
        }
    }

    let theOnlyHamburgerIdx = 0;
    let hamburgerBtn = document.getElementsByClassName('hamburger');
    hamburgerBtn[theOnlyHamburgerIdx].addEventListener('click', toggleDisplay);
})
