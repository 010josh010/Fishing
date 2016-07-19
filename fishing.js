var printArray =function(collection){
	if(Array.isArray(collection)){
		for(var i = 0; i < collection.length; i++){
			console.log(collection); 
		}
	}
}

function fishing (print){
	var name = prompt("Please enter your name"); 
	var cast, casting, fish;
	cast = 0; 
	fish = 0;
	catches = []; 
	casting = true; 
	while(casting){
	var  catchFish = Math.floor(Math.random() * 10) + 1 ; 
	if(catchFish < 5){
		alert("You didn't catch anything! Click Ok to cast again!"); 
		cast++; 
	 
	}
	else if(catchFish > 5 && catchFish <= 8){
		alert("You caught a minnow!");
		cast++
		fish++
		catches.push("minnow"); 
		var castAgain = prompt("Cast again? y or n").toLowerCase(); 
			if(castAgain ==="n"){
				casting = false; 
				
			}
	}
	else if(catchFish > 8){
		alert("You caught the Big Bass !!! Good Job!");
		cast++
		fish++
		catches.push("Big Bass"); 
		var castAgain = prompt("Cast again? y or n").toLowerCase();
			if(castAgain ==="n"){
				casting = false;
				
			}
	}

	}
	
	print(catches); 
	return name + " caught " +fish +" fish! after casting " + cast +" times."; 
	
}

fishing(printArray);
