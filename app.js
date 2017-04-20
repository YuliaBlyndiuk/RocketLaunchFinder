
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
	launchData: []
}

function getData1(){
	$.ajax({
		url: endPoint,
		type: 'GET',
		success: function(result){
			addDataToState(state, result);
			displayData17(state);
		},
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


function addDataToState(state, result){
	state.launchData.push(result);
	//console.log('state is ', state);
}


function displayData16(state){

	var header1 = '<h1 class="header">Schedule Of Rocket Launches at Kennedy Space Center</h1>';
	var returnButton = '<button class="returnB">Return To The Main Page</button>';
	var Schedule16 = "";

	for (var i = 0; i < state.launchData[0].launches.length; i++) {

		if (state.launchData[0].launches[i].location.id === 16) {

		var rocketImg = state.launchData[0].launches[i].rocket.imageURL;
		var rocketName = state.launchData[0].launches[i].rocket.name;
		var missionName = state.launchData[0].launches[i].missions[0].name;
		var missionDescription = state.launchData[0].launches[i].missions[0].description;
		var windowStart = state.launchData[0].launches[i].windowstart;
		var windowEnd = state.launchData[0].launches[i].windowend;

			state.launchData.forEach(function(item){
			Schedule16 += '<div class="scheduleBlock"><div id="resultImg" style="background-image: url(' + rocketImg + ')"></div><b>Rocket name:</b> ' + rocketName + '<br><br><b>Mission Name:</b> '+ missionName + '<br><br><b>Mission Description:</b> ' + missionDescription + '<br><br><b>Opening of Launch Window:</b> ' + windowStart + '<br><br><b>Closing of Launch Window:</b> ' + windowEnd + '</div>';

			$("#app").html([ header1, Schedule16, returnButton ]);
			})
		}	
	}
}

function displayData17(state){

	var header2 = '<h1 class="header">Schedule Of Rocket Launches at Cape Canaveral Air Force Station</h1>';
	var Schedule17 = "";
	var returnButton = '<button class="returnB">Return To The Main Page</button>';

	for (var i = 0; i < state.launchData[0].launches.length; i++) {

		if (state.launchData[0].launches[i].location.id === 17) {

		var rocketImg = state.launchData[0].launches[i].rocket.imageURL;
		var rocketName = state.launchData[0].launches[i].rocket.name;
		var missionName = state.launchData[0].launches[i].missions[0].name;
		var missionDescription = state.launchData[0].launches[i].missions[0].description;
		var windowStart = state.launchData[0].launches[i].windowstart;
		var windowEnd = state.launchData[0].launches[i].windowend;

			state.launchData.forEach(function(item){
			Schedule17 += '<div class="scheduleBlock"><div id="resultImg" style="background-image: url(' + rocketImg + ')"></div><b>Rocket name:</b> ' + rocketName + '<br><br><b>Mission Name:</b> '+ missionName + '<br><br><b>Mission Description:</b> ' + missionDescription + '<br><br><b>Opening of Launch Window:</b> ' + windowStart + '<br><br><b>Closing of Launch Window:</b> ' + windowEnd + '</div>';

			$("#app").html([ header2, Schedule17, returnButton ]);
			})
		}	
	}
}

function render(){
	$('#app').html('<h1 class="header">Schedule Of Rocket Launches In Florida</h1><div id="images"><div id="img1"><button id="kennedyButton">See Schedule For Kennedy Space Center</button></div><div id="img2"><button id="cocoaButton">See Schedule For Cape Canaveral Air Force Station</button></div>');
	state.launchData.length = 0;
}

function listenerWatcher(){

	$('#app').on('click', '#img1', function(event){
		getData1();

	})

	$('#app').on('click', '#img2',function(event){
		getData2();

	})

	// For elements that aren't present on page load.
	$('#app').on('click', '.returnB', function(event){
		//console.log('I have been clicked');
		render();
	})

}

$(function(){

	listenerWatcher();
});

