
var character={background:"", face:"", hair:"", lips:"", coat:"", headset:"",};

//this function will set the background property
function setbackground(changling){
	character.background=changling;
	console.log(changling.background);	
	//run the body builder function
	bodyBuilder();
}
//this function will set the face property
function setFace(changling){
	character.face=changling;
	console.log(changling.face);	
	//run the body builder function
	bodyBuilder();
}
//this function will set the hair property
function sethair(changling){
	character.hair=changling;
	console.log(changling.hair);	
	//run the body builder function
	bodyBuilder();
}
//this function will set the lips property
function setlips(changling){
	character.lips=changling;
	console.log(changling.lips);	
	//run the body builder function
	bodyBuilder();
}
//this function will set the coat property
function setcoat(changling){
	character.coat=changling;
	console.log(changling.coat);	
	//run the body builder function
	bodyBuilder();
}
//this function will set the headset property
function setheadset(changling){
	character.headset=changling;
	console.log(changling.headset);	
	//run the body builder function
	bodyBuilder();
}


//function place the images on the page//
function bodyBuilder(){
	if (character.background!=""){
		document.getElementById('background').innerHTML="<img class='img-fluid' src='images/"+character.background+"' alt='background'>";
	}
	if (character.face!=""){
		document.getElementById('face').innerHTML="<img class='img-fluid' src='images/"+character.face+"' alt='face'>";
	}
	if (character.hair!=""){
		document.getElementById('hair').innerHTML="<img class='img-fluid' src='images/"+character.hair+"' alt='hair'>";
	}
	if (character.lips!=""){
		document.getElementById('lips').innerHTML="<img class='img-fluid' src='images/"+character.lips+"' alt='lips'>";
	}
	if (character.coat!=""){
		document.getElementById('coat').innerHTML="<img class='img-fluid' src='images/"+character.coat+"' alt='coat'>";
	}
	if (character.headset!=""){
		document.getElementById('headset').innerHTML="<img class='img-fluid' src='images/"+character.headset+"' alt='headset'>";
	}
	
}// JavaScript Document//

