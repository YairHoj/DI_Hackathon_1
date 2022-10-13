//PopUp box for new tab
let newTabButton = document.getElementById("tab-button");

newTabButton.addEventListener("click", TabPopUp);

function TabPopUp() {
  console.log("this event worked");
  let popUp = document.getElementById("newTabBoxPopUpHidden");
  popUp.removeAttribute("id");
  popUp.classList.add("newTabBoxPopUp");
}

// Take input from New Tab title and Append the value to the location select in NewBox to allow ToDo items in certain locations
$(document).ready(function () {
  $(document).on("submit", "#newTabForm", function () {
    let TabTitleInput = document.getElementById("newTabForm").elements[0].value;
    let selectForm = document.getElementById("newBox-Location");
    console.log(TabTitleInput);
    let newSelect = document.createElement("option");
    newSelect.textContent = TabTitleInput;
    selectForm.append(newSelect);
    return false;
  });
});

//Create a new Tab
function CreateTab() {
  let newTab = document.createElement("div");
}

//popup and dissapear function for new todo box
let newBoxButton = document.getElementById("box-button");

newBoxButton.addEventListener("click", boxPopUp);

function boxPopUp() {
  let popUp = document.getElementById("newBoxPopUpHidden");
  popUp.removeAttribute("id");
  popUp.classList.add("newBoxPopUp");
}
