export default () => {
  var _paq = (window._paq = window._paq || [])
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(["setDocumentTitle", document.domain + "/" + document.title])
  _paq.push(["setCookieDomain", "*.highbs-bok.art"])
  _paq.push(["trackPageView"])
  _paq.push(["enableLinkTracking"])
  ;(function () {
    var u = "//matomo.rimarok.com/"
    _paq.push(["setTrackerUrl", u + "matomo.php"])
    _paq.push(["setSiteId", "2"])
    var d = document,
      g = d.createElement("script"),
      s = d.getElementsByTagName("script")[0]
    g.type = "text/javascript"
    g.async = true
    g.src = u + "matomo.js"
    s.parentNode.insertBefore(g, s)
  })()
}
