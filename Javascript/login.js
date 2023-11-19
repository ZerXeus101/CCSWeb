var attempt = 3;
var adminUserName = "admin"
var adminUserPass = "admin1"

function request(form) {
    var username = form.user.value;
    var password = form.pass.value;
    var userLength = form.user.value.trim().length;
    var passLength = form.pass.value.trim().length;
    
    attempt--;

    var userType = form.userType.value;

    console.log(userType);

    if (userType == "1") {
        handleError(userLength, passLength, attempt, username, password);
        handleAttempt(attempt);
        handleLogIn(username,password);
    }
    else if (userType == "2") {
        let containsNonNumber = false;
        let isSixDigits = false;

        for (let i = 0; i < password.length; i++) {
        if (isNaN(password[i])) {
            containsNonNumber = true;
            break;
            }
        }

        if (password.length == 6) {
            isSixDigits = true;
        }
    
        if (containsNonNumber || !isSixDigits) {
            password = false;
        } else {
            password = true;
        }

        handleErrorForStudent(userLength, passLength, attempt, username, password);
        handleAttempt(attempt);
        handleLogInForStudent(username,password);
    }
    else if (userType == "3") {
        let containsNumber = false;
        let containsUpperCase = false;
        let isSixDigits = false;

        
        if (password.length == 6) {
            isSixDigits = true;
        }

        for (let i = 0; i < password.length; i++) {
            if (Number(password[i])) {
                containsNumber = true;
                break;
            }
        }
    
        for (let i = 0; i < password.length; i++) {
            if (password[i] !== password[i].toLowerCase()) {
                containsUpperCase = true;
                break;
            }
        }

        if (containsUpperCase) {
            console.log(containsUpperCase);
        }

        if (containsNumber && containsUpperCase && isSixDigits) {
            password = true;
        } else {
            password = false;
        }

        handleErrorForFaculty(userLength, passLength, attempt, username, password);
        handleAttempt(attempt);
        handleLogInForFaculty(username,password);
    }
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

function handleError (userLength, passLength, attempt, username, password) {
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


function handleUserType(menu, form) {
    var userType = menu.value;
    if (userType == "1") {
        document.getElementById("input--button-login").disabled = false;
        document.getElementById("input--button-reset").disabled = false;
        form.user.value = "";
        form.pass.value = "";
    }
    else if (userType == "2") {
        document.getElementById("input--field-pass").setAttribute("maxlength", "6");
        form.user.value = "";
        form.pass.value = "";
        document.getElementById("input--button-login").disabled = false;
        document.getElementById("input--button-reset").disabled = false;
    }
    else if (userType == "3") {
        userType = "faculty";
        document.getElementById("input--field-pass").setAttribute("maxlength", "6");
        form.user.value = "";
        form.pass.value = "";
        document.getElementById("input--button-login").disabled = false;
        document.getElementById("input--button-reset").disabled = false;
    }
}

function handleErrorForStudent (userLength, passLength, attempt, username, password) {
    if (attempt == 0 || attempt < 0) {
        document.getElementById("error1").style.display = "none";
        document.getElementById("error2").style.display = "none";
        document.getElementById("error3").style.display = "flex";
        document.getElementById("error4").style.display = "none";
        document.getElementById("error5").style.display = "none";
    }
    else if (userLength == 0 || passLength == 0){
        document.getElementById("error1").style.display = "flex";
        document.getElementById("error2").style.display = "none";
        document.getElementById("error3").style.display = "none";
        document.getElementById("error4").style.display = "none";
        document.getElementById("error5").style.display = "none";
    }
    else if (userLength < 5 || passLength < 5) {
        document.getElementById("error1").style.display = "none";
        document.getElementById("error2").style.display = "flex";
        document.getElementById("error3").style.display = "none";
        document.getElementById("error4").style.display = "none";
        document.getElementById("error5").style.display = "none";
    }
    else if (username != adminUserName || !password) {
        document.getElementById("error1").style.display = "none";
        document.getElementById("error2").style.display = "none";
        document.getElementById("error3").style.display = "none";
        document.getElementById("error4").style.display = "none";
        document.getElementById("error5").style.display = "flex";
    }
}

function handleLogInForStudent(username, password) {
    if (username == adminUserName && password) {
        document.getElementById("error1").style.display = "none";
        document.getElementById("error2").style.display = "none";
        document.getElementById("error3").style.display = "none";
        document.getElementById("error5").style.display = "none";
        document.getElementById("count").style.display = "none";
        alert("Welcome Joshua Briones! You have successfully logged in!");
        attempt = attempt;
        window.location = "index.html";
    }
}

function handleErrorForFaculty (userLength, passLength, attempt, username, password) {
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
    else if (username != adminUserName || !password) {
        document.getElementById("error1").style.display = "none";
        document.getElementById("error2").style.display = "none";
        document.getElementById("error3").style.display = "none";
        document.getElementById("error6").style.display = "flex";
    }
}

function handleLogInForFaculty(username, password) {
    if (username == adminUserName && password) {
        document.getElementById("error1").style.display = "none";
        document.getElementById("error2").style.display = "none";
        document.getElementById("error3").style.display = "none";
        document.getElementById("error4").style.display = "none";
        document.getElementById("error5").style.display = "none";
        document.getElementById("error6").style.display = "none";
        document.getElementById("count").style.display = "none";
        alert("Welcome Joshua Briones! You have successfully logged in!");
        attempt = attempt;
        window.location = "index.html";
    }
}

function erase(form) {
    form.user.value = "";
    form.pass.value = "";
}