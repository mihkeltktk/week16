const fNameSpan = document.querySelector('#fName');
const lNameSpan = document.querySelector('#lName');
const ageSpan = document.querySelector('#age');
const emailSpan = document.querySelector('#email');

const images = ['1.png', '2.png', '3.png'];
const targetImage = document.querySelector('.section.profile-photo');
let i = 1;

targetImage.addEventListener('click', () => {

    targetImage.style.opacity = '0';

    setTimeout(() => {

        if (i === images.length) {
            i = 0;
        }

        targetImage.src = 'images/' + images[i];
        i++;

        targetImage.style.opacity = '1';

    }, 200);
});