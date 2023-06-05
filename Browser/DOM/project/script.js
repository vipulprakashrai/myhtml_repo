var uid = new ShortUniqueId();
// Returns the first element that matches selectors.
const addBtn = document.querySelector(".add-btn");
const mainCont = document.querySelector(".main-cont");
const textArea = document.querySelector(".textarea-cont");
const colors = ["box1", "box2", "box3", "box4"];
let mainPriorityColor = colors[colors.length - 1];//black
const containt = document.querySelector(".container");
const allPriorityColors = document.querySelectorAll(".priority-color");
//console.log(allPriorityColors);
const toolBoxColors = document.querySelectorAll(".color-cont>*");
// console.log(toolBoxColors);
let ticketsArr = [];
const removeBtn = document.querySelector(".fa-xmark");
console.log(removeBtn);

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

function createTicket(ticketColor, data, ticketId ){
    // generate uid
    let id = ticketId || uid();

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
// if ticket is being generated for the first time save it in local storage
    
if(!ticketId){
    ticketsArr.push({
        ticketId: id,
        ticketColor,
        ticketTask: data
       });
       localStorage.setItem("tickets", JSON.stringify(ticketsArr));   
}
   
handleRemoval(ticketCont, id);

}

// getting the data from local storage for rerendering of tickets
if (localStorage.getItem("tickets")){
    ticketsArr = JSON.parse(localStorage.getItem("tickets"));
    ticketsArr.forEach(ticketObj => {
      createTicket(ticketObj.ticketColor, ticketObj.ticketTask, ticketObj.ticketId)
    })
}
 

allPriorityColors.forEach(colorElement => {
    colorElement.addEventListener("click", () => {
    allPriorityColors.forEach(element => {
        element.classList.remove("active");
    })    
     colorElement.classList.add("active");
     mainPriorityColor = colorElement.classList[0];
  })
});

// obtainng the ticket on the basis of ticket color

for( let i = 0; i<toolBoxColors.length; i++ ){
    toolBoxColors[i].addEventListener("click", () => {
        let currColor = toolBoxColors[i].classList[0];
        let filteredTickets = ticketsArr.filter(ticketObj => ticketObj.ticketColor == currColor);
        console.log(filteredTickets);
     // remove all tickets
     let allTickets = document.querySelectorAll(".ticket-cont");
     allTickets.forEach(ticket => ticket.remove());

     // displaying filtered tickets
     filteredTickets.forEach(ticket => createTicket(ticket.ticketColor, ticket.ticketTask, ticket.ticketId));
    })

    // double click functionality  
toolBoxColors[i].addEventListener("dblclick", () => {
    // remove tickets of specific color from UI

    let allTickets = document.querySelectorAll(".ticket-cont");
     allTickets.forEach(ticket => ticket.remove());

// display all tickets
ticketsArr.forEach(ticket => createTicket(ticket.ticketColor, ticket.ticketTask, ticket.ticketId));
})

}

// remove btn functionality->

var isRemoveBtnActive = false;
removeBtn.addEventListener("click", () => {
    // case1-> if removeBtn is not active then make it active i.e. red color
  if(!isRemoveBtnActive){
    removeBtn.style.color = "red";
  }

  // case2-> if removeBtn is active then make it inactive i.e. white color
  else if(isRemoveBtnActive){
    removeBtn.style.color = "white";
  }

  isRemoveBtnActive = !isRemoveBtnActive;

});

// remove btn functionality
function handleRemoval(ticketCont,id){
    ticketCont.addEventListener("click", function () {
      if (!isRemoveBtnActive) return;
  
      //remove from ticketsArr
      let idx = getTicketIdx(id);
      console.log(idx);
      ticketsArr.splice(idx, 1);
      console.log(ticketsArr);
      //set in local storage
      localStorage.setItem("tickets", JSON.stringify(ticketsArr));
      //remove from frontend
      ticketCont.remove();
    });
  }

  function getTicketIdx(id) { 
    let idx = ticketsArr.findIndex(ticketObj => {
      return ticketObj.ticketId==id
    })
    return idx;
  }