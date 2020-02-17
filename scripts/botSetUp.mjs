function start(text) {

    var script = document.createElement("script");
    script.src = "https://kawyn.github.io/bots/scripts/youtubeAutoComment.js";
    document.body.appendChild(script); 
    
    message = text;
}

export { start };
