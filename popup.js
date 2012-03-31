var bgp = chrome.extension.getBackgroundPage();
var songs = bgp.getSongs();
$(function () {
    var title;
    for (title in songs) {
        $("#songs").append('<p><a href="' + songs[title] + '" class="sm2_button"></a> ' + title + '</p>');
    }
});