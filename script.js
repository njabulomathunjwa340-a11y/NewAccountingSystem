// New Accounting System
// Version 1.0

document.addEventListener("DOMContentLoaded", function () {

    const loginButton = document.querySelector("button");

    loginButton.addEventListener("click", function () {

        const company = document.querySelectorAll("input")[0].value;
        const username = document.querySelectorAll("input")[1].value;
        const password = document.querySelectorAll("input")[2].value;

        if (company === "" || username === "" || password === "") {
            alert("Please complete all login details.");
            return;
        }

        alert("Welcome to New Accounting System, " + username + "!");

            // Open dashboard after successful login
        window.location.href = "dashboard.html";

});