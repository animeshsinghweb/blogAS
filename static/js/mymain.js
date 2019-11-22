
// Coverts all links to self opening tabs links
var links = document.querySelectorAll('.content .post a');

for (var i = 0, linksLength = links.length; i < linksLength; i++) {
   if (links[i].hostname != window.location.hostname) {
       links[i].target = '_blank';
   } 
}