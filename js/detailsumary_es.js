$(document).ready(function () {

  $(".div_details").click(function () {
    $(this).next("ul").slideToggle();
  });

  $("#toggleAll").click(function () {
    let isVisible = $(".ul_sumary:visible").length > 0;

    if (isVisible) {
      $(".ul_sumary").slideUp();
      $(this).html('<i class="fa-solid fa-eye"></i> Ver todo');
    } else {
      $(".ul_sumary").slideDown();
      $(this).html('<i class="fa-solid fa-eye-slash"></i> Ocultar todo');
    }
  });
});

