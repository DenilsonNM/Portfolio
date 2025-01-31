$(document).ready(function () {
  $(".tab_content").hide();
  $(".ul_tabs li:first").addClass("active").show();
  $(".tab_content:first").show();

  $("ul.ul_tabs li").click(function () {
    $(".ul_tabs li").removeClass("active");
    $(this).addClass("active");
    $(".tab_content").hide();

    var activeTab = $(this).find("a").attr("href");
    $(activeTab).fadeIn();
    return false;
  });
});
