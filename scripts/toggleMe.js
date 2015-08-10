function forEachElement(selector, fn) {
  var elements = document.querySelectorAll(selector);
  for (var i = 0; i < elements.length; i++)
    fn(elements[i], i);
}

function hideOnLoad () {
	forEachElement('.hiddenOnLoad', function(el, i){
		el.style.display="none";
	});
}

function toggleMe(a) {
	var e = document.getElementById(a);
	if(!e) return false;

	if(e.style.display=="none") {
		e.style.display="block"
	}
	else{
		e.style.display="none"
	}

	return true;
}

window.onload = hideOnLoad();