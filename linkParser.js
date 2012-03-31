var links = {};
$.each($("#releaseright table:first tr"), function (i, e) {
	"use strict";
	var element      = $(e);
	this.str         = element.children('td:first').children('object').children('param[name="flashvars"]').attr('value');
	this.name        = element.children('td:last').text();
	this.url         = decodeURIComponent(this.str.slice(8));
	this.url         = this.url.substr(0, this.url.indexOf('&'));
	links[this.name] = this.url;
});

chrome.extension.sendRequest({content: "playlist", links: links});