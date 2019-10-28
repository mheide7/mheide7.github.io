$(document).ready(function() {
  //ID or Class name of the button goes into the first section
  $('.grfrog').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $(".nd-content").toggleClass("invisible");
    $(".nd-content h1").toggleClass("fighting-irish");
    $(".nd-content h1").toggleClass("shadow");
  });
     });