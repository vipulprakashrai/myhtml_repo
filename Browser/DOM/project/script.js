var uid = new ShortUniqueId();
// Returns the first element that matches selectors.
const addBtn = document.querySelector(".add-btn");
const mainCont = document.querySelector(".main-cont");
const textArea = document.querySelector(".textarea-cont");
const colors = ["box1", "box2", "box3", "box4"];
let mainPriorityColor = colors[colors.length - 1];//black
const containt = document.querySelector(".container");

var isMaincontPresent = false;
addBtn.addEventListener("click", function(e){
       // console.log(e);
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

mainCont.addEventListener("keydown", function(e){
    // console.log(e);
    if(e.key == "Shift"){
        //1- call createTicket
        console.log(textArea.value);
        createTicket(mainPriorityColor, textArea.value)
        //2- display none
        mainCont.style.display = "none"
        //3- after display,update isMaincontPresent
        isMaincontPresent = false;
        textArea.value = "";
    }

});

function createTicket(ticketColor, data){
    // generate uid
    let id = uid();

    let ticketCont = document.createElement("div");
    ticketCont.setAttribute("class", "ticket-cont");
    ticketCont.innerHTML = `
        <div class="ticket-color ${ticketColor}"></div>
        <div class="ticket-id">${id}</div>
        <div class="task-area">${data}</div>
        <div class="ticket-lock">
            <i class="fa-solid fa-lock"></i>
        </div>
    
    `;
    containt.appendChild(ticketCont);
}


