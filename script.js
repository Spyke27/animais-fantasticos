function initTabNav (){
const tabMenu = document.querySelectorAll('.js-tabmenu li')
const tabCont = document.querySelectorAll('.js-tabcont section')

function activeTab(index){
    tabCont.forEach((section) => {
        section.classList.remove('ativo');
    });
    tabCont[index].classList.add('ativo');
}

tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', ()=> {
        activeTab(index);
    })
});
}
initTabNav();

function initAccordion (){
const accordionList = document.querySelectorAll('.js-accordion dt');
const activeClass = 'ativo';

function activeAccordion(){
    this.nextElementSibling.classList.toggle(activeClass);
    this.classList.toggle(activeClass);
}

accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion)
});
}
initAccordion();

function initScroll (){

    const sections = document.querySelectorAll('.js-scroll');
    const metade = window.innerHeight * 0.6;

    function scroll(){
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top - metade;

            if(sectionTop < 0){
                section.classList.add('ativo');
            }
        })
    }
    scroll();
    window.addEventListener('scroll', scroll);
}

initScroll();


