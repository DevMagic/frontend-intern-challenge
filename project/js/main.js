// Declaration of used DOM elements
const snackbar = document.querySelector("#snackbar")
const urlInput = document.querySelector(".url-input")
const buttonShortenOrCopy = document.querySelector("#main-button")
const anotherLinkButton = document.querySelector("#another-button")
urlInput.style.transition = "all 2s"
buttonShortenOrCopy.style.transition = "all 2s"
anotherLinkButton.style.transition = "all 2s"

// Shorts url
const getShortUrl = async (url) => {
  if (url.search("is.gd") !== -1) {
    return "Não posso encurtar links desse domínio (is.gd)"
  }

  const response = await fetch(
    `https://is.gd/create.php?format=json&url=${url}`
  ).catch((e) => console.log(e))
  const { shorturl } = await response.json()
  return shorturl
}

// Validates input url
function validateURL(str) {
  const pattern = new RegExp(
    "^(https?:\\/\\/)?" +
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
      "((\\d{1,3}\\.){3}\\d{1,3}))" +
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
      "(\\?[;&a-z\\d%_.~+=-]*)?" +
      "(\\#[-a-z\\d_]*)?$",
    "i"
  )
  return pattern.test(str)
}

// Listen for clicks on the main button
buttonShortenOrCopy.addEventListener("click", (e) => {
  e.preventDefault()
  if (urlInput.value) {
    if (validateURL(urlInput.value)) {
      if (buttonShortenOrCopy.textContent === "Copiar") {
        urlInput.select()
        urlInput.setSelectionRange(0, 99999)
        document.execCommand("copy")
      } else {
        urlInput.style.opacity = 0
        buttonShortenOrCopy.style.opacity = 0

        setTimeout(() => {
          urlInput.style.color = "#fff"
          getShortUrl(urlInput.value).then((data) => (urlInput.value = data))
          urlInput.style.opacity = 1
          buttonShortenOrCopy.textContent = "Copiar"
          buttonShortenOrCopy.style.opacity = 1
        }, 800)
        anotherLinkButton.style.opacity = 1
      }
    } else {
      snackbar.className = "show"
      setTimeout(() => {
        snackbar.className = snackbar.className.replace("show", "")
      }, 2000)
    }
  }
})

// Listen for clicks on the 'shorter another link' button
anotherLinkButton.addEventListener("click", (e) => {
  e.preventDefault()
  urlInput.style.opacity = 0
  buttonShortenOrCopy.style.opacity = 0

  setTimeout(() => {
    urlInput.style.color = "#e35822"
    urlInput.value = ""
    urlInput.style.opacity = 1
    buttonShortenOrCopy.textContent = "Encurtar"
    buttonShortenOrCopy.style.opacity = 1
  }, 800)

  anotherLinkButton.style.opacity = 0
})
