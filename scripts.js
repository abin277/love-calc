function element(){
	document.getElementById('fst').innerHTML = '<h2>താങ്കൾക് കിട്ടിയ പേര് കാണുവാനായി താഴെ കാണുന്ന <i>Share</i>ബട്ടൺ ക്ലിക്ക് ചെയ്തു 2 പേർക്ക് share ചെയ്‌താൽ മാത്രം മതി </h2><br><div id="txt"></div><div id="nm"><br><div id="blank"><button onclick="getRandomNumber()" class="btn btn-primary" id="button"><b>Tap To See</b></button></div>';}
	
function getRandomNumber(){
  var text=document.getElementById("nm").innerHTML =
  Math.floor(Math.random() * 100)+"%";
  document.getElementById('nm').style.backgroundColor="aliceblue";
  document.getElementById('nm').style.border="4px solid Deeppink";
  document.getElementById('nm').style.borderRadius="16px";
  document.getElementById('button'). innerHTML="";
  
   }
