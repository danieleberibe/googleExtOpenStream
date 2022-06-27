function checkUrl() {
	console.log("start");
    CurrentUrl = window.location.href;
	var Temp_current_url = CurrentUrl;
	console.log(CurrentUrl);
    if (CurrentUrl != Temp_current_url && Temp_current_url != undefined) {
		
        $('#feedDiv').remove();
        $('#eventFeedBtn').remove()
        $('#rankingRequestBtn').remove()
        chrome.runtime.sendMessage(
            {
                cmd: "get_html", filename: "EventFeed.html"
            }
            , function (html) {
                $('body').append(html.html);
                $('#feedDiv').draggable({
                    handle: "#feedHandle"
                });
            }
        );
		
      
    }
    return  CurrentUrl
}

function getCollection(){
    var ciao = checkUrl();
    console.log("sono" + ciao); 
}

//-----------------------------------------------------------





//----------------------------------------------------------------



async function fetchMoviesJSON() {
	const response = await fetch('http://localhost:8081/movies');
	const movies = await response.json();
	console.log(movies)
	return movies;
  }

function chicco(){
	var divve = document.getElementsByClassName("sc-7qr9y8-0 sc-nedjig-1 iUvoJs fyXutN")
	console.log(divve.length)

}
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});

if(document.title.indexOf("CryptoPunks - Collection | OpenSea") != -1 ){
	var div = document.getElementsByClassName("sc-1xf18x6-0 haVRLx Asset--loaded")
	if(div.length > 0 ){
		
		var span = document.createElement("SPAN")
		var x = "";
		fetchMoviesJSON().then(json=>{
			x = json[0]["id"]	
			var t = document.createTextNode(x)
			console.log(x + "pinco") 
			div[0].appendChild(t);
			
		})
	}
	chicco()
	checkUrl()
	CheckDetailPage()
    getCollection()
	
		
}
