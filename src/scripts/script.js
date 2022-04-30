import collapse from "bootstrap/js/dist/collapse"

let navbarCollapse
let navbarCollapserEl = document.getElementById("navbar-collapser")
function navbarToggle() {
  if (!navbarCollapse)
    navbarCollapse = new collapse(document.getElementById("navbar-collapsible"))
  else navbarCollapse.toggle()
}
navbarCollapserEl.onclick = navbarToggle

const prevBtn = document.getElementById("footer__contact")
prevBtn.onclick = displayContact
function displayContact() {
  const link = document.createElement("a")
  link.href = "mailto:romaric.ruga@gmail.com"
  link.className = "btn btn-light rounded-pill my-2 mx-sm-2 px-3"
  link.innerHTML = "romaric.ruga@gmail.com"
  prevBtn.parentElement.prepend(link)
  prevBtn.remove()
}

const parallaxes = [...document.getElementsByClassName("parallax")].map(
  el => (scrollY, windowHeight) => {
    const ratio = 1 - scrollY / windowHeight
    console.log(
      scrollY,
      windowHeight,
      scrollY / windowHeight,
      Math.round(ratio) * 60
    )
    if (ratio < 100) el.style.marginTop = `${Math.round(ratio * 60)}vh`
  }
)

window.onscroll = () => {
  const scrollY = window.scrollY
  const windowHeight = window.innerHeight
  parallaxes.forEach(fn => fn(scrollY, windowHeight))
}
