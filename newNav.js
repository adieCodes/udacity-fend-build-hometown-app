// capture viewport width
var viewportWidth = $(window).innerWidth();

// Checks viewport width
function hamburgerMenu(viewportWidth){
  console.log(viewportWidth);
  if(viewportWidth < 381){
    // add icons if less equal to or less than 380px
    var hamburgerMenuContent = '<div class="nav__toggle">'+
      '<button class="open-menu">&#9776;</button>'+
      '<button class="close-menu hide">&#735;</button>'+
      '</div><!--.nav__toggle-->';
    $('.nav__list').before(hamburgerMenuContent);
  };
};
hamburgerMenu(viewportWidth);
