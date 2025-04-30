let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme_switch')
const themeSwitchRes = document.getElementById('theme_switch_res')

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null)
}

function toggleDarkmode() {
  darkmode = localStorage.getItem('darkmode')
  if (darkmode !== "active") {
    enableDarkmode()
  } else {
    disableDarkmode()
  }
}

if (darkmode === "active") enableDarkmode()

if (themeSwitch) themeSwitch.addEventListener("click", toggleDarkmode)
if (themeSwitchRes) themeSwitchRes.addEventListener("click", toggleDarkmode)
