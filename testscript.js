// 
// 
//  Assignment 6
// 

// 
// Assignment 6: Part 1--
// 
myitem = document.getElementById("firsttest");
// This statement initializes the object identifier "myitem" with a
// value that is the object associated with the id "firsttest".

myitem.addEventListener("click", onClick);
// This statement associates an event listener to the object, so
// that when the user clicks on the element, the function "onClick"
// will execute.

// Additional, optional content I added for fun.
foundMe = document.getElementById("foundMeOuter");

// Declares a function with identifier "onClick".
function onClick(){

	// Using the dot operator to access properties of the object.
	myitem.style.color = "lime";
	// Assigns the "color" attribute of the element object to
	// green. In other words, any text that is held by this
	// element object will turn green.

	myitem.style.backgroundColor = "maroon";
	myitem.style.fontSize = "25px";
	myitem.style.border = "solid";
	myitem.style.borderWidth = "5px";

	// Adding additional (optional) content.
	// Not specified in assignment instructions. Just doing for fun!
	foundMe.style.display = "block";

}

// Adding another event listener to myitem, that listens when user
// moves cursor moves off the element.
myitem.addEventListener("mouseout", onMouseOut);

// Declares a function with identifier "onMouseOut".
function onMouseOut(){

	// Setting properties altered by "onClick()" to their previous
	// values.
	myitem.style.color = "";
	myitem.style.backgroundColor = "";
	myitem.style.fontSize = "";
	myitem.style.border = "";
	myitem.style.borderWidth = "";

	foundMe.style.display = "none";

}
// 
// 

// 
// Assignment 6: Part 2--
// 
thebutton = document.getElementById("thebutton");
otheritem = document.getElementById("buttontest");

thebutton.addEventListener("click", onButtonClick);

// Additional functionality
buttonContainer = document.getElementById("buttonContainer");

function onButtonClick(){

	if (otheritem.style.color == "red") {

		otheritem.style.color = "";

		thebutton.style.width = "";
		thebutton.style.boxShadow = "";
		thebutton.style.color = "";

		buttonContainer.style.boxShadow = "";

		return;

	}

	otheritem.style.color = "red";

	thebutton.style.width = "500px";
	thebutton.style.boxShadow = "0px 5px 5px red, 0px -5px 5px red";
	thebutton.style.color = "red";

	buttonContainer.style.boxShadow = "0px 0px 40px red";

}

// Bringing in the second button and container object
theSecondButton = document.getElementById("theSecondButton");
secondOtherItem = document.getElementById("secondButtonTest");

theSecondButton.addEventListener("click", onSecondButtonClick);

// 
// Additional Content Added For Assignment 6
// 
secondButtonTestSpan = document.getElementById("secondButtonTestSpan");
secondButtonTestContent0 = document.getElementById("secondButtonTestContent0");
secondButtonTestContent1 = document.getElementById("secondButtonTestContent1");
containerStyles = document.getElementsByClassName("bottomContainerStyle");

// Bring in the 3 containers that hold the second button
secondButtonOuterContainer = document.getElementById("secondButtonOuterContainer");
secondButtonMiddleContainer = document.getElementById("secondButtonMiddleContainer");
secondButtonInnerContainer = document.getElementById("secondButtonInnerContainer");
secondButtonContainer = document.getElementsByClassName("secondButtonContainer");

