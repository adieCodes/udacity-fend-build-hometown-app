var viewWidth = $(window).width();

// code stolen from [Stack Overflow](http://stackoverflow.com/questions/2854407/javascript-jquery-window-resize-how-to-fire-after-the-resize-is-completed)

var waitForFinalEvent = (function () {
  var timers = {};
  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (timers[uniqueId]) {
      clearTimeout (timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();

$(window).resize(function(){
  waitForFinalEvent(function(){
    viewWidth = $(window).width();
    responsiveMenu(viewWidth);
  }, 500, "some unique string")
});

function responsiveMenu(viewWidth){
  if(viewWidth < 380) {
    $(".close-menu" ).hide();
    $(".nav__list" ).hide();
    $(".nav__toggle").show();
    $(".open-menu" ).click(function() {
      $(".nav__list" ).slideToggle( "slow", function() {
        $(".open-menu" ).hide();
        $(".close-menu" ).show();
      });
    });

    $(".close-menu" ).click(function() {
      $(".nav__list" ).slideToggle( "slow", function() {
        $(".close-menu" ).hide();
        $(".open-menu" ).show();
      });
    });
  } else {
    $(".nav__toggle").hide();
    $(".nav__list").show();
  }
};

$(document).ready(function(){
  responsiveMenu(viewWidth);
})
