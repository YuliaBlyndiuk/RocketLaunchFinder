var endPoint = 'https://launchlibrary.net/1.2/launch/2015-08-20';

var state = {
	display: true
}

function changeClass(){
	state.display = false;
}

function render(){
	if (state.display === false) {
		$('#images, #buttons').css("display", "none");
	} 
}

//listener: when img is clicked...
function listenerWatcher(){
	$('#images').on('click', 'div', function(event){
		console.log(event.target, event.currentTarget);
		changeClass();
		render();
	});
}

//when the page loads...
$(function(){
	listenerWatcher();
});

