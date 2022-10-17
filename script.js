//PopUp box for new tab
let newTabButton = document.getElementById("tab-button");

newTabButton.addEventListener("click", TabPopUp);

function TabPopUp() {
  console.log("this event worked");
  let popUp = document.getElementById("newTabBoxPopUpHidden");
  popUp.removeAttribute("id");
  popUp.classList.add("newTabBoxPopUp");
}

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
