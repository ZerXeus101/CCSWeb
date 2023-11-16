var currentTheme = 1;

    // *list of themes:
    // *1. default
    // *2. autumn
    // *3. summer
    // *4. Achromatic
    // *5. Cyber Punk
    
console.log(currentTheme);

function logout() {
  window.location.href = "login.html";
}
function defaultTheme() {
  if (currentTheme == 2 || currentTheme == 3 || currentTheme == 4 || currentTheme == 5) {
    document.getElementById("theme").className = "default";
    console.log(currentTheme);
  }
}
function autumnTheme() {
    if (currentTheme == 1 || currentTheme == 3 || currentTheme == 4 || currentTheme == 5) {
      document.getElementById("theme").className = "autumn";
      currentTheme = 2;
    }
}

function summerTheme() {
    if (currentTheme == 1 || currentTheme == 2 || currentTheme == 4 || currentTheme == 5) {
      document.getElementById("theme").className = "summer";
      currentTheme = 3;
    }
}

function achromaticTheme() {
    if (currentTheme == 1 || currentTheme == 2 || currentTheme == 3 || currentTheme == 5) {
      document.getElementById("theme").className = "achromatic";
      currentTheme = 4;
    }
}

function cyberpunkTheme() {
    if (currentTheme == 1 || currentTheme == 2 || currentTheme == 3 || currentTheme == 4) {
      document.getElementById("theme").className = "cyberpunk";
      currentTheme = 5;
    }
}
