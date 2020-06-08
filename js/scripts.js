$(document).ready(function() {
  const favorites = ["Chocolate", "Americone Dream", "Vanilla", "Rocky Road", "Butterscotch", "Black Licorice"];

  favorites.forEach(function(flavor) {
    $("ul").prepend("<li>I love " + flavor + " ice cream!</li>");
  });
});