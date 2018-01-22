  $(document).ready(function(){

    //Menu toggle
    $('nav button').click(function(){
      $('body').toggleClass("no-scroll");
      $('nav').toggleClass("menu-open");
      $('nav ul').toggleClass("hide-sm");
      if ( $('nav h3').text() == 'menu') {
        $('nav h3').text('X');
      } else {
        $('nav h3').text('menu');
      }
    });

    //MENU SELECTED
    $('nav li').click(function() {
      $('body').removeClass('no-scroll');
      $('nav').removeClass("menu-open");
      $('nav ul').addClass("hide-sm");
      $('nav h3').text('menu');
    });
  })