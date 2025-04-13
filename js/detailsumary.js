$(document).ready(function () {

  $(".div_details").click(function () {
    $(this).next("ul").slideToggle();
  });

  $("#toggleAll").click(function () {
    let isVisible = $(".ul_sumary:visible").length > 0;

    if (isVisible) {
      $(".ul_sumary").slideUp();
      $(this).text("Show all");
    } else {
      $(".ul_sumary").slideDown();
      $(this).text("Hide all");
    }
  });
});
