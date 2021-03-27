/**
 * Developed by Vamsi Krishna Kodimela.
 * This is the firs beta release of the extension.
 * Please report if you found any bugs.
 * Feel free to ask any features required.
 */
var skip = true;
let c = 1;
var timer;
$(document).ready(function () {

  $("body").prepend("<button id='cheggSkipper'>Start Automation</button>");
  $("body").prepend("<button id='cheggSkip'>Skip Question</button>");
  $("body").prepend(
    "<div id='cheggSkipSpan'>Designed &amp; Developed by <strong>Vamsi Krishna Kodimela</strong>.<br/><center><strong>&copy; Guru</strong></center></div>"
  );

  $("#cheggSkipper").click(function () {
    if (!skip) skip = true;
    alert("Question mode activated.");
    skipper();
  });

  $("#cheggSkip").click(function () {
    $(".sc-bbmXgH").click();
    $(".eOoWZC").click();
    $(".jkNSkS").click();
  });

  $(document).keypress(function (e) {
    if (e.which === 13) {
      skip = false;
      alert("Answer Mode.");
    }
  });
});

function skipper() {
  timer = setTimeout(function () {
    if (skip) {
      console.log("Skipped:" + c);
      c++;
      $(".sc-bbmXgH").click();
      $(".eOoWZC").click();
      $(".jkNSkS").click();
      skipper();
    }
  }, 10000);
}
