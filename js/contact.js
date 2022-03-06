// CAROUSELTEXT

  const carouselTextContact = [
    {text: "I am available for Freelance hire."},
    {text: "Develop together with you."}
  ]
  
  $(document).ready(async function() {
    carousel(carouselTextContact, ".typing-text-contact")
  });
  
  async function typeSentence(sentence, eleRef, delay = 35) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
      await waitForMs(delay);
      $(eleRef).append(letters[i]);
      i++
    }
    return;
  }
  
  async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while(letters.length > 0) {
      await waitForMs(35);
      letters.pop();
      $(eleRef).html(letters.join(""));
    }
  }
  
  async function carousel(carouselList, eleRef) {
      var i = 0;
      while(true) {
        await typeSentence(carouselList[i].text, eleRef);
        await waitForMs(1500);
        await deleteSentence(eleRef);
        await waitForMs(0);
        i++
        if(i >= carouselList.length) {i = 0;}
      }
  }
  
  function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
  }

// MENU

const burgerIcon = document.querySelector('#burger4')
const mobileMenu = document.querySelector('.mobile-menu')
const contactHeader = document.querySelector('.contact-section .header')
const contactInfo = document.querySelector('.contacts-info')
const form = document.querySelector('.form-container')

burgerIcon.addEventListener('click', ()=>{
    contactHeader.classList.toggle('opacity')
    contactInfo.classList.toggle('opacity')
    form.classList.toggle('opacity')
    let showMenu = setTimeout(()=>{
        mobileMenu.classList.toggle('display')
    },560)
    if (mobileMenu.classList.contains('display')) {
        clearTimeout(showMenu)
        mobileMenu.classList.toggle('display')
    }
})  

// LOADER

const loader = document.querySelector('.loader')
const nav = document.querySelector('nav')
const contactSection = document.querySelector('.contact-icons')
const contactPage = document.querySelector('.contact-section')

setTimeout(() => {
    loader.style.opacity = 0
    setTimeout(()=>{
      loader.style.display = 'none'
      nav.style.opacity = 1
      contactSection.style.opacity = 1
      contactPage.style.opacity = 1
    },990)
},50)

// FORM

const formBtn = document.querySelector('form button')
const inputText = document.querySelector('input[type=text]')
const inputEmail = document.querySelector('input[type=email]')
const formTextarea = document.querySelector('textarea')
const formWarning = document.querySelector('.warining')

formBtn.addEventListener('click', ()=>{
    if (inputText.value === "") {
      inputText.classList.add('active')
      inputText.style.color = ''
    } 
    if (inputEmail.value === "") {
      inputEmail.classList.add('active')
      inputEmail.style.color = ''
    }
    if (formTextarea.value === "") {
      formTextarea.classList.add('active')
      formTextarea.style.color = ''
    }
    if (inputText.value === "" || inputEmail.value === "" || formTextarea.value === "") {
      formWarning.classList.add('active')
    }
})
  
inputText.addEventListener('input', ()=>{
    inputText.style.color = '#f0f0f0'
})

inputEmail.addEventListener('input', ()=>{
    inputEmail.style.color = '#f0f0f0'
})

formTextarea.addEventListener('input', ()=>{
    formTextarea.style.color = '#f0f0f0'
})
