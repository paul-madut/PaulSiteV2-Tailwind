var tabLinks = document.getElementsByClassName("tab__links");
var tabContents = document.getElementsByClassName("tab__contents");

function opentab(tabName){
    for(tablink of tabLinks){
        tablink.classList.remove("active__link");
        tablink.classList.add("inactive__link");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active__tab")
        tabContent.classList.add("inactive__tab")
    }

    event.currentTarget.classList.add("active__link");
    event.currentTarget.classList.remove("inactive__link");
    document.getElementById(tabName).classList.add("active__tab")
    document.getElementById(tabName).classList.remove("inactive__tab")
    
}

const toggleMenu = () =>{

    let navList = document.getElementById('nav__list');
    let menuIcon = document.getElementById('menu__icon');
    let closeIcon = document.getElementById('close__icon');

    menuIcon.classList.toggle('invisible')
    closeIcon.classList.toggle('invisible')

    navList.classList.toggle('hidden')
}

const menu = document.getElementsByClassName("menu")
console.log(menu)
