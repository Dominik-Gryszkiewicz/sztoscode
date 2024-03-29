// CAROUSELTEXT

const carouselText = [
    {text: "Backend PHP Developer."},
    {text: "Frontend JS Developer."},
    {text: "Devops Linux."}
  ]
  
  $(document).ready(async function() {
    carousel(carouselText, ".typing-text")
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
  const mainText = document.querySelector('.main-text')
  const mobileMenu = document.querySelector('.mobile-menu')

  burgerIcon.addEventListener('click', ()=>{
      mainText.classList.toggle('opacity')
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
  const main = document.querySelector('main')
  const contactSection = document.querySelector('.contact-icons')

  setTimeout(() => {
    loader.style.opacity = 0
    setTimeout(()=>{
      loader.style.display = 'none'
      nav.style.opacity = 1
      main.style.opacity = 1
      contactSection.style.opacity = 1
    },990)
  },50)


// NAV & FOOTER POSITION


// window.onscroll = function() {
//   if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight - 1) {
//     contactSection.style.position = 'absolute'
//   } else {
//     contactSection.style.position = ''
//   }
//   if (window.scrollY === 0) {
//     nav.style.position = 'absolute'
// } else {
//     nav.style.position = ''
// }
// };
 


  