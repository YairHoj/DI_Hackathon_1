//PopUp box for new tab
let newTabButton = document.getElementById("tab-button");
var popUp;
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
let TabTitleInput;
//Take input from New Tab title and Append the value to the location select in NewBox to allow ToDo items in certain locations
$(document).ready(function () {
  $(document).on("submit", "#newTabForm", function () {
    TabTitleInput = document.getElementById("newTabForm").elements[0].value;
    let selectForm = document.getElementById("newBox-Location");
    let newSelect = document.createElement("option");
    newSelect.textContent = TabTitleInput;
    selectForm.append(newSelect);
    ExitTabPopUp();
    return false;
  });
});

//globalizing main grid area variables
let tabArea1 = document.getElementById("grid-item-tab1");
let tabArea2 = document.getElementById("grid-item-tab2");
let tabArea3 = document.getElementById("grid-item-tab3");
let tabArea4 = document.getElementById("grid-item-tab4");
let tabAreaArray = [tabArea1, tabArea2, tabArea3, tabArea4];
let isAreaFilled = [];
let tabCounter = 0;
let whichTabPlacement = true;

//Create a New tab
$(document).ready(function () {
  $(document).on("submit", "#newTabForm", function () {
    while (tabCounter < tabAreaArray.length) {
      if (tabAreaArray[tabCounter].childElementCount === 0) {
        isAreaFilled[tabCounter] = true;
      } else {
        isAreaFilled[tabCounter] = false;
      }
      tabCounter++;
    }
    let newTab = document.createElement("div");
    let newTabH3 = document.createElement("h3");
    newTabH3.textContent = TabTitleInput;

    newTab.style.width = "100%";
    newTab.style.height = "45px";
    newTab.style.backgroundColor = "white";

    switch (whichTabPlacement) {
      case isAreaFilled[0]:
        tabAreaArray[0].appendChild(newTab);
        newTab.appendChild(newTabH3);
        console.log("1");
        tabCounter = 0;
        break;
      case isAreaFilled[1]:
        tabAreaArray[1].append(newTab);
        newTab.appendChild(newTabH3);
        console.log("2");
        tabCounter = 0;
        break;
      case isAreaFilled[2]:
        tabAreaArray[2].append(newTab);
        newTab.appendChild(newTabH3);
        console.log("3");
        tabCounter = 0;
        break;
      case isAreaFilled[3]:
        tabAreaArray[3].append(newTab);
        newTab.appendChild(newTabH3);
        console.log("4");
        tabCounter = 0;
        break;
      default:
        alert("You can only make 4 tabs");
        break;
    }

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

var coll = document.getElementsByClassName("collapsible");
var i;
var svg = document.getElementsByClassName("collapsible-image");
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "1px";
    }
  });
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
