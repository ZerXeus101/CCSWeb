let currentTheme = localStorage.getItem("theme");

document.getElementById("theme").className = currentTheme;

let buttons = document.querySelectorAll("button");

buttons.forEach(function (item) {
  item.addEventListener('click', function(){    
    let chosenTheme = getChosenTheme(this);
    changeTheme(chosenTheme);
  });
});

function changeTheme(chosenTheme) {
   currentTheme = document.getElementById("theme").className = chosenTheme;
   localStorage.setItem("theme", currentTheme);
}

function getChosenTheme(clicked_element) {
    let chosenTheme = clicked_element.getAttribute("data-theme");  
    return chosenTheme;
}


function resetTheme() {
  currentTheme = document.getElementById("theme").className = "default";
  localStorage.setItem("theme", currentTheme);
}
