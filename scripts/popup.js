'use strict';

$(document).ready(function () {

	var global_var = chrome.extension.getBackgroundPage();

	var client_id = global_var.client_id;
	var chaine = global_var.client_id;
	var title = global_var.title;
	var url_api_statut = global_var.url_api_statut;
	var url_api_title = global_var.url_api_title;
	var message = title + global_var.message;
	var redirectUrl = "https://www.twitch.tv/" + title;

	//On charge le nom du streameur
	$('#streameur').text(title);

	$.ajax({
		url: url_api_title,
		method: "GET",
		success: function(resultat){
			//On set le jeu et le titre du live
			$('#live-title').text(resultat.status);
			$('#live-game').text(resultat.game);
		},
		error: function(error){
			console.log(error);
		}
	})


});
