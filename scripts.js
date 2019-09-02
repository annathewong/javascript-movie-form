window.onload = function () {
    // validate Movie Type
    document.getElementById("selectType").onclick = function () {
        if (document.getElementById("selectType").value === "horror") {
            return true;
        } else if (document.getElementById("selectType").value === "comedy") {
            return true;
        } else if (document.getElementById("selectType").value === "action") {
            return true;
        } else if (document.getElementById("selectType").value === "sci-fi") {
            return true;
        } else return false;
    }

    // box office price allows decimal and numbers only
    document.getElementById("boxOffice").onkeypress = function(event) {
        var kc = event.keyCode;
        if ((kc != 46 || this.value.indexOf(".") != -1) &&
            (kc > 32 && (kc < 48 || kc > 57))) {
            event.preventDefault();
        }
    }
}


function formCheck() {
    var success = true;

    //Retrieve the corresponding element
    var movieNameTxtBox = document.getElementById("movieName");
    var pictureNameTxtBox = document.getElementById("pictureName");
    var directorTxtBox = document.getElementById("director");
    var boxOfficeTxtBox = document.getElementById("boxOffice");
    var descriptionTxtBox = document.getElementById("description");

    //Retrieve the input name
    var movieName = movieNameTxtBox.value;
    var pictureName = pictureNameTxtBox.value;
    var director = directorTxtBox.value;
    var boxOffice = boxOfficeTxtBox.value;
    var description = descriptionTxtBox.value;

    //Retrieve the corresponding message box element
    var msgBox = document.getElementById("divMessage");
    msgBox.innerHTML = "";

    //Reset the colour of the textboxes to white
    movieNameTxtBox.setAttribute("class", "white");
    pictureNameTxtBox.setAttribute("class", "white");
    directorTxtBox.setAttribute("class", "white");
    boxOfficeTxtBox.setAttribute("class", "white");
    descriptionTxtBox.setAttribute("class", "white");

    //Shows error message, highlight colour and Boolean value to prevent submission of form
    if (movieName == "") {
        msgBox.innerHTML += "Please enter Name";
        movieNameTxtBox.setAttribute("class", "cyan");
        success = false;
    }

    if (document.movieForm.selectType.value === "-1") {
        msgBox.innerHTML += "<br>Please select Movie Type";
        success = false;
    }

    if (pictureName == "") {
        msgBox.innerHTML += "<br>Please enter Picture Name";
        pictureNameTxtBox.setAttribute("class", "cyan");
        success = false;
    }

    if (director == "") {
        msgBox.innerHTML += "<br>Please enter Director";
        directorTxtBox.setAttribute("class", "cyan");
        success = false;
    }

    if (boxOffice == "") {
        msgBox.innerHTML += "<br>Please enter Box Office amount";
        boxOfficeTxtBox.setAttribute("class", "cyan");
        success = false;
    }

    if (description == "") {
        msgBox.innerHTML += "<br>Please enter Description";
        descriptionTxtBox.setAttribute("class", "cyan");
        success = false;
    }

    return success;
}
