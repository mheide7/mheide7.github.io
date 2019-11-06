$(document).ready(function (){
    //ID or Class name of the button goes into the first section
    $('#reveal-button1').click(function() {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#energy-a").toggleClass("invisible");
        });
    $('#reveal-button2').click(function() {
        //ID or Class name of the modal you want to appear on click goes into this second area.
        $("#energy-b").toggleClass("invisible");
        });
});
