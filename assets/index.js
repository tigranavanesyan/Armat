let burger = document.querySelector(".burgerIcon");
let menuItems = document.querySelector(".menu-items");
let menuItem = document.querySelectorAll(".menu-item");

burger.addEventListener("click", change);

function change() {
    burger.classList.toggle("red");
    menuItems.classList.toggle("menu-items-mob");

    if(menuItems.classList.contains("menu-items-mob")){
        menuItem.forEach(function(e){
        e.classList.add("menu-item-mob")
        e.classList.remove("active")
    }) 
       
    
} else {
    menuItem.forEach(function(e){
        e.classList.remove("menu-item-mob")
    }) 
} 
}

menuItem.forEach(function(e){
    e.addEventListener("click", close);
    })


    function close() {
        menuItems.classList.remove("menu-items-mob");
    }
    
    const langArr = {
    menuItem1: {
        arm: 'Մեր Մասին',
        ru: 'О нас',
        en: 'about us'
    },
    menuItem2: {
        arm: 'Առարկաներ',
        ru: 'Предметы',
        en: 'Subjects'
    },
    menuItem3: {
        arm: 'Կապ',
        ru: 'Контакт',
        en: 'Contact'
    },
    slideText1: {
        arm: 'ՀԱՅԵՐԵՆԻ ԽՈՍԱԿՑԱԿԱՆ ԱԿՈՒՄԲ',
        ru: 'РАЗГОВОРНЫЙ КЛУБ АРМЯНСКОГО ЯЗЫКА',
        en: 'ARMENIAN SPEAKING CLUB'
    },
    slideText2: {
        arm: 'Հայերենի խոսակցական ակումբի նպատակը հայերենի խոսակցական հմտությունների բարելավումն է․ զարգացնել ունեցած բառապաշարը քննարկումների միջոցով, ինչպես նաև ծանոթացնել գրական հայերենի նրբություններին։',
        ru: 'Целью армянского языкового клуба является улучшение навыков говорящих армянского языка. Развивайте словарный запас с дискуссиями, а также познакомьтесь с их нюансами литературного армянского.',
        en: 'The purpose of the Armenian language club is to improve the speaking skills of Armenian language. Develop the vocabulary with discussions, as well as introduce them to the nuances of literary Armenian.'
    },
    slideText3: {
        arm: 'Կարդալ ավելին',
        ru: 'читать далее',
        en: 'Read more'
    },
    slideText4: {
        arm: 'Միանալ դասընթացին',
        ru: 'Присоединяйтесь к курсу',
        en: 'Join the course'
    }


}
  
  document
    .querySelectorAll('.lang1 button')
    .forEach((b) => b.addEventListener('click', setLang));
  
  function setLang() {
    for (let key in langArr) {
      let elem = document.querySelector('.lng-' + key);
      if (elem) {
        elem.innerHTML = langArr[key][this.value];
      }
    }
  }




  const toTop = document.querySelector(".to-top");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      toTop.classList.add("active");
    } else {
      toTop.classList.remove("active");
    }
  })


