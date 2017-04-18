<b>RocketLaunchFinder</b> web app allows to quickly and easily access rocket launch schedule at any of Florida's two rocket launch sites.

<b>Target audience:</b><br>
People who live in Florida or visit this state and want to plan to watch a rocket launch. 

<b>Use case:</b><br>
A user opens the web app and selects one of two launch sites. Each of the sites is being represented by an image with a button. 

<img src="https://github.com/YuliaBlyndiuk/RocketLaunchFinder/blob/master/desktop%20view.png">

Once an image has been clicked, an AJAX request is being sent out to a Rocket Launch Library and a JSON file is being added to the state.
The correct schedule is being displayed based on which button has been clicked:

<img src="https://github.com/YuliaBlyndiuk/RocketLaunchFinder/blob/master/result%20page.jpg">

<b>Technologies used:</b><br>
- HTML
- CSS
- JavaScript
- jQuery

The web app has been built according to the 'mobile first' principle. 
Mobile view initial page:

<img src="https://github.com/YuliaBlyndiuk/RocketLaunchFinder/blob/master/mobile%20view.jpg">

All the database information is being stored in the app state (JS), so that the DOM is not overloaded and thea pp works faster.

