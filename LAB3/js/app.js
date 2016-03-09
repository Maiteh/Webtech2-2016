/* ---------------------------------------------------- APP ---------------------------------- */
$("#todo-item1").click(function(){ 								// make sure we can click on an element
    $(this).toggleClass("done"); 						// when we click on any list item, add the class done if it doesn't exist yet on the element or remove it when it exists
});

/*$("#add-item-text").keyup(function(e){ 					// make sure we can detect a keyup event
	if(e.which === 13)
	{
		// this is the ENTER key with code 13
		var todoText = $(this).val();
		var li = document.createElement("li");			// create a new list item in memory
		li.innerHTML = todoText;						// put some text inside of the <li> tags
		li.className = "prior-high";					// give it the class prior-high by default

		$(this).val(""); 								// clear the input field by setting the value to ""

		$("#todo-list").prepend(li); 					// add the newly created list item to the ul#todo-list
		$(li).click(function(){							// make sure that we can click on the newly created list item
			$(this).toggleClass("done"); 				// toggle the class done when clicking on the element
		});
	}
});*/