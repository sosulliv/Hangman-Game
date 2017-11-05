var countries = ["Afghanistan",
"Albania",
"Algeria",
"American Samoa",
"Andorra",
"Angola",
"Anguilla",
"Antarctica",
"Antigua and Barbuda",
"Argentina",
"Armenia",
"Aruba",
"Australia",
"Austria",
"Azerbaijan",
"Bahamas",
"Bahrain",
"Bangladesh",
"Barbados",
"Belarus",
"Belgium",
"Belize",
"Benin",
"Bermuda",
"Bhutan",
"Bolivia",
"Bosnia and Herzegovina",
"Botswana",
"Bouvet Island",
"Brazil",
"British Antarctic Territory",
"British Indian Ocean Territory",
"British Virgin Islands",
"Brunei",
"Bulgaria",
"Burkina Faso",
"Burundi",
"Cambodia",
"Cameroon",
"Canada",
"Canton and Enderbury Islands",
"Cape Verde",
"Cayman Islands",
"Central African Republic",
"Chad",
"Chile",
"China",
"Christmas Island",
"Cocos [Keeling] Islands",
"Colombia",
"Comoros",
"Cook Islands",
"Costa Rica",
"Croatia",
"Cuba",
"Cyprus",
"Czech Republic",
"Côte d’Ivoire",
"Denmark",
"Djibouti",
"Dominica",
"Dominican Republic",
"Dronning Maud Land",
"East Germany",
"Ecuador",
"Egypt",
"El Salvador",
"Equatorial Guinea",
"Eritrea",
"Estonia",
"Ethiopia",
"Falkland Islands",
"Faroe Islands",
"Fiji",
"Finland",
"France",
"French Guiana",
"French Polynesia",
"French Southern Territories",
"French Southern and Antarctic Territories",
"Gabon",
"Gambia",
"Georgia",
"Germany",
"Ghana",
"Gibraltar",
"Greece",
"Greenland",
"Grenada",
"Guadeloupe",
"Guam",
"Guatemala",
"Guernsey",
"Guinea",
"Guinea-Bissau",
"Guyana",
"Haiti",
"Heard Island and McDonald Islands",
"Honduras",
"Hungary",
"Iceland",
"India",
"Indonesia",
"Iran",
"Iraq",
"Ireland",
"Isle of Man",
"Israel",
"Italy",
"Jamaica",
"Japan",
"Jersey",
"Johnston Island",
"Jordan",
"Kazakhstan",
"Kenya",
"Kiribati",
"Kuwait",
"Kyrgyzstan",
"Laos",
"Latvia",
"Lebanon",
"Lesotho",
"Liberia",
"Libya",
"Liechtenstein",
"Lithuania",
"Luxembourg",
"Macedonia",
"Madagascar",
"Malawi",
"Malaysia",
"Maldives",
"Mali",
"Malta",
"Marshall Islands",
"Martinique",
"Mauritania",
"Mauritius",
"Mayotte",
"Metropolitan France",
"Mexico",
"Micronesia",
"Midway Islands",
"Moldova",
"Monaco",
"Mongolia",
"Montenegro",
"Montserrat",
"Morocco",
"Mozambique",
"Myanmar",
"Namibia",
"Nauru",
"Nepal",
"Netherlands",
"Netherlands Antilles",
"Neutral Zone",
"New Caledonia",
"New Zealand",
"Nicaragua",
"Niger",
"Nigeria",
"Niue",
"Norfolk Island",
"North Korea",
"North Vietnam",
"Northern Mariana Islands",
"Norway",
"Oman",
"Pacific Islands Trust Territory",
"Pakistan",
"Palau",
"Palestinian Territories",
"Panama",
"Panama Canal Zone",
"Papua New Guinea",
"Paraguay",
"People's Democratic Republic of Yemen",
"Peru",
"Philippines",
"Pitcairn Islands",
"Poland",
"Portugal",
"Puerto Rico",
"Qatar",
"Romania",
"Russia",
"Rwanda",
"Reunion",
"Saint Barthelemy",
"Saint Helena",
"Saint Kitts and Nevis",
"Saint Lucia",
"Saint Martin",
"Saint Pierre and Miquelon",
"Saint Vincent and the Grenadines",
"Samoa",
"San Marino",
"Saudi Arabia",
"Senegal",
"Serbia",
"Serbia and Montenegro",
"Seychelles",
"Sierra Leone",
"Singapore",
"Slovakia",
"Slovenia",
"Solomon Islands",
"Somalia",
"South Africa",
"South Georgia and the South Sandwich Islands",
"South Korea",
"Spain",
"Sri Lanka",
"Sudan",
"Suriname",
"Svalbard and Jan Mayen",
"Swaziland",
"Sweden",
"Switzerland",
"Syria",
"Sao Toma and Príncipe",
"Taiwan",
"Tajikistan",
"Tanzania",
"Thailand",
"Timor-Leste",
"Togo",
"Tokelau",
"Tonga",
"Trinidad and Tobago",
"Tunisia",
"Turkey",
"Turkmenistan",
"Turks and Caicos Islands",
"Tuvalu",
"Uganda",
"Ukraine",
"United Arab Emirates",
"United Kingdom",
"United States",
"Unknown or Invalid Region",
"Uruguay",
"Uzbekistan",
"Vanuatu",
"Vatican City",
"Venezuela",
"Vietnam",
"Wake Island",
"Wallis and Futuna",
"Western Sahara",
"Yemen",
"Zambia",
"Zimbabwe",
"Aland Islands"];


/*var counter = 0; */
var country_div = document.getElementById("country");
var random_div = document.getElementById("random");
var array_count_div = document.getElementById("array_count");
var current_word;
var wrong_guess_counter;

                                    
function next_word()
{  
     

	var random_index=Math.floor(Math.random() * countries.length);
    
     wrong_guess_counter=0;
     current_word = countries[random_index];
    country_div.innerHTML=current_word;

 
}



/*var current_word= next_word();*/
/*console.log(current_word);*/




function letter_guess(guessed_letter) {

if (current_word.indexOf(guessed_letter) > -1)
		{
			console.log("true");
		} else {
			console.log("false");
			
		}

}



/*letter_guess("a");*/



 document.onkeyup = function(event) {

        // Captures the key press, converts it to lowercase, and saves it to a variable.
        var letter = String.fromCharCode(event.keyCode).toLowerCase();


        if (current_word.indexOf(letter) > -1)
		{
			console.log("true");
		} else {
			console.log("false");
			wrong_guess_counter++;
			console.log(wrong_guess_counter);
			if  (wrong_guess_counter===10) {
                console.log("GameOver");

			}
		}

		

	}


