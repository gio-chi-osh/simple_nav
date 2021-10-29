var cssNode = document.createElement('link');
cssNode.setAttribute('rel', 'stylesheet');
cssNode.setAttribute('type', 'text/css');
cssNode.setAttribute('href', 'test-overrides.css');
document.getElementsByTagName('head')[0].appendChild(cssNode);

function swap(toggler){
  //console.log("say something 1");
  if (document.getElementById) {
    target = toggler.nextSibling;
    
    //console.log("say something 2");
    if (target.className == undefined) {
      target = toggler.nextSibling.nextSibling;
    }
    if (target.style.display === "block"){
      target.style.display = "none";
      //console.log("say something 3");
    } else {
      target.style.display = "block";
      //console.log("say something 4");
    }
  }
}
