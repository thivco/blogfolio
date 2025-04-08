document.addEventListener('DOMContentLoaded', function() {

  const path = window.location.pathname;
  const ROUTES = {
    "/":"<p>Maison</p>",
    "/about":"<p>A propos</p>",
    "/contact":"<p>Contact</p>"

  }
  const NAV_LINKS = document.querySelectorAll(".navbar__link")
  const changeContent = (page) => {

  }
  console.log(path)
  NAV_LINKS.forEach((link) => {
    console.log("Here is the link", link.textContent)
  })
  // clicked.addEventListener("click", changeContent())

})
