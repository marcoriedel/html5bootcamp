function getRepositories() {
    
    return new Promise(function(resolve, reject) {
      
    let url = 'https://api.github.com/search/repositories';
    let queryText = document.getElementById('queryText').value;

    if(queryText != '')
    {
        url += '?q='+queryText;

    }
    else{
        url += '?q=javascript';
    }
      var req = new XMLHttpRequest();
      req.open('get',url,true);
  
      req.onload = function() {
        if (req.status == 200) {
          resolve(req.responseText);
        }
        else {
          reject(request.statusText);
        }
      };
      
      req.onerror = function() {
        reject(Error("Network Error"));
      };
        
      req.send();
    });
  }

  function getReposBtn(){
    getRepositories().then(function(response) {
        var obj = JSON.parse(response);
        var repoList = obj.items; 
        var htmlCode = '';
      repoList.forEach(element => {
          htmlCode += '<ul><a href='+element.html_url+'>'+element.full_name+'</a></ul>'

          

          
      });
      console.log(htmlCode);
      document.getElementById('response').innerHTML = htmlCode;
         
      }, function(error) {
        console.error("Failed!", error);
      })
  }

function getText(){
    
    console.log(text);
}

