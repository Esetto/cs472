function increaseFont(){
    let txt = document.getElementById("text");
    style = window.getComputedStyle(txt, null).getPropertyValue('font-size');
    currentSize = parseFloat(style);
    txt.style.fontSize = (currentSize + 2) + 'px';
  }
function textChanges(){
var x = document.getElementById("check").checked;
if(x == true){
    document.getElementById("text").style.fontWeight = "bold";
    document.getElementById("text").style.color = "green";
    document.getElementById("text").style.textDecoration ="underline"
}else{
    document.getElementById("text").style.fontWeight = "normal";
    document.getElementById("text").style.color = "black";
    document.getElementById("text").style.textDecoration ="none"
}
}
function interval(){
    var int = setInterval(increaseFont,500);
    setTimeout(clearInterval, 4000,int)

}

window.onload = function () {
    var btn1= document.getElementById("decoration");
    btn1.onclick = interval;
  
    var check1= document.getElementById("check");
  
    check1.onchange = textChanges;
  
  }
  function malkovich(){
    var words = document.getElementById("text").value;
    var arr = words.split(/\s+/);
    var result = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= 5) {
            arr[i] = "Malkovich";
        }
        result += arr[i] + " ";
    }
    document.getElementById("text").value = result;
  }