/*
  Expandable Listmenu Script
  Author : Daniel Nolan
  http://www.bleedingego.co.uk/webdev.php
*/

function initMenus() {
  
  if (!document.getElementsByTagName) return;
  
  var aMenus = document.getElementsByTagName("LI");
  for (var i = 0; i < aMenus.length; i++) {
    var mclass = aMenus[i].className;
    if (mclass.indexOf("treenode") > -1) {
      var submenu = aMenus[i].childNodes;
      for (var j = 0; j < submenu.length; j++) {
        if (submenu[j].tagName == "A") {
          
          submenu[j].onclick = function() {
            var node = this.nextSibling;
                      
            while (1) {
              if (node != null) {
                if (node.tagName == "UL") {
                  var d = (node.style.display == "none")
                  node.style.display = (d) ? "block" : "none";
                  this.className = (d) ? "treeopen" : "treeclosed";
                  return false;
                }
                node = node.nextSibling;
              } else {
                return false;
              }
            }
            return false;
          }
          
          submenu[j].className = (mclass.indexOf("open") > -1) ? "treeopen" : "treeclosed";
        }
        
        if (submenu[j].tagName == "UL")
          submenu[j].style.display = (mclass.indexOf("open") > -1) ? "block" : "none";
      }
    }
  }
}

window.onload = initMenus;

function toggleMe(a){
var e=document.getElementById(a);
if(!e)return true;
if(e.style.display=="none"){
e.style.display="block"
}
else{
e.style.display="none"
}
return true;
}

