jQuery(function() {
  // Target
  var $target = $('body');

  // important code section

  //end of important code section for taking the user to a specific section horizontally on click

  $('#scroll').click(function() {
    $target.scrollTo($('#feeling'), 800);
  });

  $('#reveal-button1').click(function() {
    $target.scrollTo($('#energy'), 800);
  });

  $('#reveal-button2').click(function() {
    $target.scrollTo($('#energy'), 800);
  });


});