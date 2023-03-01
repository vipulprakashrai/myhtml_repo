// Returns the first element that matches selectors.
let addBtn = document.querySelector(".add-btn");
let mainCont = document.querySelector(".main-cont");


var isMaincontPresent = false;
addBtn.addEventListener("click", function(){

    // case1-> if maincont is not present then display
    // maincont.

    if(!isMaincontPresent){
           // display
        mainCont.style.display = "flex";   
    }
    // case2-> if maincont is present than hide it.

    else if(isMaincontPresent){
        // display none
        mainCont.style.display = "none";
    }
    isMaincontPresent = !isMaincontPresent;

})

// hovering on color-cont.



