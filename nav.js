// jQuery IIFE to reduce risk of conflict with other libraries
(function($, window, document){
  // capture viewport width
  var viewportWidth = $(window).innerWidth();

  function hamburgerMenu(vw){
    // add hamburger menu content dynamically, to reduce impact on screen readers
    var hamburgerMenuContent = '<div class="nav__toggle hide">'+
      '<button class="open-menu">&#9776;</button>'+
      '<button class="close-menu hide">&#735;</button>'+
      '</div><!--.nav__toggle-->';
    $('.nav__list').before(hamburgerMenuContent);
    if(vw < 381){
      $('.nav__toggle').removeClass('hide');
      $('.nav__list').addClass('hide');
      // display navigation link and cross and hide hamburger icon when hamburger is clicked
      $('.open-menu').click(function(){
        $('.nav__list').removeClass('hide').addClass('show');
        $('button.open-menu').addClass('hide');
        $('button.close-menu').removeClass('hide');
      });
      // display hamburger icon and hide navigation links and cross when cross is clicked
      $('.close-menu').click(function(){
        $('.nav__list').removeClass('show').addClass('hide');
        $('button.open-menu').removeClass('hide');
        $('button.close-menu').addClass('hide');
      })
    } else{
      // hide hamburger content and display nav if viewport is greater than 380px
      $('.nav__toggle').addClass('hide');
      $('.nav__list').removeClass('hide');
    }
  };
  hamburgerMenu(viewportWidth);

  // Add menu after viewport change, using method from [CSS Tricks](https://css-tricks.com/snippets/jquery/done-resizing-event/) to ensure only one resize fired
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
