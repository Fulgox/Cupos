function mostrarCard(cardId) {
  var cards = document.getElementsByClassName("card");

  for (var i = 0; i < cards.length; i++) {
    cards[i].style.display = "none";
  }
  if (cardId && cardId !== ""){
    document.getElementById(cardId).style.display = "block";
  }

  /*if (cardId) {
    var card = document.getElementById(cardId);
    card.style.display = "block";
  }*/
}
