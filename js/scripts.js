$(document).ready(function() {
  $("button#dark").click(function() {

    $("body").addClass("dark-background");
    $("h1").addClass("light-text");
  });
  $("button#light").click(function() {
    $("body").remove("dark-background");
    $("body").addClass("light-background");
    $("h1").remove("light-text");
    $("h1").addClass("blue-text");
  });


});
