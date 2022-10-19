//function to capatalize the first letter of each sentance
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//PopUp box for new tab
let e = false;
let newTabButton = document.getElementById("tab-button");
var popUp;
let tabPopUp;
let isTabBoxPopUpActive;
function TabPopUp() {
  if (e == false) {
    console.log("this event worked");
    popUp = document.getElementById("newTabBoxPopUpHidden");
    popUp.removeAttribute("id");
    popUp.classList.add("newTabBoxPopUp");
    isTabBoxPopUpActive = true;
    e = true;
  }
}
console.log("hi");
newTabButton.addEventListener("click", TabPopUp);
//Exit PopUp Tab

function ExitTabPopUp() {
  popUp.removeAttribute("class");
  popUp.setAttribute("id", "newTabBoxPopUpHidden");
  e = false;
}
let TabTitleInput;
//Take input from New Tab title and Append the value to the location select in NewBox to allow ToDo items in certain locations
$(document).ready(function () {
  $(document).on("submit", "#newTabForm", function () {
    TabTitleInput = document.getElementById("newTabForm").elements[1].value;
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
let gridCol1 = document.getElementsByClassName("grid-item-box-col1");
let gridCol2 = document.getElementsByClassName("grid-item-box-col2");
let gridCol3 = document.getElementsByClassName("grid-item-box-col3");
let gridCol4 = document.getElementsByClassName("grid-item-box-col4");

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
    newTab.setAttribute("id", TabTitleInput);
    let newTabH3 = document.createElement("p");
    newTabH3.textContent = capitalizeFirstLetter(TabTitleInput);
    console.log(TabTitleInput);

    newTab.classList.add("title-class");
    newTab.style.width = "100%";
    newTab.style.height = "45px";
    // newTab.style.backgroundColor = "rgba(249, 105, 14, 0.7)";
    newTab.style.borderRadius = "30px";
    newTabH3.style.color = "white";
    // newTabH3.style.border = "2pt solid black";
    // newTabH3.style.borderRadius = "10px";
    newTabH3.style.fontFamily = "Poppins,sans-serif";
    newTabH3.style.fontWeight = "bolder";
    newTabH3.style.fontSize = "24px";
    let toDoBoxCounter = 0;

    switch (whichTabPlacement) {
      case isAreaFilled[0]:
        tabAreaArray[0].appendChild(newTab);
        newTab.appendChild(newTabH3);
        tabCounter = 0;
        //within the newtab function also set the grid column to be the same id as the given title
        while (gridCol1.length > toDoBoxCounter) {
          gridCol1[toDoBoxCounter].setAttribute("id", TabTitleInput);
          toDoBoxCounter++;
        }
        break;
      case isAreaFilled[1]:
        tabAreaArray[1].append(newTab);
        newTab.appendChild(newTabH3);
        tabCounter = 0;
        //within the newtab function also set the grid column to be the same id as the given title
        while (gridCol2.length > toDoBoxCounter) {
          gridCol2[toDoBoxCounter].setAttribute("id", TabTitleInput);
          toDoBoxCounter++;
        }
        break;
      case isAreaFilled[2]:
        tabAreaArray[2].append(newTab);
        newTab.appendChild(newTabH3);
        tabCounter = 0;
        //within the newtab function also set the grid column to be the same id as the given title
        while (gridCol3.length > toDoBoxCounter) {
          gridCol3[toDoBoxCounter].setAttribute("id", TabTitleInput);
          toDoBoxCounter++;
        }
        break;
      case isAreaFilled[3]:
        tabAreaArray[3].append(newTab);
        newTab.appendChild(newTabH3);
        tabCounter = 0;
        //within the newtab function also set the grid column to be the same id as the given title
        while (gridCol4.length > toDoBoxCounter) {
          gridCol4[toDoBoxCounter].setAttribute("id", TabTitleInput);
          toDoBoxCounter++;
        }
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
  if (e == false) {
    let popUp = document.getElementById("newBoxPopUpHidden");
    popUp.removeAttribute("id");
    popUp.classList.add("newBoxPopUp");
    isToDoBoxPopUpActive = true;
    e = true;
  }
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
  e = false;
}
//globalizing todobox variables
let isColBoxOpen = true;

let newBoxCounter = 0;
let isBoxFilled1 = [];
let isBoxFilled2 = [];
let isBoxFilled3 = [];
let isBoxFilled4 = [];

let boxTitleInput = document.getElementById("newToDoBox").elements[0].value;
let boxLocation = document.getElementById("newToDoBox").elements[1].value;
let boxBody = document.getElementById("newToDoBox").elements[2].value;

let whichBoxPlacement = true;
//Create a TodoBox

$(document).ready(function () {
  $(document).on("submit", "#newToDoBox", function () {
    let gridCol1ID = gridCol1[0].getAttribute("id");
    let gridCol2ID = gridCol2[0].getAttribute("id");
    let gridCol3ID = gridCol3[0].getAttribute("id");
    let gridCol4ID = gridCol4[0].getAttribute("id");

    let boxTitleInput = document.getElementById("newToDoBox").elements[0].value;
    let boxLocation = document.getElementById("newToDoBox").elements[1].value;
    let boxBody = document.getElementById("newToDoBox").elements[2].value;

    let toDoBoxCreation = document.createElement("div");
    let toDoBoxTitle = document.createElement("h2");
    toDoBoxTitle.textContent = boxTitleInput;
    let toDoBoxBody = document.createElement("p");
    toDoBoxBody.textContent = boxBody;



    // todobox (whole box)
    toDoBoxCreation.classList.add("todobox-class");
    toDoBoxCreation.style.height = "200px";
    toDoBoxCreation.style.width = "250px";
    toDoBoxCreation.style.display = "block";
    toDoBoxCreation.style.flexWrap = "wrap";

    // todobox title
    toDoBoxTitle.classList.add("todoboxtitle");
    toDoBoxTitle.style.fontSize = "20px";
    toDoBoxTitle.style.fontWeight = "200px";
    toDoBoxTitle.style.fontFamily = "Poppins,sans-serif";
    toDoBoxTitle.style.color = "white";

    // todobox body
    toDoBoxBody.classList.add("todoboxbody");
    toDoBoxBody.style.fontSize = "15px";
    toDoBoxBody.style.fontFamily = "Poppins,sans-serif";
    toDoBoxBody.style.color = "white";

    // newTab.style.width = "100%";
    // newTab.style.height = "45px";
    // newTab.style.borderRadius = "5px";
    // newTabH3.style.color = "white";
    // newTabH3.style.fontFamily = "Poppins,sans-serif";
    // newTabH3.style.fontWeight = "300px";
    // newTabH3.style.fontSize = "24px";

    if (gridCol1ID === boxLocation) {
      while (newBoxCounter < gridCol1.length) {
        if (gridCol1[newBoxCounter].childElementCount === 0) {
          isBoxFilled1[newBoxCounter] = true;
        } else {
          isBoxFilled1[newBoxCounter] = false;
        }
        newBoxCounter++;
      }
      console.log("1");
      switch (whichBoxPlacement) {
        case isBoxFilled1[0]:
          gridCol1[0].appendChild(toDoBoxCreation);
          toDoBoxCreation.appendChild(toDoBoxTitle);
          toDoBoxCreation.appendChild(toDoBoxBody);

          newBoxCounter = 0;
          break;
        case isBoxFilled1[1]:
          gridCol1[1].appendChild(toDoBoxCreation);
          toDoBoxCreation.appendChild(toDoBoxTitle);
          toDoBoxCreation.appendChild(toDoBoxBody);

          newBoxCounter = 0;
          break;
        case isBoxFilled1[2]:
          gridCol1[2].appendChild(toDoBoxCreation);
          toDoBoxCreation.appendChild(toDoBoxTitle);
          toDoBoxCreation.appendChild(toDoBoxBody);
          newBoxCounter = 0;
          break;
        case isBoxFilled1[3]:
          gridCol1[3].appendChild(toDoBoxCreation);
          toDoBoxCreation.appendChild(toDoBoxTitle);
          toDoBoxCreation.appendChild(toDoBoxBody);
          newBoxCounter = 0;
          break;
        case isBoxFilled1[4]:
          gridCol1[4].appendChild(toDoBoxCreation);
          toDoBoxCreation.appendChild(toDoBoxTitle);
          toDoBoxCreation.appendChild(toDoBoxBody);
          newBoxCounter = 0;
          break;
        default:
          alert("You have the max ToDo Boxes");
          newBoxCounter = 0;
          break;
      }
    } else if (gridCol2ID === boxLocation) {
      while (newBoxCounter < gridCol2.length) {
        if (gridCol2[newBoxCounter].childElementCount === 0) {
          isBoxFilled2[newBoxCounter] = true;
        } else {
          isBoxFilled2[newBoxCounter] = false;
        }
        newBoxCounter++;
      }
      console.log("2");
      switch (whichBoxPlacement) {
        case isBoxFilled2[0]:
          gridCol2[0].appendChild(toDoBoxCreation);
          toDoBoxCreation.appendChild(toDoBoxTitle);
          toDoBoxCreation.appendChild(toDoBoxBody);
          newBoxCounter = 0;
          break;
        case isBoxFilled2[1]:
          gridCol2[1].appendChild(toDoBoxCreation);
          toDoBoxCreation.appendChild(toDoBoxTitle);
          toDoBoxCreation.appendChild(toDoBoxBody);
          newBoxCounter = 0;
          break;
        case isBoxFilled2[2]:
          gridCol2[2].appendChild(toDoBoxCreation);
          toDoBoxCreation.appendChild(toDoBoxTitle);
          toDoBoxCreation.appendChild(toDoBoxBody);
          newBoxCounter = 0;
          break;
        case isBoxFilled2[3]:
          gridCol2[3].appendChild(toDoBoxCreation);
          toDoBoxCreation.appendChild(toDoBoxTitle);
          toDoBoxCreation.appendChild(toDoBoxBody);
          newBoxCounter = 0;
          break;
        case isBoxFilled2[4]:
          gridCol1[4].appendChild(toDoBoxCreation);
          toDoBoxCreation.appendChild(toDoBoxTitle);
          toDoBoxCreation.appendChild(toDoBoxBody);
          newBoxCounter = 0;
          break;
        default:
          alert("You have the max ToDo Boxes");
          newBoxCounter = 0;
          break;
      }
    } else if (gridCol3ID === boxLocation) {
      while (newBoxCounter < gridCol3.length) {
        if (gridCol3[newBoxCounter].childElementCount === 0) {
          isBoxFilled3[newBoxCounter] = true;
        } else {
          isBoxFilled3[newBoxCounter] = false;
        }
        newBoxCounter++;
      }
      console.log("3");
      switch (whichBoxPlacement) {
        case isBoxFilled3[0]:
          gridCol3[0].appendChild(toDoBoxCreation);
          toDoBoxCreation.appendChild(toDoBoxTitle);
          toDoBoxCreation.appendChild(toDoBoxBody);
          newBoxCounter = 0;
          break;
        case isBoxFilled3[1]:
          gridCol3[1].appendChild(toDoBoxCreation);
          toDoBoxCreation.appendChild(toDoBoxTitle);
          toDoBoxCreation.appendChild(toDoBoxBody);
          newBoxCounter = 0;
          break;
        case isBoxFilled3[2]:
          gridCol1[2].appendChild(toDoBoxCreation);
          toDoBoxCreation.appendChild(toDoBoxTitle);
          toDoBoxCreation.appendChild(toDoBoxBody);
          newBoxCounter = 0;
          break;
        case isBoxFilled3[3]:
          gridCol3[3].appendChild(toDoBoxCreation);
          toDoBoxCreation.appendChild(toDoBoxTitle);
          toDoBoxCreation.appendChild(toDoBoxBody);
          newBoxCounter = 0;
          break;
        case isBoxFilled3[4]:
          gridCol3[4].appendChild(toDoBoxCreation);
          toDoBoxCreation.appendChild(toDoBoxTitle);
          toDoBoxCreation.appendChild(toDoBoxBody);
          newBoxCounter = 0;
          break;
        default:
          alert("You have the max ToDo Boxes");
          newBoxCounter = 0;
          break;
      }
    } else if (gridCol4ID === boxLocation) {
      while (newBoxCounter < gridCol4.length) {
        if (gridCol4[newBoxCounter].childElementCount === 0) {
          isBoxFilled4[newBoxCounter] = true;
        } else {
          isBoxFilled4[newBoxCounter] = false;
        }
        newBoxCounter++;
      }
      console.log("4");
      switch (whichBoxPlacement) {
        case isBoxFilled4[0]:
          gridCol4[0].appendChild(toDoBoxCreation);
          toDoBoxCreation.appendChild(toDoBoxTitle);
          toDoBoxCreation.appendChild(toDoBoxBody);
          newBoxCounter = 0;
          break;
        case isBoxFilled4[1]:
          gridCol4[1].appendChild(toDoBoxCreation);
          toDoBoxCreation.appendChild(toDoBoxTitle);
          toDoBoxCreation.appendChild(toDoBoxBody);
          newBoxCounter = 0;
          break;
        case isBoxFilled4[2]:
          gridCol4[2].appendChild(toDoBoxCreation);
          toDoBoxCreation.appendChild(toDoBoxTitle);
          toDoBoxCreation.appendChild(toDoBoxBody);
          newBoxCounter = 0;
          break;
        case isBoxFilled4[3]:
          gridCol4[3].appendChild(toDoBoxCreation);
          toDoBoxCreation.appendChild(toDoBoxTitle);
          toDoBoxCreation.appendChild(toDoBoxBody);
          newBoxCounter = 0;
          break;
        case isBoxFilled4[4]:
          gridCol4[4].appendChild(toDoBoxCreation);
          toDoBoxCreation.appendChild(toDoBoxTitle);
          toDoBoxCreation.appendChild(toDoBoxBody);
          newBoxCounter = 0;
          break;
        default:
          alert("You have the max ToDo Boxes");
          newBoxCounter = 0;
          break;
      }
    }
    console.log(boxLocation);
    ExitBoxPopUp();
    return false;
  });
});

//Zachary Amdur and Yair Hojberg
