document.addEventListener("DOMContentLoaded", function () {
  const userLang = navigator.language || navigator.userLanguage;

  const savedLang = localStorage.getItem("preferredLang");

  if (!savedLang) {
    if (userLang.startwith("es") && !window.location.pathname.includes("/es/")) {
      window.location.href = "/es/index.html";
    }
  }

  function setLanguage(lang) {
    localStorage.setItem("preferredLang", lang);
  }

  document.querySelectorAll(".lang_switch").forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const lang = this.getAttribute("data-lang");
      setLanguage(lang);
      window.location.href = this.getAttribute("href")
    });
  });
});