function onSecondButtonClick(){

	if(theSecondButton.style.backgroundColor == "darkgreen"){

		// Reverting all the modified elements back to their default forms
		secondOtherItem.style.color = "";
		secondOtherItem.style.backgroundColor = "";
		secondOtherItem.wordSpacing = "";
		secondOtherItem.content = "";
		secondButtonTestSpan.style.backgroundColor = "";
		secondButtonTestContent0.style.fontSize = "";
		secondButtonTestContent0.style.fontFamily = "";
		secondButtonTestContent0.style.backgroundColor = "";
		secondButtonTestContent0.style.border = "";
		secondButtonTestContent0.style.borderWidth = "";
		secondButtonTestContent0.style.position = "";
		secondButtonTestContent0.bottom = "";
		secondButtonTestContent0.style.paddingRight = "";
		secondButtonTestContent0.style.paddingLeft = "";
		secondButtonTestContent0.style.margin = "";

		secondButtonTestContent1.style.backgroundColor = "";
		secondButtonTestContent1.style.border = "";
		secondButtonTestContent1.style.borderWidth = "";
		secondButtonTestContent1.style.paddingRight = "";
		secondButtonTestContent1.style.paddingLeft = "";

		theSecondButton.style.color = "";
		theSecondButton.style.backgroundColor = "";
		theSecondButton.style.borderColor = "";
		theSecondButton.style.boxShadow = "";

		var j;
		for(j = 0; j < containerStyles.length; j++){

			containerStyles[j].style.color = "";
			containerStyles[j].style.textShadow = "";
			containerStyles[j].style.fontWeight = "";

		}

		var b;
		for(b = 0; b < secondButtonContainer.length; b++){

			secondButtonContainer[b].style.borderColor = "";
			secondButtonContainer[b].style.borderWidth = "";
			secondButtonContainer[b].style.boxShadow = "";

		}

		// Leave the function so that none of the code below the conditional block executes
		return;
	}

	// Defining what happens when the user clicks the button
	secondOtherItem.style.color = "lime";
	secondOtherItem.style.backgroundColor = "green";
	secondOtherItem.style.wordSpacing = "10px";
	secondOtherItem.style.content = "green";

	// Functionality for the additional optional content
	secondButtonTestSpan.style.backgroundColor = "darkolivegreen";

	secondButtonTestContent0.style.fontSize = "36px";
	secondButtonTestContent0.style.fontFamily = "Times New Roman";

	secondButtonTestContent0.style.backgroundColor = "green";
	// Set border settings
	secondButtonTestContent0.style.border = "solid";
	secondButtonTestContent0.style.borderWidth = "1px";
	// Set position to relative so I can move it around
	secondButtonTestContent0.style.position = "relative";
	// Bring bottom up so the border effects can be seen
	secondButtonTestContent0.style.bottom = "5px";
	// Add space between the text and border
	secondButtonTestContent0.style.paddingRight = "4px";
	secondButtonTestContent0.style.paddingLeft = "4px";
	// Add space between the border and outside content
	secondButtonTestContent0.style.margin = "2px";

	// Add similar effects to the other optional content
	secondButtonTestContent1.style.backgroundColor = "green";
	secondButtonTestContent1.style.border = "solid";
	secondButtonTestContent1.style.borderWidth = "1px";
	secondButtonTestContent1.style.paddingRight = "4px";
	secondButtonTestContent1.style.paddingLeft = "4px";

	// Change the box shadow color of the second button
	theSecondButton.style.boxShadow = "4px 3px 8px lime";
	theSecondButton.style.border = "solid";
	theSecondButton.style.borderColor = "lime";
	theSecondButton.style.borderWidth = "3px";
	theSecondButton.style.color = "green";
	theSecondButton.style.backgroundColor = "darkgreen";
	// Change the color of the visual effects
	var i;
	for(i = 0; i < containerStyles.length; i++){

		// containerStyles[i].style.color = "red";
		// containerStyles[i].style.textShadow = "4px 4px 4px red";
		// containerStyles[i].style.fontWeight = "bold";
		containerStyles[i].style.display = "none";

	}

	// Change the styling of the 3 containers
	var a;
	for(a = 0; a < secondButtonContainer.length; a++){

		secondButtonContainer[a].style.borderColor = "seagreen";
		secondButtonContainer[a].style.borderWidth = "2px";
		secondButtonContainer[a].style.boxShadow = "5px 4px 6px green";

	}

	// Change the styling of the 3 containers

	// secondButtonInnerContainer.style.background = "rgba(0, 0, 0, 8.0)";
	// secondButtonInnerContainer.style.backgroundColor = "green";
	// secondButtonInnerContainer.style.boxShadow = "2px 2px 6px black";
	// secondButtonMiddleContainer.style.background = "rgba(0, 128, 0, 5.0)";
	// secondButtonOuterContainer.style.backgroundColor = "darkgreen";

}

// Create event handler for when user hovers cursor over second button
theSecondButton.addEventListener("mouseover", onMouseOver);

function onMouseOver() {

	theSecondButton.style.textShadow = "3px 3px 4px #FF0000, 4px 4px 5px #0000FF";
	theSecondButton.style.color = "gold";
}

// Listener for when the cursor leaves the button
theSecondButton.addEventListener("mouseout", onMouseOut);

function onMouseOut() {

	if(theSecondButton.style.borderColor == "lime") {

		theSecondButton.style.color = "lime";
		return;

	} else {

		theSecondButton.style.textShadow = "";
		theSecondButton.style.color = "";
	}
}

// Create another event handler that listens for when the user clicks and holds the mouse button
theSecondButton.addEventListener("", onSecondButtonHold);

function onSecondButtonHold() {

	theSecondButton.style.color = "yellow";

}

// 
// Assignment 6: Part 3
// 

// Bring in the required objects
textentry = document.getElementById("myinput");
textOutput = document.getElementById("textOutput");

// Add an event listener to the text input object 
textentry.addEventListener("change", onChange);

function onChange() {

	textOutput.innerHTML = "";

	newtext = textentry.value;
	textOutput.innerHTML = "The parrot responds: \"" + newtext + "\"";

}

// 
// Assignment 6: Part 4
// 

// Bring in the objects
headerBox = document.getElementById("headerBox");
introBox = document.getElementById("introBox");
middleBox = document.getElementById("middleBox");
endingBox = document.getElementById("endingBox");
footerBox = document.getElementById("footerBox");
// Bring in all the elements of the fieldset object
headerSection = document.getElementById("headerSection");
introSection = document.getElementById("introSection");
middleSection = document.getElementById("middleSection");
endingSection = document.getElementById("endingSection");
footerSection = document.getElementById("footerSection");

// Add event listeners to the objects
headerBox.addEventListener("click", onCheckboxClick);
introBox.addEventListener("click", onCheckboxClick);
middleBox.addEventListener("click", onCheckboxClick);
endingBox.addEventListener("click", onCheckboxClick);
footerBox.addEventListener("click", onCheckboxClick);

function onCheckboxClick() {
	header = headerBox.checked;
	intro = introBox.checked;
	middle = middleBox.checked;
	ending = endingBox.checked;
	footer = footerBox.checked;

	if(header == true) {
		headerSection.style.display = "flex";
	} else {
		headerSection.style.display = "none";
	}
	if(intro == true) {
		introSection.style.display = "flex";
	} else {
		introSection.style.display = "none";
	}
	if(middle == true) {
		middleSection.style.display = "flex";
	} else {
		middleSection.style.display = "none";
	}
	if(ending == true) {
		endingSection.style.display = "flex";
	} else {
		endingSection.style.display = "none";
	}
	if(footer == true) {
		footerSection.style.display = "flex";
	} else {
		footerSection.style.display = "none";
	}
}