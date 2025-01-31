$(document).ready(function () {
  $(".tab_content").hide();
  $(".ul_tabs li:first").addClass("active");
  $(".tab_content:first").show();

  $("ul.ul_tabs li").click(function (event) {
    event.preventDefault();

    $(".ul_tabs li").removeClass("active");
    $(this).addClass("active"); // clase activa al <li> clicado

    $(".tab_content").hide();

    var activeTab = $(this).find("a").attr("href"); // ID de la pestaña
    $(activeTab).fadeIn();
  });
});
