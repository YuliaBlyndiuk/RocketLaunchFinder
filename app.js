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
function getData1(){
	$.ajax({
		url: endPoint,
		type: 'GET',
		success: function(result){
			addDataToState(state, result);
			displayData17(state);
		}
	})
}

function getData2(){
	$.ajax({
		url: endPoint,
		type: 'GET',
		success: function(result){
			addDataToState(state, result);
			displayData16(state);
		}
	})
}

// 9) adding received data to the state
function addDataToState(state, result){
	state.launchData.push(result);
	console.log('state is', state);
}

//changing the state to get necessary information out of it
function displayData16(state){
	var Schedule16 = "";

	// var header1 = '<h1 class='header1'>Schedule Of Rocket Launches at Kennedy Space Center</h1>';

	for (var i = 0; i < state.launchData[0].launches.length; i++) {
		if (state.launchData[0].launches[i].location.id === 16) {

		var rocketImg = state.launchData[0].launches[i].rocket.imageURL;
		var rocketName = state.launchData[0].launches[i].rocket.name;
		var missionName = state.launchData[0].launches[i].missions[0].name;
		var missionDescription = state.launchData[0].launches[i].missions[0].description;
		var windowStart = state.launchData[0].launches[i].windowstart;
		var windowEnd = state.launchData[0].launches[i].windowend;

			state.launchData.forEach(function(item){
			Schedule16 += '<div class="scheduleBlock"><div class="rocketImageBox"><img class="rocketImage" src="' + rocketImg + '"></div><b>Rocket name:</b> ' + rocketName + '<br><b>Mission Name:</b> '+ missionName + '<br><b>Mission Description:</b> ' + missionDescription + '<br><b>Opening of Launch Window:</b> ' + windowStart + '<br><b>Closing of Launch Window:</b> ' + windowEnd + '</div>';

			$("#app").append(Schedule16);
			})
		}	
	}
}

function displayData17(state){
	var Schedule17 = "";

	// var header2 = '<h1 class='header1'>Schedule Of Rocket Launches at Cape Canaveral Air Force Station</h1>';

	for (var i = 0; i < state.launchData[0].launches.length; i++) {
		if (state.launchData[0].launches[i].location.id === 17) {

		var rocketImg = state.launchData[0].launches[i].rocket.imageURL;
		var rocketName = state.launchData[0].launches[i].rocket.name;
		var missionName = state.launchData[0].launches[i].missions[0].name;
		var missionDescription = state.launchData[0].launches[i].missions[0].description;
		var windowStart = state.launchData[0].launches[i].windowstart;
		var windowEnd = state.launchData[0].launches[i].windowend;

			state.launchData.forEach(function(item){
			Schedule17 += '<div class="scheduleBlock"><div class="rocketImageBox"><img class="rocketImage" src="' + rocketImg + '"></div><b>Rocket name:</b> ' + rocketName + '<br><b>Mission Name:</b> '+ missionName + '<br><b>Mission Description:</b> ' + missionDescription + '<br><b>Opening of Launch Window:</b> ' + windowStart + '<br><b>Closing of Launch Window:</b> ' + windowEnd + '</div>';

			$("#app").append(Schedule17);
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

function listenerWatcher(){
	$('#img1').on('click', function(event){
		changeClass();
		render();
		getData1();

	})

	$('#img2').on('click', function(event){
		changeClass();
		render();
		getData2();

	})

}

// 1) once the page is loaded..
$(function(){
	listenerWatcher();
});

