// 5) getting the the date of the request date:
var now = new Date();
var dateNow = now.getDate();
var monthNow = now.getMonth() + 1;
var yearNow = now.getFullYear();

// 6) ensure single digit dates have '0' added to them
function editDateFormat(time){
	if (time <10){
		time = '0' + time;
	}
	return time;
}

// 7) create a link that reflects the request's date
var endPoint = 'https://launchlibrary.net/1.2/launch/' + yearNow + '-' + editDateFormat(monthNow) + '-' + editDateFormat(dateNow);

//state to store data
var state = {
	display: true,
	launchData: []
}

// 3) make images disappear after being clicked on
function changeClass(){
	state.display = false;
}

// 8) getting data from the server and displaying it
function getData(){
	$.ajax({
		url: endPoint,
		type: 'GET',
		success: function(result){
			addDataToState(state, result);
			displayData(state);
		}
	})
}

// 9) adding received data to the state
function addDataToState(state, result){
	state.launchData.push(result);
}

//changing the state to get necessary information out of it
function displayData(state){
	var Schedule16 = "";
	

	//console.log('state is', state);
	for (var i = 0; i < state.launchData[0].launches.length; i++) {
		if (state.launchData[0].launches[i].location.id === 16) {

		var missionName = state.launchData[0].launches[i].missions[0].name;
		var missionDescription = state.launchData[0].launches[i].missions[0].description;
		var windowStart = state.launchData[0].launches[i].windowstart;
		var windowEnd = state.launchData[0].launches[i].windowend;

			state.launchData.forEach(function(item){
			Schedule16 += '<div>Mission Name: '+ missionName + '</div><div>Mission Description:' + missionDescription + '</div><div>Opening of Launch Window: ' + windowStart + '</div><div>Closing of Launch Window: ' + windowEnd + '</div>';
			$("#app").html(Schedule16);
			})
		}
		
	}
}

// 4) re-render
function render(){
	if (state.display === false) {
		$('#images, #buttons').css("display", "none");
	} 

}

// 2) it listens to a user action (click) and reacts to it
function listenerWatcher(){
	$('#images').on('click', 'div', function(event){
		changeClass();
		render();
		getData();
		
	});
}

// 1) once the page is loaded..
$(function(){
	listenerWatcher();
});

