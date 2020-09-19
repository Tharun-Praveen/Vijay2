document.addEventListener('keydown', (event) => {
    console.log(event.keyCode);
    var key = event.keyCode;
    if (key == 65) {
    	var audio = new Audio("Vaathi-Raid-Vathi-Raid-Ringtone.mp3");
        audio.currentTime = 0;
    	audio.play();
    	document.getElementById('65').style.backgroundColor = "blue"
    	document.getElementById('65').style.boxShadow = "0px 0px 40px 0px #ffffff";
    	setTimeout(function() {
    		document.getElementById('65').style.backgroundColor = "#7CF313";
            document.getElementById('65').style.boxShadow = "none";
        }, 500)
    }
     if (key == 83) {
         var audio = new Audio("Master-Vathi-Coming-Ringtone.mp3");
         audio.currentTime = 0;
         audio.play();
         document.getElementById('83').style.backgroundColor = "blue"
    	document.getElementById('83').style.boxShadow = "0px 0px 40px 0px #ffffff";
    	setTimeout(function() {
    		document.getElementById('83').style.backgroundColor = "#7CF313";
            document.getElementById('83').style.boxShadow = "none";
        }, 500)
    }
     if (key == 68) {
         var audio = new Audio("Kutti-Story-Ringtone.mp3");
         audio.currentTime = 0;
         audio.play();
         document.getElementById('68').style.backgroundColor = "blue"
    	document.getElementById('68').style.boxShadow = "0px 0px 40px 0px #ffffff";
    	setTimeout(function() {
    		document.getElementById('68').style.backgroundColor = "#7CF313";
            document.getElementById('68').style.boxShadow = "none";
        }, 500)
    }
     if (key == 70) {
         var audio = new Audio("Selfie Pull - Kaththi.mp3");
         audio.currentTime = 0;
         audio.play();
         document.getElementById('70').style.backgroundColor = "purple"
    	document.getElementById('70').style.boxShadow = "0px 0px 40px 0px #ffffff";
    	setTimeout(function() {
    		document.getElementById('70').style.backgroundColor = "#7CF313";
            document.getElementById('70').style.boxShadow = "none";
        }, 500)
    }
     if (key == 71) {
         var audio = new Audio("BigilsVerithanamBGMBigilRingtone1203389725.mp3");
         audio.currentTime = 0;
         audio.play();
         document.getElementById('71').style.backgroundColor = "purple"
    	document.getElementById('71').style.boxShadow = "0px 0px 40px 0px #ffffff";
    	setTimeout(function() {
    		document.getElementById('71').style.backgroundColor = "#7CF313";
            document.getElementById('71').style.boxShadow = "none";
        }, 500)
    }
     if (key == 72) {
         var audio = new Audio("Bigil-Bigil-Bigiluma-Ringtone.mp3");
         audio.currentTime = 0;
         audio.play();
         document.getElementById('72').style.backgroundColor = "purple"
    	document.getElementById('72').style.boxShadow = "0px 0px 40px 0px #ffffff";
    	setTimeout(function() {
    		document.getElementById('72').style.backgroundColor = "#7CF313";
            document.getElementById('72').style.boxShadow = "none";
        }, 500)
    }
     if (key == 74) {
         var audio = new Audio("SingaPenne-Ringtone.mp3");
         audio.currentTime = 0;
         audio.play();
         document.getElementById('74').style.backgroundColor = "#ffffff"
    	document.getElementById('74').style.boxShadow = "0px 0px 40px 0px #ffffff";
    	setTimeout(function() {
    		document.getElementById('74').style.backgroundColor = "#7CF313";
            document.getElementById('74').style.boxShadow = "none";
        }, 500)
    }
     if (key == 75) {
         var audio = new Audio("linf.mp3");
         audio.currentTime=0
         audio.play();
         document.getElementById('75').style.backgroundColor = "#ffffff"
    	document.getElementById('75').style.boxShadow = "0px 0px 40px 0px #ffffff";
    	setTimeout(function() {
    		document.getElementById('75').style.backgroundColor = "#7CF313";
            document.getElementById('75').style.boxShadow = "none";
        }, 500)
    }
     if (key == 76) {
         var audio = new Audio("c.mp3");
         audio.currentTime = 0;
         audio.play();
         document.getElementById('76').style.backgroundColor = "#ffffff"
    	document.getElementById('76').style.boxShadow = "0px 0px 40px 0px #ffffff";
    	setTimeout(function() {
    		document.getElementById('76').style.backgroundColor = "#7CF313";
            document.getElementById('76').style.boxShadow = "none";
        }, 500)
    }
});