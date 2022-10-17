//PopUp box for new tab
let newTabButton = document.getElementById("tab-button");

let tabPopUp;
let isTabBoxPopUpActive;
function TabPopUp() {
  console.log("this event worked");
  popUp = document.getElementById("newTabBoxPopUpHidden");
  popUp.removeAttribute("id");
  popUp.classList.add("newTabBoxPopUp");
  isTabBoxPopUpActive = true;
}
newTabButton.addEventListener("click", TabPopUp);
//Exit PopUp Tab

function ExitTabPopUp() {
  popUp.removeAttribute("class");
  popUp.setAttribute("id", "newTabBoxPopUpHidden");
}

//Take input from New Tab title and Append the value to the location select in NewBox to allow ToDo items in certain locations
$(document).ready(function () {
  $(document).on("submit", "#newTabForm", function () {
    let TabTitleInput = document.getElementById("newTabForm").elements[0].value;
    let selectForm = document.getElementById("newBox-Location");
    let newSelect = document.createElement("option");
    newSelect.textContent = TabTitleInput;
    selectForm.append(newSelect);
    ExitTabPopUp();
    return false;
  });
});

//Create a New tab
$(document).ready(function () {
  $(document).on("submit", "#newTabForm", function () {
    let newTab = document.createElement("div");
    return false;
  });
});

//popup and dissapear function for new todo box
let newBoxButton = document.getElementById("box-button");
let isToDoBoxPopUpActive;
newBoxButton.addEventListener("click", boxPopUp);

function boxPopUp() {
  let popUp = document.getElementById("newBoxPopUpHidden");
  popUp.removeAttribute("id");
  popUp.classList.add("newBoxPopUp");
  isToDoBoxPopUpActive = true;
}

// Exit button for new todo box
let toDoBoxPopUp;
toDoBoxPopUp = document.getElementById("newBoxPopUpHidden");

function ExitBoxPopUp() {
  toDoBoxPopUp.removeAttribute("class");
  toDoBoxPopUp.setAttribute("id", "newBoxPopUpHidden");
}

//Create a TodoBox
$(document).ready(function () {
  $(document).on("submit", "#newToDoBox", function () {
    ExitBoxPopUp();
    return false;
  });
});
