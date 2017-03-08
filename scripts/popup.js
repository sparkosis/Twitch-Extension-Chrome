'use strict';

$(document).ready(function () {

	var client_id = "s7vcz8pfgw4tlc3a873qwxmozuviklo";
	var chaine = "firepandaa?client_id=" + client_id;
	var title = "Firepandaa";
	var url_api_statut = "https://api.twitch.tv/kraken/streams/"+chaine
	var url_api_statut = "https://api.twitch.tv/kraken/channel/"+chaine
	var message = title + " est en ligne !";
	var redirectUrl = "https://www.twitch.tv/" + title;

	//Récupération du titre

	var status = $.ajax({

	})


});