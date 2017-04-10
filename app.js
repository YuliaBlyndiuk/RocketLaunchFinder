//getting the the date of the request date:
var now = new Date();
var dateNow = now.getDate();
var monthNow = now.getMonth() + 1;
var yearNow = now.getFullYear();

function editDateFormat(time){

	if (time <10){
		time = '0' + time;
	}
	return time;
}


var endPoint = 'https://launchlibrary.net/1.2/launch/' + yearNow + '-' + editDateFormat(monthNow) + '-' + editDateFormat(dateNow);

var state = {
	display: true,
	launchData: []
}

function changeClass(){
	state.display = false;
}

function render(){
	if (state.display === false) {
		$('#images, #buttons').css("display", "none");
	} 
}

function listenerWatcher(){
	$('#images').on('click', 'div', function(event){
		changeClass();
		render();
	});
}

$(function(){
	listenerWatcher();
});

