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
var previous_word;
var reset_flag;








                                    
function next_word()
{  
    blanks =[];
    reset_hangman();
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
                            if (document.getElementById('wordguess').innerHTML.replace(/ /g,'') == current_word.replace(/ /g,'') && previous_word != current_word)
                            	{console.log("win")
                                win_counter=win_counter+1;
                                console.log(win_counter);
                                document.getElementById('wins').innerHTML = win_counter;
                                previous_word=current_word


							    }
								}	
					}


		} else {
			console.log("false");
			wrong_guess_counter++;
			console.log(wrong_guess_counter);
		    document.getElementById('wrong_guess_count').innerHTML = wrong_guess_counter;
            document.getElementById('guess_remaining').innerHTML = (incorrect_guesses-wrong_guess_counter);
            draw_hangman();
			if  (wrong_guess_counter===incorrect_guesses ) {
                 loss_counter++;
                 document.getElementById('losses').innerHTML = loss_counter;
                  draw_hangman();
                  wrong_guess_counter=0;
                 
                console.log("GameOver");

			}
		}

}		



 document.onkeyup = function(event) {

        // Captures the key press, converts it to lowercase, and saves it to a variable.
        var letter = String.fromCharCode(event.keyCode).toLowerCase();


        hangman_main(letter);
         
       


	}




    	    
function draw_hangman () {
				var canvas, context, canvaso, contexto;
				canvaso = document.getElementById('hangman_canvas');
				context = canvaso.getContext('2d');
				
				if (wrong_guess_counter<11  && wrong_guess_counter >0) {
				context.strokeStyle = '#000000';
				context.beginPath();
				context.moveTo(5, 361);
				context.lineTo(189, 360);
				context.stroke();
				context.closePath();
				}

				if (wrong_guess_counter<11  && wrong_guess_counter >1) {
				context.strokeStyle = '#000000';
				context.beginPath();
				context.moveTo(92, 75);
				context.lineTo(90, 355);
				context.stroke();
				context.closePath();

				}



				if (wrong_guess_counter<11  && wrong_guess_counter >2) {
				context.strokeStyle = '#000000';
				context.beginPath();
				context.moveTo(93, 73);
				context.lineTo(268, 71);
				context.stroke();
				context.closePath();
				}

				if (wrong_guess_counter<11  && wrong_guess_counter >3) {

				context.strokeStyle = '#000000';
				context.beginPath();
				context.moveTo(267, 71);
				context.lineTo(266, 105);
				context.stroke();
				context.closePath();

				}

				if (wrong_guess_counter<11  && wrong_guess_counter >4) {
				context.strokeStyle = '#000000';
				context.save();
				context.translate(260, 119);
				context.scale(1, 0.6470588235294118);
				context.beginPath();
				context.arc(0, 0, 40, 0, 6.283185307179586, false);
				context.stroke();
				context.closePath();
				context.restore();

				}

				if (wrong_guess_counter<11  && wrong_guess_counter >5) {

				context.strokeStyle = '#000000';
				context.beginPath();
				context.moveTo(264, 144);
				context.lineTo(265, 266);
				context.stroke();
				context.closePath();

				}

				if (wrong_guess_counter<11  && wrong_guess_counter >6) {

				context.strokeStyle = '#000000';
				context.beginPath();
				context.moveTo(209, 317);
				context.lineTo(265, 264);
				context.stroke();
				context.closePath();

				}

				if (wrong_guess_counter<11  && wrong_guess_counter >7) {

				context.strokeStyle = '#000000';
				context.beginPath();
				context.moveTo(267, 265);
				context.lineTo(307, 325);
				context.stroke();
				context.closePath();
				}

				if (wrong_guess_counter<11  && wrong_guess_counter >8) {

				context.strokeStyle = '#000000';
				context.beginPath();
				context.moveTo(267, 198);
				context.lineTo(325, 162);
				context.stroke();
				context.closePath();

				}

				if (wrong_guess_counter<11   && wrong_guess_counter >9 ) {
				context.strokeStyle = '#000000';
				context.beginPath();
				context.moveTo(208, 168);
				context.lineTo(266, 200);
				context.stroke();
				context.closePath();
				}

				
				
           }


function reset_hangman()



{
var c = document.getElementById("hangman_canvas");
var ctx = c.getContext("2d");

ctx.clearRect(0, 0, 600, 500);


}