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

const accordionList = document.querySelectorAll('.js-accordion dt');
const activeClass = 'ativo';

function activeAccordion(){
    this.nextElementSibling.classList.toggle(activeClass);
    this.classList.toggle(activeClass);
}

accordionList.forEach((item) => {
    item.addEventListener('click', activeAccordion)
})


