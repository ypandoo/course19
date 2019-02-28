var $el = $("#resize");
var elHeight = $el.outerHeight();
var elWidth = $el.outerWidth();

$(window).resize(function () {
  doResize();
});

// var $wrapper = $(window);

// $wrapper.resizable({
//   resize: doResize
// });

function doResize(event, ui) {
  
  var scale, origin;

  var scaleX = window.screen.width / elWidth;
  var scaleY = window.screen.height / elHeight
    
  // scale = Math.min(
  //   window.screen.availWidth / elWidth,    
  //   window.screen.availHeight / elHeight
  // );
  
  $el.css({
    transform: "translate(-50%, -50%) " + "scale(" + scaleX + ","+ scaleY +")"
  });
  
}

var starterData = { 
  size: {
    width: window.screen.availWidth,
    height: window.screen.availHeight
  }
}
doResize(null, starterData);