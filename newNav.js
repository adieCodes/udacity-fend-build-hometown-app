// jQuery IIFE to reduce risk of conflict
(function($, window, document){
  // capture viewport width
  var viewportWidth = $(window).innerWidth();

  // Checks viewport width
  function hamburgerMenu(vw){
    if(vw < 381){
      // add icons if less equal to or less than 380px
      var hamburgerMenuContent = '<div class="nav__toggle">'+
        '<button class="open-menu">&#9776;</button>'+
        '<button class="close-menu hide">&#735;</button>'+
        '</div><!--.nav__toggle-->';
      $('.nav__list').before(hamburgerMenuContent);
      $('.nav__list').addClass('hide');
      $('.open-menu').on('click', function(){
        $('.nav__list').removeClass('hide');
        $('button.open-menu').addClass('hide');
        $('button.close-menu').removeClass('hide');
      });
      $('.close-menu').click(function(){
        $('.nav__list').addClass('hide');
        $('button.open-menu').removeClass('hide');
        $('button.close-menu').addClass('hide');
      })
    } else{
      $('.nav__toggle').hide();
      $('.nav__list').removeClass('hide');
    }
  };
  hamburgerMenu(viewportWidth);

  // Add menu after viewport change, using [CSS Tricks Tip](https://css-tricks.com/snippets/jquery/done-resizing-event/) to ensure only one resize fired
  var resizeTimer;

  $(window).on('resize', function(e){
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function(){
      viewportWidth = $(window).innerWidth();
      hamburgerMenu(viewportWidth);
      console.log(viewportWidth);
    }, 250);
  });
}(window.jQuery, window, document));
