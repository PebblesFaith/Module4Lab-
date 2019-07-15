
function validateName() {
    var name = document.getElementById("commentName").value;
    if (name.length == 0) {

        producePrompt("Name is requried", "commentNamePrompt", "red");
        return false;

    }

}

function producePrompt(message, promptLocation, color) {
    document.getElementById(promptLocation).innerHTML = message;
    document.getElementById(promptLocation).style.color =color;
}