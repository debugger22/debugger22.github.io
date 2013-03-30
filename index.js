			
	$(document).ready(function(){
			$("#cover").hide();
	
			$("#cover").fadeIn(1000);
			$(document).keyup(function(e) {

				if (e.keyCode == 27) {
					$("#cover").fadeOut(500);
			
				}   
			});

	
	});
