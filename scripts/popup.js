'use strict';

$(document).ready(function () {

	var client_id = "s7vcz8pfgw4tlc3a873qwxmozuviklo";
	var chaine = "firepandaa?client_id=" + client_id;
	var title = "Firepandaa";
	var url_api_statut = "https://api.twitch.tv/kraken/streams/"+chaine
	var url_api_title = "https://api.twitch.tv/kraken/channel/"+chaine
	var message = title + " est en ligne !";
	var redirectUrl = "https://www.twitch.tv/" + title;

	//Récupération du titre

	var status = $.ajax({

	})
	$.ajax({
		url:"/config.json",
		method: "GET",
		success: function(resultat){
			var obj=JSON.parse(resultat);
			var client_id=obj.client_id;
			var chaine=obj.chaine;
			var title=obj.title;
			var url_api_statut=obj.url_api_statut;
			var url_api_title=obj.url_api_title;
			var message=obj.message;
			

		}

		},
		{
		error: function(error){
			console.log('erreur:' + error);
		}
	});

});