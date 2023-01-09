var tabLinks = document.getElementsByClassName("tab__links");
var tabContents = document.getElementsByClassName("tab__contents");

function opentab(tabName){
    for(tablink of tabLinks){
        tablink.classList.remove("block");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("hidden")
    }

    event.currentTarget.classList.add("active__link");
    document.getElementById(tabName).classList.add("active__tab")
    
}

