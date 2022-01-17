const ind = document.getElementById("index")

document.addEventListener("scroll", function() {
  var posy = window.pageYOffset
  if (posy >= 648){
    ind.style.position = "fixed"
    ind.style.top = "0px"
  }else {
    ind.style.position = "absolute"
    ind.style.top = ""
  }
});
