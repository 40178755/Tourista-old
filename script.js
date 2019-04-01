

function submitClick(form) {
  alert("Submitted!");
}

function resetClick() {
    return confirm("Are you sure you want to reset all text?");
}

function hide (elements) {
  elements = elements.length ? elements : [elements];
  for (var index = 0; index < elements.length; index++) {
    elements[index].style.display = 'none';
  }
}

// 'self' means 'this' from current scope
var cn = function(self) {
    // render class 'nav-..' and get last number
    return (self).className.substr(4);
  },
  tcw = $('.tab-content-wrapper');

$('.tab-nav-wrapper ul li').hover(function() {
  tcw.children().hide(); // hide all 'tabs' under this scope
  tcw.children('.tab' + cn(this) + '-c').show(); // show current 'tab' by a class name
});
