const name = document.querySelector('.name-input');
const nameInput = document.querySelector('#name');
const wrongName = document.createElement('div');
name.insertBefore(wrongName, nameInput);

const email = document.querySelector('.email-input');
const emailInput = document.querySelector('#email');
const wrongEmail = document.createElement('div');
email.insertBefore(wrongEmail, emailInput);

const phone = document.querySelector('.phone-input');
const phoneInput = document.querySelector('#phone');
const wrongPhone = document.createElement('div');
phone.insertBefore(wrongPhone, phoneInput);

const interest = document.querySelector('.interest-options');
const interestSelect = document.querySelector('#interest');
const noInterest = document.createElement('div');
interest.insertBefore(noInterest, interestSelect);

const contactHeading = document.querySelector('.contact-heading');
const button = document.querySelector('#button');
const validateConfirm = document.createElement('div');
validateConfirm.style.cssText = 'max-width: 300px; font-size: 18px;';
contactHeading.appendChild(validateConfirm);

const form = document.querySelector('#form');

nameInput.addEventListener("input", (e) => {
    if (!nameInput.validity.valid) {
        wrongName.textContent = "You can only put characters in here!";
        wrongName.style.cssText = 'color: darkred;';
    } else {
        wrongName.textContent = "";
    }
});

emailInput.addEventListener("input", (e) => {
    if (!emailInput.validity.valid) {
        wrongEmail.textContent = "You can only put email addresses in here!";
        wrongEmail.style.cssText = 'color: darkred;';
    } else {
        wrongEmail.textContent = "";
    }
});

phoneInput.addEventListener("input", (e) => {
    if (!phoneInput.validity.valid) {
        wrongPhone.textContent = "You can only put numbers in here!";
        wrongPhone.style.cssText = 'color: darkred;';
    } else {
        wrongPhone.textContent = "";
    }
});

interestSelect.addEventListener("click", (e) => {
    if (!interestSelect.value) {
        noInterest.textContent = "Please select an option.";
        noInterest.style.cssText = 'color: darkred;';
    } else {
        noInterest.textContent = "";
    }
});

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if ((!interestSelect.value) || (phoneInput.value === "") ||
    (!emailInput.value === "") || (nameInput.value === "")) {
        validateConfirm.textContent = "You have not filled all of the form!";
        validateConfirm.style.cssText += 'color: darkred;';
    } else {
        validateConfirm.textContent = alert("Success! Our team will contact you soon.");
    }
})

const slideshow = document.querySelectorAll('.slideshow > img')
function bannerSlideshow(limit) {
    let i = 0;
    slideshow[i].classList.remove('inactive');
    setInterval(() => {
        i++;
        if (i === limit) {
            i = 0;
            slideshow[limit - 1].classList.add('inactive');
        }
        slideshow[i].classList.remove('inactive');
        if (i > 0) {
        slideshow[i - 1].classList.add('inactive');
        };
    }, 3000);
};
bannerSlideshow(3);