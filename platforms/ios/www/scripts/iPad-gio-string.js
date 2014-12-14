{//****************************************************************// touchstart
function send(data) {
	console.log("Sent :"+data);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

jQuery(document).ready(function(){

//SplashScreen
	// jQuery('body').on( 'touchstart', '#p-3-box-167', function()
	// {//Upload Trigger Open
// ***************SplashScreen***************//
// {
		// console.log('Sending: Splash');
		// send('Splash');
// }
// ***************SplashScreen***************//
			// });//Upload Trigger Close

//LED Blinking
	jQuery('body').on( 'touchstart', '#p-2-box-782', function()
	{//Upload Trigger Open
//***************LED Blinking***************//
{
	if(jQuery('#p-2-box-878-box-879').hasClass('hidden'))
	{
		var c1; 
		var c2;
		var loop = 0;
		var d1 = 0;
		var d2 = 0;
		if(jQuery('#p-2-box-788').css('opacity') == 1 && jQuery('#p-2-box-789').css('opacity') == 1)
		{
			if(jQuery('#p-2-box-273-box-274').hasClass('hidden')){
				c1 = '000,000,000';
			}
			if(jQuery('#p-2-box-161').hasClass('hidden')){
				loop = jQuery('#p-2-box-165 .text-contents').text();
			}
			if(jQuery('#p-2-box-273-box-272-box-172').css('opacity') == 1){
				c1 = '255,255,255';
			}else if(jQuery('#p-2-box-273-box-272-box-183').css('opacity') == 1){
				c1 = '255,000,000';
			}else if(jQuery('#p-2-box-273-box-272-box-182').css('opacity') == 1){
				c1 = '000,255,000';
			}else if(jQuery('#p-2-box-273-box-272-box-184').css('opacity') == 1){
				c1 = '000,000,255';
			}else if(jQuery('#p-2-box-273-box-272-box-177').css('opacity') == 1){
				c1 = '255,000,255';
			}else if(jQuery('#p-2-box-273-box-272-box-179').css('opacity') == 1){
				c1 = '255,255,000';
			}else if(jQuery('#p-2-box-273-box-272-box-178').css('opacity') == 1){
				c1 = '255,127,000';
			}else if(jQuery('#p-2-box-273-box-272-box-180').css('opacity') == 1){
				c1 = '000,255,255';
			}else if(jQuery('#p-2-box-273-box-272-box-270').css('opacity') == 1){
				c1 = '127,000,255';
			}else if(jQuery('#p-2-box-273-box-272-box-176').css('opacity') == 1){
				c1 = '128,000,128';
			}else if(jQuery('#p-2-box-273-box-272-box-174').css('opacity') == 1){
				c1 = '000,000,000';
			}
			if(jQuery('#p-2-box-268').hasClass('hidden'))
			{
			var message = "R"+loop+"<W"+c1+"T"+d1+"W"+c1+"T"+d2+">";
				console.log('Sending: '+message);
				send(message);
			}
			else{
			d1 = jQuery('#p-2-box-268 .text-contents').text().replace(/^\s+|\s+$/g,'');
			if(jQuery('#p-2-box-283').hasClass('hidden')){
	
			}else{d2 = jQuery('#p-2-box-357 .text-contents').text().replace(/^\s+|\s+$/g,'');}
			if(jQuery('#p-2-box-283').css('opacity') == 1 && jQuery('#p-2-box-355').css('opacity') == 1)
			{
			if(jQuery('#p-2-box-283-box-272-box-172').css('opacity') == 1){
				c2 = '255,255,255';
			}else if(jQuery('#p-2-box-283-box-272-box-183').css('opacity') == 1){
				c2 = '255,000,000';
			}else if(jQuery('#p-2-box-283-box-272-box-182').css('opacity') == 1){
				c2 = '000,255,000';
			}else if(jQuery('#p-2-box-283-box-272-box-184').css('opacity') == 1){
				c2 = '000,000,255';
			}else if(jQuery('#p-2-box-283-box-272-box-177').css('opacity') == 1){
				c2 = '255,000,255';
			}else if(jQuery('#p-2-box-283-box-272-box-179').css('opacity') == 1){
				c2 = '255,255,000';
			}else if(jQuery('#p-2-box-283-box-272-box-178').css('opacity') == 1){
				c2 = '255,127,000';
			}else if(jQuery('#p-2-box-283-box-272-box-180').css('opacity') == 1){
				c2 = '000,255,255';
			}else if(jQuery('#p-2-box-283-box-272-box-270').css('opacity') == 1){
				c2 = '127,000,255';
			}else if(jQuery('#p-2-box-283-box-272-box-176').css('opacity') == 1){
				c2 = '128,000,128';
			}else if(jQuery('#p-2-box-283-box-272-box-174').css('opacity') == 1){
				c2 = '000,000,000';
			}
			}
			var message = "R"+loop+"<W"+c1+"T"+d1+"W"+c2+"T"+d2+">";
				console.log('Sending: '+message);
				send(message);
			}
			}
			}
}
//***************LED Blinking***************//
			});//Upload Trigger Close
						
//Accelerometer Four Tilt
	jQuery('body').on( 'touchstart', '#p-2-box-1306', function()
	{//Accelerometer Upload Trigger Open
//***************Accelerometer***************//	
{
	if(jQuery('#p-2-box-788').css('opacity') == 0 && jQuery('#p-2-box-789').css('opacity') == 0)
	{
	var dir1 = 'F';
	var ac1 = '255,255,255';
	var dir2 = 'F';
	var ac2 = '255,255,255';
	var dir3 = 'F';
	var ac3 = '255,255,255';
	var dir4 = 'F';
	var ac4 = '255,255,255';
	}
	//First Tilt Structure 
	if(jQuery('#p-2-box-878-box-879').hasClass('hidden'))
	{
		
	}else
	{
	//First Tilt Direction Start 
	if(jQuery('#p-2-box-878-box-1050-box-1046').css('transform') == 'matrix(0, -1, 1, 0, 0, 0)'){ 
		dir1 = 'F';
		}
	if(jQuery('#p-2-box-878-box-1050-box-1046').css('transform') == 'matrix(1, 0, 0, 1, 0, 0)'){ 
		dir1 = 'R';
		}
	if(jQuery('#p-2-box-878-box-1050-box-1046').css('transform') == 'matrix(0, 1, -1, 0, 0, 0)'){ 
		dir1 = 'B';
		}	
	if(jQuery('#p-2-box-878-box-1050-box-1046').css('transform') == 'matrix(-1, 0, 0, -1, 0, 0)'){ 
		dir1 = 'L';
		}
	}//First Tilt Direction Close
	
	//Second Tilt Structure 
	if(jQuery('#p-2-box-878-box-880').hasClass('hidden'))
	{
				
	}else
	{
	//Second Tilt Direction Start 
	if(jQuery('#p-2-box-878-box-1051-box-1047').css('transform') == 'matrix(0, -1, 1, 0, 0, 0)'){	
		dir2 = 'F';
		}
	if(jQuery('#p-2-box-878-box-1051-box-1047').css('transform') == 'matrix(1, 0, 0, 1, 0, 0)'){	
		dir2 = 'R';
		}
	if(jQuery('#p-2-box-878-box-1051-box-1047').css('transform') == 'matrix(0, 1, -1, 0, 0, 0)'){	
		dir2 = 'B';
		}	
	if(jQuery('#p-2-box-878-box-1051-box-1047').css('transform') == 'matrix(-1, 0, 0, -1, 0, 0)'){	
		dir2 = 'L';
		}
	}//Second Tilt Direction Close
	
	//Third Tilt Structure
	if(jQuery('#p-2-box-878-box-882').hasClass('hidden'))
	{
		
	}else
	{
	//Third Tilt Direction Start 
	if(jQuery('#p-2-box-878-box-1052-box-1048').css('transform') == 'matrix(0, -1, 1, 0, 0, 0)'){	
		dir3 = 'F';
		}
	if(jQuery('#p-2-box-878-box-1052-box-1048').css('transform') == 'matrix(1, 0, 0, 1, 0, 0)'){	
		dir3 = 'R';
		}
	if(jQuery('#p-2-box-878-box-1052-box-1048').css('transform') == 'matrix(0, 1, -1, 0, 0, 0)'){	
		dir3 = 'B';
		}	
	if(jQuery('#p-2-box-878-box-1052-box-1048').css('transform') == 'matrix(-1, 0, 0, -1, 0, 0)'){	
		dir3 = 'L';
		}
	}//Third Tilt Direction Close
	
	//Fourth Tilt Structure 
	if(jQuery('#p-2-box-878-box-883').hasClass('hidden'))
	{
		
	}else
	{
	//Fourth Tilt Direction Start 
	if(jQuery('#p-2-box-878-box-1053-box-1049').css('transform') == 'matrix(0, -1, 1, 0, 0, 0)'){	
		dir4 = 'F';
		}
	if(jQuery('#p-2-box-878-box-1053-box-1049').css('transform') == 'matrix(1, 0, 0, 1, 0, 0)'){	
		dir4 = 'R';
		}
	if(jQuery('#p-2-box-878-box-1053-box-1049').css('transform') == 'matrix(0, 1, -1, 0, 0, 0)'){	
		dir4 = 'B';
		}	
	if(jQuery('#p-2-box-878-box-1053-box-1049').css('transform') == 'matrix(-1, 0, 0, -1, 0, 0)'){	
		dir4 = 'L';
		}
	}//Fourth Tilt Direction Close
	
	
	{//First Tilt LED Start
	if(jQuery('#p-2-box-878-box-892-box-885-box-172').css('opacity') == 1){
		ac1 = '255,255,255';
	}else if(jQuery('#p-2-box-878-box-892-box-885-box-183').css('opacity') == 1){
		ac1 = '255,000,000';
	}else if(jQuery('#p-2-box-878-box-892-box-885-box-182').css('opacity') == 1){
		ac1 = '000,255,000';
	}else if(jQuery('#p-2-box-878-box-892-box-885-box-184').css('opacity') == 1){
		ac1 = '000,000,255';
	}else if(jQuery('#p-2-box-878-box-892-box-885-box-177').css('opacity') == 1){
		ac1 = '255,000,255';
	}else if(jQuery('#p-2-box-878-box-892-box-885-box-179').css('opacity') == 1){
		ac1 = '255,255,000';
	}else if(jQuery('#p-2-box-878-box-892-box-885-box-178').css('opacity') == 1){
		ac1 = '255,127,000';
	}else if(jQuery('#p-2-box-878-box-892-box-885-box-180').css('opacity') == 1){
		ac1 = '000,255,255';
	}else if(jQuery('#p-2-box-878-box-892-box-885-box-270').css('opacity') == 1){
		ac1 = '127,000,255';
	}else if(jQuery('#p-2-box-878-box-892-box-885-box-176').css('opacity') == 1){
		ac1 = '128,000,128';
	}else if(jQuery('#p-2-box-878-box-892-box-885-box-174').css('opacity') == 1){
		ac1 = '000,000,000';
	}
	}//First Tilt LED Close
	
	{//Second Tilt LED Start
	if(jQuery('#p-2-box-878-box-893-box-887-box-172').css('opacity') == 1){
		ac2 = '255,255,255';
	}else if(jQuery('#p-2-box-878-box-893-box-887-box-183').css('opacity') == 1){
		ac2 = '255,000,000';
	}else if(jQuery('#p-2-box-878-box-893-box-887-box-182').css('opacity') == 1){
		ac2 = '000,255,000';
	}else if(jQuery('#p-2-box-878-box-893-box-887-box-184').css('opacity') == 1){
		ac2 = '000,000,255';
	}else if(jQuery('#p-2-box-878-box-893-box-887-box-177').css('opacity') == 1){
		ac2 = '255,000,255';
	}else if(jQuery('#p-2-box-878-box-893-box-887-box-179').css('opacity') == 1){
		ac2 = '255,255,000';
	}else if(jQuery('#p-2-box-878-box-893-box-887-box-178').css('opacity') == 1){
		ac2 = '255,127,000';
	}else if(jQuery('#p-2-box-878-box-893-box-887-box-180').css('opacity') == 1){
		ac2 = '000,255,255';
	}else if(jQuery('#p-2-box-878-box-893-box-887-box-270').css('opacity') == 1){
		ac2 = '127,000,255';
	}else if(jQuery('#p-2-box-878-box-893-box-887-box-176').css('opacity') == 1){
		ac2 = '128,000,128';
	}else if(jQuery('#p-2-box-878-box-893-box-887-box-174').css('opacity') == 1){
		ac2 = '000,000,000';
	}
	}//Second Tilt LED Close
	
	{//Third Tilt LED Start 
	if(jQuery('#p-2-box-878-box-894-box-889-box-172').css('opacity') == 1){
		ac3 = '255,255,255';
	}else if(jQuery('#p-2-box-878-box-894-box-889-box-183').css('opacity') == 1){
		ac3 = '255,000,000';
	}else if(jQuery('#p-2-box-878-box-894-box-889-box-182').css('opacity') == 1){
		ac3 = '000,255,000';
	}else if(jQuery('#p-2-box-878-box-894-box-889-box-184').css('opacity') == 1){
		ac3 = '000,000,255';
	}else if(jQuery('#p-2-box-878-box-894-box-889-box-177').css('opacity') == 1){
		ac3 = '255,000,255';
	}else if(jQuery('#p-2-box-878-box-894-box-889-box-179').css('opacity') == 1){
		ac3 = '255,255,000';
	}else if(jQuery('#p-2-box-878-box-894-box-889-box-178').css('opacity') == 1){
		ac3 = '255,127,000';
	}else if(jQuery('#p-2-box-878-box-894-box-889-box-180').css('opacity') == 1){
		ac3 = '000,255,255';
	}else if(jQuery('#p-2-box-878-box-894-box-889-box-270').css('opacity') == 1){
		ac3 = '127,000,255';
	}else if(jQuery('#p-2-box-878-box-894-box-889-box-176').css('opacity') == 1){
		ac3 = '128,000,128';
	}else if(jQuery('#p-2-box-878-box-894-box-889-box-174').css('opacity') == 1){
		ac3 = '000,000,000';
	}
	}//Third Tilt LED Close
	
	{//Fourth Tilt LED Start 
	if(jQuery('#p-2-box-878-box-895-box-891-box-172').css('opacity') == 1){
		ac4 = '255,255,255';
	}else if(jQuery('#p-2-box-878-box-895-box-891-box-183').css('opacity') == 1){
		ac4 = '255,000,000';
	}else if(jQuery('#p-2-box-878-box-895-box-891-box-182').css('opacity') == 1){
		ac4 = '000,255,000';
	}else if(jQuery('#p-2-box-878-box-895-box-891-box-184').css('opacity') == 1){
		ac4 = '000,000,255';
	}else if(jQuery('#p-2-box-878-box-895-box-891-box-177').css('opacity') == 1){
		ac4 = '255,000,255';
	}else if(jQuery('#p-2-box-878-box-895-box-891-box-179').css('opacity') == 1){
		ac4 = '255,255,000';
	}else if(jQuery('#p-2-box-878-box-895-box-891-box-178').css('opacity') == 1){
		ac4 = '255,127,000';
	}else if(jQuery('#p-2-box-878-box-895-box-891-box-180').css('opacity') == 1){
		ac4 = '000,255,255';
	}else if(jQuery('#p-2-box-878-box-895-box-891-box-270').css('opacity') == 1){
		ac4 = '127,000,255';
	}else if(jQuery('#p-2-box-878-box-895-box-891-box-176').css('opacity') == 1){
		ac4 = '128,000,128';
	}else if(jQuery('#p-2-box-878-box-895-box-891-box-174').css('opacity') == 1){
		ac4 = '000,000,000';
	}
	}//Fourth Tilt LED Close
		
	var acelerometer = "#TILT|"+dir1+"-"+"W"+ac1+">"+"|"+dir2+"-"+"W"+ac2+">"+"|"+dir3+"-"+"W"+ac3+">"+"|"+dir4+"-"+"W"+ac4+">"+"|"+"E";
	console.log('Sending:'+acelerometer);
		send(acelerometer);				
}	
//***************Accelerometer***************//	

			});//Accelerometer Upload Trigger Close
			
//Accelerometer Close
	jQuery('body').on( 'touchstart', '#p-2-box-1546', function()
	{//Upload Trigger Open
//***************Accelerometer-Close***************//
{
		console.log('Sending: W000,000,000>');
		send('W000,000,000>');
}
//***************Accelerometer-Close***************//
			});//Upload Trigger Close
		
//Map
	jQuery('body').on( 'touchstart', '#p-10-box-1405', function()
	{//Upload Trigger Open
//***************Map***************//
var port;
var max;
var min;
{
port = jQuery('#p-10-box-1401-box-1390 .text-contents').text().replace(/^\s+|\s+$/g,'');
max = jQuery('#p-10-box-1401-box-1391 .text-contents').text().replace(/^\s+|\s+$/g,'');
min = jQuery('#p-10-box-1401-box-1392 .text-contents').text().replace(/^\s+|\s+$/g,'');

		var map = port+","+max+","+min+",";
		console.log('Sending: '+map);
		send(map);
}
//***************Map***************//
			});//Upload Trigger Close

//Motion&Notification
	jQuery('body').on( 'touchstart', '#p-11-box-1415', function()
	{//Upload Trigger Open
//***************Motion&Notification***************//
{
	var notification1 = jQuery('#p-11-box-1495-box-1499 input[type=text]').val();
	var notification2 = jQuery('#p-11-box-1495-box-1500 input[type=text]').val();
	var motion = "#MOTION|"+notification1+" "+notification2+"|"+"E";
	console.log('Sending: '+motion);
	send(motion);
}
//***************Motion&Notification***************//
			});//Upload Trigger Close

//TetraGait
	jQuery('body').on( 'touchstart', '#p-6-box-1313', function()
	{//Upload Trigger Open
//***************TetraGait***************//
{
		console.log('Sending: TetraGait');
		send('TatraGait');
}
//***************TetraGait***************//
			});//Upload Trigger Close

//TetraAuto
	jQuery('body').on( 'touchstart', '#p-6-box-1524', function()
	{//Upload Trigger Open
//***************TetraAuto***************//
{
		console.log('Sending: TetraAuto');
		send('TatraAuto');
}
//***************TetraAuto***************//
			});//Upload Trigger Close			
			
//TetraSpeech
	jQuery('body').on( 'touchstart', '#p-6-box-1523', function()
	{//Upload Trigger Open
//***************TetraSpeech***************//
{
		var speechprogram = "#SPEECH|"+"FORWARD"+"-"+"TF"+"|"+"RIGHT"+"-"+"TR"+"|"+"E";
		console.log('Sending: '+speechprogram);
		send(speechprogram);
}
//***************TetraSpeech***************//
			});//Upload Trigger Close
	
//TetraSpeech Close
	jQuery('body').on( 'touchstart', '#p-6-box-1556', function()
	{//Upload Trigger Open
//***************TetraSpeech-Close***************//
{
		console.log('Sending: W000,000,000>');
		send('W000,000,000>');
}
//***************TetraSpeech-Close***************//
			});//Upload Trigger Close

//OmniAccelero
	jQuery('body').on( 'touchstart', '#p-7-box-1522', function()
	{//Upload Trigger Open
//***************OmniAccelero***************//
{
		var acelerometer = "#TILT|"+"F"+"-"+"Forward"+"|"+"B"+"-"+"Backward"+"|"+"R"+"-"+"Right"+"|"+"L"+"-"+"Left"+"|"+"E";
		console.log('Sending:'+acelerometer);
		send(acelerometer);
}
//***************OmniAccelero***************//
			});//Upload Trigger Close

//OmniAccelero Close
	jQuery('body').on( 'touchstart', '#p-7-box-1554', function()
	{//Upload Trigger Open
//***************OmniAccelero-Close***************//
{
		console.log('Sending: W000,000,000>');
		send('W000,000,000>');
}
//***************OmniAccelero-Close***************//
			});//Upload Trigger Close
			
//OmniLFR
	jQuery('body').on( 'touchstart', '#p-7-box-1322', function()
	{//Upload Trigger Open
//***************OmniLFR***************//
{
		console.log('Sending: OmniLFR');
		send('OmniLFR');
}
//***************OmniLFR***************//
			});//Upload Trigger Close

//LEDSpeech
	jQuery('body').on( 'touchstart', '#p-4-box-1244', function()
	{//Upload Trigger Open
	var speech3act3;
	var speech4act4;
	var speech1;
	var speech2;
	var speech3;
	var speech4;
	
//***************GIOSpeech***************//
{//3 Speech LED Start 
	if(jQuery('#p-4-box-1168-box-1162-box-1159-box-172').css('opacity') == 1){
		speech3act3 = '255,255,255';
	}else if(jQuery('#p-4-box-1168-box-1162-box-1159-box-183').css('opacity') == 1){
		speech3act3 = '255,000,000';
	}else if(jQuery('#p-4-box-1168-box-1162-box-1159-box-182').css('opacity') == 1){
		speech3act3 = '000,255,000';
	}else if(jQuery('#p-4-box-1168-box-1162-box-1159-box-184').css('opacity') == 1){
		speech3act3 = '000,000,255';
	}else if(jQuery('#p-4-box-1168-box-1162-box-1159-box-177').css('opacity') == 1){
		speech3act3 = '255,000,255';
	}else if(jQuery('#p-4-box-1168-box-1162-box-1159-box-179').css('opacity') == 1){
		speech3act3 = '255,255,000';
	}else if(jQuery('#p-4-box-1168-box-1162-box-1159-box-178').css('opacity') == 1){
		speech3act3 = '255,127,000';
	}else if(jQuery('#p-4-box-1168-box-1162-box-1159-box-180').css('opacity') == 1){
		speech3act3 = '000,255,255';
	}else if(jQuery('#p-4-box-1168-box-1162-box-1159-box-270').css('opacity') == 1){
		speech3act3 = '127,000,255';
	}else if(jQuery('#p-4-box-1168-box-1162-box-1159-box-176').css('opacity') == 1){
		speech3act3 = '128,000,128';
	}else if(jQuery('#p-4-box-1168-box-1162-box-1159-box-174').css('opacity') == 1){
		speech3act3 = '000,000,000';
	}
}//3 Speech LED Close

{//4 Speech LED Start 
	if(jQuery('#p-4-box-1168-box-1163-box-1161-box-172').css('opacity') == 1){
		speech4act4 = '255,255,255';
	}else if(jQuery('#p-4-box-1168-box-1163-box-1161-box-183').css('opacity') == 1){
		speech4act4 = '255,000,000';
	}else if(jQuery('#p-4-box-1168-box-1163-box-1161-box-182').css('opacity') == 1){
		speech4act4 = '000,255,000';
	}else if(jQuery('#p-4-box-1168-box-1163-box-1161-box-184').css('opacity') == 1){
		speech4act4 = '000,000,255';
	}else if(jQuery('#p-4-box-1168-box-1163-box-1161-box-177').css('opacity') == 1){
		speech4act4 = '255,000,255';
	}else if(jQuery('#p-4-box-1168-box-1163-box-1161-box-179').css('opacity') == 1){
		speech4act4 = '255,255,000';
	}else if(jQuery('#p-4-box-1168-box-1163-box-1161-box-178').css('opacity') == 1){
		speech4act4 = '255,127,000';
	}else if(jQuery('#p-4-box-1168-box-1163-box-1161-box-180').css('opacity') == 1){
		speech4act4 = '000,255,255';
	}else if(jQuery('#p-4-box-1168-box-1163-box-1161-box-270').css('opacity') == 1){
		speech4act4 = '127,000,255';
	}else if(jQuery('#p-4-box-1168-box-1163-box-1161-box-176').css('opacity') == 1){
		speech4act4 = '128,000,128';
	}else if(jQuery('#p-4-box-1168-box-1163-box-1161-box-174').css('opacity') == 1){
		speech4act4 = '000,000,000';
	}
}//4 Speech LED Close

{
	if(jQuery('#p-4-box-1168-box-1164 input[type=text]').val() == "")
	{
	speech1 = "BLINK";
	}else{
	speech1 = jQuery('#p-4-box-1168-box-1164 input[type=text]').val();
	}
	
	if(jQuery('#p-4-box-1168-box-1165 input[type=text]').val() == "")
	{
	speech2 = "BUZZ";
	}else{
	speech2 = jQuery('#p-4-box-1168-box-1165 input[type=text]').val();
	}
	
	if(jQuery('#p-4-box-1168-box-1166 input[type=text]').val() == "")
	{
	speech3 = "ON";
	}else{
	speech3 = jQuery('#p-4-box-1168-box-1166 input[type=text]').val();
	}
	
	if(jQuery('#p-4-box-1168-box-1167 input[type=text]').val() == "")
	{
	speech4 = "OFF";
	}else{
	speech4 = jQuery('#p-4-box-1168-box-1167 input[type=text]').val();
	}
	
	var speech1act1 = "R0<W255,000,000T1W000,000,255T1>";
	var speech2act2 = "BEEP";
	var speechprogram = "#SPEECH|"+speech1+"-"+speech1act1+"|"+speech2+"-"+speech2act2+"|"+speech3+"-"+"W"+speech3act3+">"+"|"+speech4+"-"+"W"+speech4act4+">"+"|"+"E";
	console.log('Sending: '+speechprogram);
	send(speechprogram);
}
//***************GIOSpeech***************//
			});//Upload Trigger Close

//LEDSpeech Close
	jQuery('body').on( 'touchstart', '#p-4-box-1539', function()
	{//Upload Trigger Open
//***************LEDSpeech-Close***************//
{
		console.log('Sending: W000,000,000>');
		send('W000,000,000>');
}
//***************LEDSpeech-Close***************//
			});//Upload Trigger Close

//Ready LED Blink
	jQuery('body').on( 'touchstart', '#p-12-box-1442', function()
	{//Upload Trigger Open
//***************Ready LED Blink***************//
{
		console.log('R0<W255,255,255T1W000,000,000T1>');
		send('R0<W255,255,255T1W000,000,000T1>');
}
//***************Ready LED Blink***************//
			});//Upload Trigger Close
			
//US Monitor
	jQuery('body').on( 'touchstart', '#p-13-box-1464', function()
	{//Upload Trigger Open
//***************US Monitor***************//
{
	if(jQuery('#p-13-box-1469-box-1488').hasClass('hidden'))
	{	
	}else{
	console.log('#PING');
	send('#PING');
	}
}
//***************US Monitor***************//
			});//Upload Trigger Close
			
//US Monitor Close
	jQuery('body').on( 'touchstart', '#p-13-box-1485-box-1476', function()
	{//Upload Trigger Open
//***************US-Monitor-Close***************//
{
	console.log('W000,000,000>');
	send('W000,000,000>');
}
//***************US-Monitor-Close***************//
			});//Upload Trigger Close
			//			
			
}); //Main Function Close			

//updateMonitor(value)
var updateMonitor = function(value){
	jQuery('#p-13-box-1493 span').text(value);
}
}
//****************************************************************//