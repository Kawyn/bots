var activated = true;

var nextVideo = document.getElementById("video-title");
var message = "";



Update();


function Update() {

    setTimeout(function() {

        if(!activated)
            return;


        var submitButton = document.getElementById("submit-button");



        document.getElementById("placeholder-area").click();
        document.getElementById("contenteditable-root").textContent = message;
        submitButton.removeAttribute("disabled");
        submitButton.children[0].click();

        setTimeout(function() { nextVideo.click(); Update(); }, 2500);
    }, 7500);
}
window.addEventListener("keydown", function(event) { 

    if(event.keyCode === 45)
        activated = !activated;
});