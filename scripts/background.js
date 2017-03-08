'use strict';

//Paramètres de l'application

chrome.browserAction.onClicked.addListener(function (activeTab) {

		chrome.tabs.create({ "url": "https://www.twitch.tv/firepandaa" });
});


function updateIcon() {
		
	$.ajax({
		url: url_api_statut,
		method: "GET",
		success: function(resultat){
			var status = resultat.stream;
			if(status === null){
			

			} else {
				
				chrome.browserAction.setBadgeBackgroundColor({ color: [122, 186, 122, 255] });
				chrome.browserAction.setBadgeText({text: "En ligne"});
				doNotification();
			}

		},
		error: function(error){
			console.log('erreur:' + error);
		}
	});

}
function doNotification() {
    chrome.notifications.create('notifyON' + chaine, { type: "basic", title: title, message: message, iconUrl: "images/icon-128.png" }, function (id) {});
   
}


function setIconON(on) {
   chrome.browserAction.setBadgeText({text: "on"});
   
}



//;