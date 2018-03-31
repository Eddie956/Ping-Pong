function pingpoint(starTline) {
  if(starTline % 3 === 0 && startline % 5 === 0) {
    return("PingPong")
  } else if(starTline % 3 === 0) {
    return("Ping")
  } else if(starTline % 5 === 0) {
    return("pong")
  }
};
$(document).ready(function() {
  $("#addButton").click(function(event) {
    event.preventDefault();
    var madNess = parseInt($("input#reg").val());
    $("ul.mimik").empty();
    for(var starTline = 1; starTline <= userNumber; starTline += 1) {
      $("ul.mimik").append("<li>" + pingpoint(starTline) + "</li>");
    }
  });
});