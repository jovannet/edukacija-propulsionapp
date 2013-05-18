/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function(){
var timeout = null;
//filter
    $('li').filter(function(index) {
		return index % 3 == 2;
	}).css('background-color', 'red');
//prevAll
    $('li.preDjomle').prevAll().css('background-color', 'blue');
//Time out 
    $("#start").on("click",function() {
      timeout = setTimeout(function() { alert('Alert');}, 2000); 
	});
	
	$("#stop").on("click",function() {
		clearTimeout(timeout);
	});
});

