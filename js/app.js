$(document).ready(function () {
  // Initialize Fullpage.js
  $('#fullpage').fullpage({
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
  });

  //methods
  $.fn.fullpage.setAllowScrolling(true);

  //Set Footer Date
  $('#coming_soon_home--date').html = new Date().getFullYear();
});
