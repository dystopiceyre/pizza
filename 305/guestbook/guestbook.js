document.getElementById("guestbook").onsubmit = validate;

function validate() {
    var isValid = true;

    //Clears error messages
    var errors = document.getElementsByClassName("err");
    for (var i=0; i<errors.length; i++) {
        errors[i].style.display = "block";
    }

    //Check first name
    var first = document.getElementById("firstName").value;
    if (first == "") {
        var errFirst = document.getElementById("err-fname");
        errFirst.style.display = "block";
        isValid = false;
    }

    //Check last name
    var last = document.getElementById("lastName").value;
    if (last == "") {
        var errLast = document.getElementById("err-lname");
        errLast.style.display = "block";
        isValid = false;
    }

    // Check how we met
    document.getElementById("meet").onclick = ifOther;
    var howMet = document.getElementById("meet");
    if (howMet == "pholder") {
        var errMeet = document.getElementById("err-meet");
        errMeet.style.display = "block";
        isValid =  false;
    }

    //Validate email address
    var addMe = document.getElementById("add-me").value;
    if (addMe == "checked") {
        mailingList();
    }

    //validate LinkedIn URL
    var linkedIn = document.getElementById("linkedin").value;
    var url = linkedIn.search("https://www.linkedin.com/in/");
    if (url < 0) {
        var errLinkedIn = document.getElementById("err-linkedin");
        errLinkedIn.style.display = "block";
        isValid = false;
    }

    return isValid;
}

function ifOther() {
    var meet = document.getElementById("meet").value;
    if (meet == "other") {
        var otherSpan = document.getElementById("otherSpan");
        otherSpan.style.display = "block";
    }

    var other = document.getElementById("if-other").value;
    if (other == "") {
        var errSpecify = document.getElementById("err-specify");
        errSpecify.style.display = "block";
        return false;
    }
}

function mailingList() {
    var emailAddress = document.getElementById("email").value;
    var search = emailAddress.search("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}");
    if (search < 0) {
        var errEmail = document.getElementById("err-email");
        errEmail.style.display = "block";
        return false;
    }
}