var listItem = document.getElementsByTagName("LI");
var i;
for (i = 0; i < listItem.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  listItem[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var j;
for (j = 0; j < close.length; i++) {
  close[j].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
