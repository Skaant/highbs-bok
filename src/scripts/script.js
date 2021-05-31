import collapse from "bootstrap/js/dist/collapse"

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
