'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Hello World!");
		$("#testjs").text("Please wait...");
		$(".jumbotron p").toggleClass("active");

	});

	$("a.thumbnail").click(projectClick);
	
	$("#submitBtn").click(updateProject); 
}

function projectClick(e) {
  // Cancel the default action, which prevents the page from reloading
    e.preventDefault();

    // In an event listener, $(this) is the leement that fired the event
    var projectTitle = $(this).find("p").text();
    var jumbotronHeader = $(".jumbotron h1");
    jumbotronHeader.text(projectTitle);

    var containingProject = $(this).closest(".project");
 	var containingProject = $(this).closest(".project"); 
    var description = $(containingProject).find(".project-description");
    console.log(description);
    if (description.is(":visible")) { 
       $(description).hide();
    } else { 
		$(description).show();    
	}
}

function updateProject(e) {
   var projectID = $('#project').val();
   $(projectID).animate({
      width: $('#width').val()
   });

   var newText = $('#description').val();
   $(projectID + " .project-description").text(newText);
}




