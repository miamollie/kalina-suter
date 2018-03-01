  $(document).ready(function(){

    // Menu toggle
    $('nav button').click( function() {
      $('body').toggleClass("no-scroll");
      $('nav').toggleClass("menu-open");
      $('nav ul').toggleClass("hide-sm");
      $('nav i').toggleClass("fa-bars");
      $('nav i').toggleClass  ("fa-window-close");
    });

    // Menu
    $('nav li').click(function() {
      $('body').removeClass('no-scroll');
      $('nav').removeClass("menu-open");
      $('nav ul').addClass("hide-sm");
      $('nav h3').text('menu');
    });

    // Gallery tabs
    $('[data-tab]').on('click', toggleGalleryTab);

    $('#dropdown-trigger').on('click', toggleDropdown);

  });

  $(window).load(function() {
    updateMasonry();
  });

  var toggleDropdown =  function() {
    $('#dropdown-body').toggleClass('show');
    $('#dropdown-trigger i').toggleClass('fa-angle-up');
    $('#dropdown-trigger i').toggleClass('fa-angle-down');
  }

  var toggleGalleryTab = function() {
    $('.tabs h2').removeClass('active');
    $(this).addClass('active');

    $('.tab-content').removeClass('show');

    var currentContent = $(this).attr('data-tab');
    $('#' + currentContent).addClass('show');

    setTimeout( function() {
      updateMasonry();
    }, 500);
  }

  var updateMasonry = function() {
    $('.masonry').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        gutter: 10,
    })
  }
