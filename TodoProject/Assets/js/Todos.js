// Check Off Specific To-Dos By Clicking (without jQuery toggleClass method)
/*$('li').click(function(){
	//If li is gray
	if($(this).css('color') === 'rgb(128, 128, 128)'){
		//Turn li black
  $(this).css({
			color: "black",
			textDecoration: 'none'
		});
	}
	else {
		//Turn it gray
			$(this).css({
			color: "gray",
			textDecoration: 'line-through'
		});
	}
});
*/

// Check Off Specific To-Dos By Clicking
$('ul').on('click', 'li', function(){
	$(this).toggleClass('completed');
});


// Click on X to delete To-Do
$('ul').on('click', 'span', function(event){
	$(this).parent().fadeOut(250, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

// When hitting enter text placed in input is created into a new li
$('input[type=text]').keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		//clear input
		$(this).val('');
		//create a new li and add to ul
		$('ul').append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
	}
});

// Input toggle on pencil icon
$('.fa-pencil-alt').click(function(){
	$('input[type=text]').fadeToggle();
});
