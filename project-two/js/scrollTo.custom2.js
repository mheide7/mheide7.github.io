		jQuery(function(){
			// Target
			var $target = $('body');
            
// important code section
            
            //end of important code section for taking the user to a specific section horizontally on click
            
            $('#button_normal').click(function() {
            $target.scrollTo($('#page2') , 800);
			});
            
            $('#button_dry').click(function() {
            $target.scrollTo($('#page3') , 800);
			});
            
            $('#button_oily').click(function() {
            $target.scrollTo($('#page4') , 800);
			});
            
             $('#button_combo').click(function() {
            $target.scrollTo($('#page5') , 800);
			});
            
            $('#button2_new').click(function() {
            $target.scrollTo($('#page1') , 800);
			});
            $('#normal_done').click(function() {
            $target.scrollTo($('#page6') , 800);
			});
            $('#dry_done').click(function() {
            $target.scrollTo($('#page6') , 800);
			});
            $('#oily_done').click(function() {
            $target.scrollTo($('#page6') , 800);
			});
            $('#combo_done').click(function() {
            $target.scrollTo($('#page6') , 800);
			});
           
            
		});