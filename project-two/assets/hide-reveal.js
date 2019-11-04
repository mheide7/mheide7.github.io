$(document).ready(function() {
  //ID or Class name of the button goes into the first section
  $('#reveal-button1').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $("#energy-a").removeClass("invisible");
    $("#energy-b").addClass("invisible");
  });

  $('#reveal-button2').click(function() {
    //ID or Class name of the modal you want to appear on click goes into this second area.
    $("#energy-a").addClass("invisible");
    $("#energy-b").removeClass("invisible");
  });


});