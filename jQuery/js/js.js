$(function() {
	$('#sendButton').click(function(){
		sendForm();
	});
	
	
	function sendForm() {
	    var dataObj = {};
	    dataObj.firstName = $("#firstName").val();
	    dataObj.lastName  = $("#lastName").val();
	    
	    if($("#firstName").val() == "" || $("#lastName").val() == "") {
	    	alert("Please fill both fields");
	    	return false;
	    }
	
	    $.ajax({
	        url      : "process.php",
	        dataType : "json",
	        data     : dataObj,
	        type     : "POST"
	    })
	    .done(function(responseObj) {
	    	 $('.ajaxFormResult').html(responseObj.result);
    	} )
	    ;
	}
});
