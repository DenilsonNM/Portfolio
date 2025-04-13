$(document).ready(function () {

  $(".div_details").click(function () {
    $(this).next("ul").slideToggle();
  });

  $("#toggleAll").click(function () {
    let isVisible = $(".ul_sumary:visible, .ul_sumary_alt:visible").length > 0;

    if (isVisible) {
      $(".ul_sumary, .ul_sumary_alt").slideUp();
      $(this).text("Show all");
    } else {
      $(".ul_sumary, .ul_sumary_alt").slideDown();
      $(this).text("Hide all");
    }
  });
});
