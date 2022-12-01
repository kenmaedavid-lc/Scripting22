// JavaScript Document

function write(){
//	console.log("HOLY! IT's working!");
	
	
	var groupOfPeopleorPerson = document.querySelector('input[name="groupOfPeopleorPerson"]:checked').value;
	
	var dayOfTheWeek =  document.querySelector('input[name="dayOfTheWeek"]:checked').value;
	
	var timeOfTheDay = document.querySelector('input[name="timeOfTheDay"]:checked').value;
	
	var islandName = document.getElementById('islandName').value;
	
	var country = document.getElementById('country').value;
	
	var numberOfDays = document.getElementById('numberOfDays').value;
	
	var describingTheSeaviews = document.getElementById('describingTheSeaviews').value;
	
	var timeOfTheDay2 = document.querySelector('input[name=timeOfTheDay2]').value;
	
	var personsName = document.getElementById('personsName').value;
	
	var bearsName = document.getElementById('bearsName').value;
	
	var foodPlural1 = document.getElementById('foodPlural1').value;
	
	var foodPlural2 = document.getElementById('foodPlural2').value;
	
	var foodPlural3 = document.getElementById('foodPlural3').value;
	
	var musicalInstrument = document.getElementById('musicalInstrument').value;
	
	var sibling = document.querySelector('input[name="sibling"]:checked').value;
	
	var petsName = document.getElementById('petsName').value;
	
	var meal = document.querySelector('input[name="meal"]:checked').value;
	
	var food = "";
	
	var placeIntheHouse = document.getElementById('placeIntheHouse').value;
	
	var animal = document.getElementById('animal').value;
	
	var favouriteColor = document.getElementById('favouriteColor').value;
	
	var img = "<iframe src='https://giphy.com/embed/1EnVAKJGFjoM8' width='480' height='392' frameBorder='0' class='giphy-embed' allowFullScreen></iframe>";
	
	if (meal=="breakfast"){
		food="sausages, french toast and bacon"; 
	}
	else if (meal=="lunch"){
		food="chicken fried steak, buffalo wings and mushroom soup";
	} 
	else if (meal=="dinner"){
		food="hungarian chicken, grilled turkey, and swedish meatballs";
	}
	console.log(animal);
	
	if (islandName=="" ||country=="" ||numberOfDays=="" ||describingTheSeaviews=="" ||personsName=="" ||bearsName=="" ||foodPlural1=="" ||foodPlural2=="" ||foodPlural3=="" ||musicalInstrument=="" ||petsName=="" ||placeIntheHouse=="" ||animal=="" ||favouriteColor=="" ){
		document.getElementById('output').innerHTML="<p>Oooopps! Some values are missing please check your entries</p>";
	}
	else {	
		document.getElementById('output').innerHTML = "";
		document.getElementById('output').innerHTML += "<p>";
	
	
		document.getElementById('output').innerHTML="<p>My "+groupOfPeopleorPerson+" took me to one of our hometown's beautiful sand beaches on one "+dayOfTheWeek+" "+timeOfTheDay+". It is located on "+islandName+" Island, in "+country+". We go there every year to unwind, refresh, and relax. The seaside has crystal-clear water, allowing you to see the corals and fish swimming beneath the waves. The location provides a variety of exciting, fun, and adventurous activities that our family has enjoyed during our "+numberOfDays+" days stay. From the top view, you will see a picturesque nature, "+describingTheSeaviews+" the seaview site down the place and a beautiful sky reflecting the ocean that makes it awesomely captivating in sight.  We went to one of the cool places on the site at "+timeOfTheDay2+". "+personsName+" set up a campfire to keep us warm, where you can smell the burning wood. A "+bearsName+" make "+foodPlural1+", "+foodPlural2+", and "+foodPlural3+" to grill and toast over an open fire. We ate, my sister played "+musicalInstrument+", we sang and laughed, and then my lazy "+sibling+" "+petsName+" arrived late, and all the food was gone. Everyone was so shocked that we forgot he was with us. It's time for "+meal+" and we are having "+food+", my mother called from the "+placeIntheHouse+" with a view of the ocean. We ate our food on the terrace, which faces the sun's soothing golden rays. You'll hear "+animal+" singing and dancing happily above the trees, and you'll smell the fresh green moist grass and the salty sea breeze calling you to swim. We took pictures of every corner of the place on our last day, and I wore my favourite "+favouriteColor+" outfit. We had a wonderful time and will never forget our short vacation getaway, which turned out to be a memorable and wondeful experience.  </p>"+img;
	}
}




















































