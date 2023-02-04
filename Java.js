const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu')
    })
}

// const navLink = document.querySelectorAll('.nav__link')
// function linkAction(){
//     // When we click on each nav__link, we remove the show-menu class
//     navMenu.classList.remove('show-menu')
// }
// navLink.forEach(n => n.addEventListener('click', linkAction))



const skillContent = document.getElementsByClassName("skills__content"),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){

    if (this.parentNode.classList.contains('skills__close')) {
        this.parentNode.classList.removeClass('skills__close')
    }

    // let itemClass = this.parentNode.className

    // for(i=0;i<skillContent.length;i++){
    //      skillContent[i].className = 'skills__content skills__close'
    // }
    // if(itemClass === 'skills__content skills__close'){
    //         this.parentNode.className='skills__content skills__open'
    //  }
}
function toggleSkills(){
    if (this.parentNode.classList.contains('skills__close')) {
        this.parentNode.classList.remove('skills__close')
        this.parentNode.classList.add('skills__open')
    } 
    else {
        this.parentNode.classList.remove('skills__open')
        this.parentNode.classList.add('skills__close')
    }

    // let itemClass = this.parentNode.className

    // for(i=0;i<skillContent.length;i++){
    //      skillContent[i].className = 'skills__content skills__close'
    // }
    // if(itemClass === 'skills__content skills__close'){
    //         this.parentNode.className='skills__content skills__open'
    //  }
}

skillsHeader.forEach((el)=>{
    el.addEventListener('click',toggleSkills)
})



//contact
const dataViews = document.querySelectorAll('.home__datas'),
      dataBtns = document.querySelectorAll('.home__data'),
      dataCloses = document.querySelectorAll('.home__datas-close')

let datas = function(dataClick){
    dataViews[dataClick].classList.add('home-data')
}

dataBtns.forEach((dataBtn,i)=>{
    dataBtn.addEventListener('click',()=>{
        datas(i)
    })
})


dataCloses.forEach((dataClose)=>{
    dataClose.addEventListener('click',()=>{
        dataViews.forEach((dataView)=>{
            dataView.classList.remove('home-data')
        })
    })
})



// services
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn,i)=>{
    modalBtn.addEventListener('click',()=>{
        modal(i)
    })
})


modalCloses.forEach((modalClose)=>{
    modalClose.addEventListener('click',()=>{
        modalViews.forEach((modalView)=>{
            modalView.classList.remove('active-modal')
        })
    })
})