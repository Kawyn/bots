var activated = true;

var nextVideo = document.getElementById("video-title");
var message = "";

export default (text) => {
    
    message = text;
    
    // Import more...
    var script = document.createElement("script");
    script.src = "https://kawyn.github.io/bots/scripts/youtubeAutoComment.js";
    document.body.appendChild(script); 
}

Update();


function Update() {

    setTimeout(function() {

        if(!activated)
            return;






        document.getElementById("placeholder-area").click();
        document.getElementById("contenteditable-root").textContent = message;
        
                var submitButton = document.getElementById("submit-button");
        submitButton.removeAttribute("disabled");
        submitButton.children[0].click();

        setTimeout(function() { nextVideo.click(); Update(); }, 2500);
    }, 7500);
}
window.addEventListener("keydown", function(event) { 

    if(event.keyCode === 45)
        activated = !activated;
});
