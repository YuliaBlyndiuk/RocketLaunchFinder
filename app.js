//getting the the date of the request date:
var now = new Date();
var dateNow = now.getDate();
var monthNow = now.getMonth() + 1;
var yearNow = now.getFullYear();

var endPoint = 'https://launchlibrary.net/1.2/launch/' + yearNow + '-0' + monthNow + '-' + dateNow;

var state = {
	display: true
}

function changeClass(){
	state.display = false;
}

function getLaunchData(searchTerm, callback){
	$.ajax({
		url: endPoint,
		type: 'GET',
		// data: {
		// 	"name": "",
		// 	"windowstart": "",
		// 	"windowend": "",
		// 	"vidURLs": [],
		// 	"location": "",
		// 	"missions": [{
		// 		"description": ""
		// 	}]
		// },
		dataType: 'json',
		success: function(data){
			console.log('data' + data);
		}
	});
}

function render(){
	if (state.display === false) {
		$('#images, #buttons').css("display", "none");
	} 
}

function listenerWatcher(){
	$('#images').on('click', 'div', function(event){
		console.log(event.target, event.currentTarget);
		changeClass();
		render();
		getLaunchData();

		// getLaunchData will need to be async
		// and take a callback. (You will use
		// jQuery $.get or $.ajax methods).
		//
		// It will put data into the state.
		// Then render.
		//
	});
}

$(function(){
	listenerWatcher();
});

