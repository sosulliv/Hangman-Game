var states = ["alabama",
"alaska",
"arizona",
"arkansas",
"california",
"colorado",
"connecticut",
"delaware",
"florida",
"georgia",
"hawaii",
"idaho",
"illinois",
"indiana",
"iowa",
"kansas",
"kentucky",
"louisiana",
"maine",
"maryland",
"massachusetts",
"michigan",
"minnesota",
"mississippi",
"missouri",
"montana",
"nebraska",
"nevada",
"new hampshire",
"new jersey",
"new mexico",
"new york",
"north carolina",
"north dakota",
"ohio",
"oklahoma",
"oregon",
"pennsylvania",
"rhode island",
"south carolina",
"south dakota",
"tennessee",
"texas",
"utah",
"vermont",
"virginia",
"washington",
"west virginia",
"wisconsin",
"wyoming",];


/*var counter = 0; */
var states_div = document.getElementById("states");
var current_word;
var wrong_guess_counter = 0;
var blanks =[];
var loss_counter = 0;
var win_counter = 0;
var incorrect_guesses =10;







                                    
function next_word()
{  
    blanks =[];
	//reset_table();
	var random_index=Math.floor(Math.random() * states.length);
     
     wrong_guess_counter=0;
     current_word = states[random_index];
     //states_div.innerHTML=current_word;
     var current_word_length = current_word.length;
    // generate_table(current_word_length, current_word);

    //Populate blanks
	for(var i = 0; i< current_word_length; i++)
	{
		blanks.push('_');
		document.getElementById('wordguess').innerHTML = blanks;
		document.getElementById('wordguess').innerHTML = blanks.join(' ');

	}


}



function hangman_main(letter) {

if (current_word.indexOf(letter) > -1)
		{
			console.log("true");
			//correct_guess_style(letter);
			for(var i = 0; i < blanks.length; i++)
					{
						//Fills in right index with user key
						if(current_word[i] === letter)
						{
							blanks[i] = letter;
							document.getElementById('wordguess').innerHTML = blanks.join(' ');
                            
                            console.log(document.getElementById('wordguess').innerHTML.replace(/ /g,''));

                            console.log(current_word);
                            if (document.getElementById('wordguess').innerHTML.replace(/ /g,'') == current_word.replace(/ /g,''))
                            	{console.log("win")
                                win_counter=win_counter+1;
                                console.log(win_counter);
                                document.getElementById('wins').innerHTML = win_counter;
							    }
								}	
					}


		} else {
			console.log("false");
			wrong_guess_counter++;
			console.log(wrong_guess_counter);
		
			if  (wrong_guess_counter===incorrect_guesses ) {
                 loss_counter++;
                 document.getElementById('losses').innerHTML = loss_counter;

                console.log("GameOver");

			}
		}

}		

 document.onkeyup = function(event) {

        // Captures the key press, converts it to lowercase, and saves it to a variable.
        var letter = String.fromCharCode(event.keyCode).toLowerCase();


        hangman_main(letter);
         
       


	}



