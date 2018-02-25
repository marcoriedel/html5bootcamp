window.onload = function preloader() {
        document.getElementById('hidden').className = 'visible';
     };

 function alertMsg(){
 	alert("Alert Message");
 }

function apiCall() {

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
	request.open("GET", 'http://api.icndb.com/jokes/random' , true);
	request.send(null);
}