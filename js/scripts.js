$(document).ready(function() {
  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
    $("h1").removeClass();
    $("h1").addClass("light-text");
  });

  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
    $("h1").removeClass();
    $("h1").addClass("blue-text");
  });
});
