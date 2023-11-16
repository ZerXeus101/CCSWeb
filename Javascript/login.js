var attempt = 3;
var adminUserName = "admin"
var adminUserPass = "admin1"

function request(form) {
    var username = form.user.value;
    var password = form.pass.value;
    var userLength = form.user.value.trim().length;
    var passLength = form.pass.value.trim().length;
    attempt--;
    handleError(userLength, passLength, attempt, username, password);
    handleAttempt(attempt);
    handleLogIn(username,password);
}

function handleAttempt(attempt) {
    document.getElementById("count").style.display = "flex";
    document.getElementById("count").innerHTML = "attempts left: " + attempt;
	if (attempt == 0 || attempt < 0) {
		document.getElementById("input--field-user").disabled = true;
        document.getElementById("input--field-pass").disabled = true;
        document.getElementById("input--button-login").disabled = true;
        var userField = document.getElementById("input--field-user");
        var passField = document.getElementById("input--field-pass");
        userField.placeholder = "Locked";
        passField.placeholder = "Locked";
	}
}

function handleError(userLength, passLength, attempt, username, password) {
    if (attempt == 0 || attempt < 0) {
        document.getElementById("error1").style.display = "none";
        document.getElementById("error2").style.display = "none";
        document.getElementById("error3").style.display = "flex";
    }
    else if (userLength == 0 || passLength == 0){
        document.getElementById("error1").style.display = "flex";
    }
    else if (userLength < 5 || passLength < 5) {
        document.getElementById("error1").style.display = "none";
        document.getElementById("error2").style.display = "flex";
    }
    else if (username != adminUserName || password != adminUserPass) {
        document.getElementById("error1").style.display = "none";
        document.getElementById("error2").style.display = "none";
        document.getElementById("error3").style.display = "none";
        document.getElementById("error4").style.display = "flex";
    }
}

function handleLogIn(username, password) {
    if (username == adminUserName && password == adminUserPass) {
        document.getElementById("error1").style.display = "none";
        document.getElementById("error2").style.display = "none";
        document.getElementById("error3").style.display = "none";
        document.getElementById("error4").style.display = "none";
        document.getElementById("count").style.display = "none";
        alert("Welcome Joshua Briones! You have successfully logged in!");
        attempt = attempt;
        window.location = "index.html";
    }
}