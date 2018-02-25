window.onload = function preloader() {
        document.getElementById('hidden').className = 'visible';
     };

 function alertMsg(){
 	alert("Alert Message");
 }
;

function ajaxCall(){
	config = new config('get','http://api.icndb.com/jokes/random',true);
	apiCall(config);
}

function config(type,url,sinc)
{
   this.Type = type;
   this.Url  = url;
   this.Sinc = sinc;
 }



function apiCall(config) {
	

	var request = new XMLHttpRequest();
	
	request.onreadystatechange = function() {
    if (request.readyState === 4) {
        if (request.status === 200) {
            document.getElementById('hidden').innerHTML = request.responseText;
        } 
        else {
            document.getElementById('hidden').className = 'apiError';
        }
    }
	};
	request.open(config.Type, config.Url , config.Sinc);
	request.send(null);
}