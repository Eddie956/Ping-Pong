function pingpoint(starTline) {
  if(starTline % 3 === 0 && starTline % 5 === 0) {
    return("PingPong")
  } else if(starTline % 3 === 0) {
    return("Ping")
  } else if(starTline % 5 === 0) {
    return("pong")
  } else {
    return starTline
  }
};
$(document).ready(function() {
  $("#addButton").click(function(event) {
    event.preventDefault();
    var madNess = parseInt($("input#reg").val());
    $("ul.mimik").empty();
    for(var starTline = 1; starTline <= madNess; starTline += 1) {
      $("ul.mimik").append("<li>" + pingpoint(starTline) + "</li>");
    }
  });
});