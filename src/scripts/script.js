import collapse from "bootstrap/js/dist/collapse"
// import matomo from "./_modules/matomo"

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

// matomo()

/* const parallaxesUpdate = [...document.getElementsByClassName("parallax")].map(
  el => {
    const direction = el.getAttribute("data-parallax-direction")
    // const speed = parseInt(el.getAttribute('data-parallax-speed'))
    return (scrollY, windowHeight) => {
      const { top, bottom } = el.parentElement.getBoundingClientRect()
      const actionRangeTop = top - (direction === "up" ? windowHeight : 0)
      const actionRangeBottom =
        bottom + (direction === "down" ? windowHeight : 0)
      if (
        scrollY + windowHeight > actionRangeTop &&
        scrollY < actionRangeBottom
      )
        el.setAttribute(
          "style",
          "top: " +
            Math.round(
              ((direction === "down"
                ? scrollY - actionRangeTop
                : -(scrollY - actionRangeBottom)) /
                (actionRangeBottom - actionRangeTop)) *
                windowHeight +
                (direction === "up" ? -windowHeight : 0)
            ) +
            "px"
        )
    }
  }
)

window.onscroll = () => {
  const scrollY = window.scrollY
  const windowHeight = window.innerHeight
  parallaxesUpdate.forEach(fn => fn(scrollY, windowHeight))
}
 */
