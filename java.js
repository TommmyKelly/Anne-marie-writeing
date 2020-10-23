
var menuButHide = document.getElementById("menu");
var xButHide = document.getElementById("closemenu");
var gr = document.getElementById("ii");

menuButHide.addEventListener("click",function(){
    menuButHide.style.display = "none"
    xButHide.style.display = "inline-block"
    // document.body.style.background ="#4a4f53"
    // document.body.style.color ="#4a4f53"
    // document.body.style.borderColor ="#4a4f53"
    
    // xButHide.style.transition = "all 2s"
    //xButHide.style.transform = "rotate(75deg)"
    // //xButHide.style.transform = "rotate(90deg)"
    
});

xButHide.addEventListener("click",function(){
    xButHide.style.display = "none"
    menuButHide.style.display = "inline-block"
    // document.body.style.background =""
    // document.body.style.color ="#0082e6"
   
    // xButHide.style.transition = "all 2s"
    // xButHide.style.transform = "rotate(90deg)"
    // xButHide.style.transform = "rotate(90deg)"

});

function test(){
    alert("test1")
}

var looper;
var degrees = 0;

function rot(el,speed){
    
 xButHide.style.transform = "rotate("+degrees+"deg)";
  looper = setTimeout('rot(\''+el+'\','+speed+')',speed)
  degrees++;
  if (degrees == 90){
      clearInterval(looper)
  }
  
}

function start(){
    degrees = 0;
    rot('menu',2)
}

function removeToggleAlign(elem){
    
    var buttonsList = document.getElementsByClassName('align');
    for(i = 0;i < buttonsList.length;i++){
      buttonsList[i].classList.remove('active')
      elem.classList.add('active')
    
      
    }
}  