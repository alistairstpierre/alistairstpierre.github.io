$( document ).ready(function() {
  $("#contactButton").click(function() {
    $("html, body").animate({ scrollTop: $(document).height() }, "slow");
  })
});
