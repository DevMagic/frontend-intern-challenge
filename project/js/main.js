// Renders and displays fetched data
const getTopFive = (links) => {
  const hitLinks = []
  links.forEach((link) => {
    const hits = link.hits
    hitLinks.push(hits)
  })

  document.querySelector("#show-count").innerHTML =
    "&nbsp;" + hitLinks.reduce((a, b) => a + b, 0) + "&nbsp;"

  const topFive = [...hitLinks].sort((a, b) => b - a).slice(0, 5)

  const listContainer = document.querySelector("#top-links-rendered")
  const listElement = document.createElement("ul")

  topFive.forEach((hit) => {
    listItem = document.createElement("li")
    listItem.className = "collection-item"
    urlItem = document.createElement("a")
    urlItem.setAttribute(
      "href",
      links.find((link) => link.hits === hit).shortUrl
    )
    urlItem.className = "shortened-url"
    urlItem.innerHTML = links.find((link) => link.hits === hit).shortUrl
    listItem.append(urlItem)
    listElement.append(listItem)
    listItem.innerHTML += hit
    listContainer.appendChild(listElement)
  })
}

// Fetch data
const fetchData = async () => {
  await fetch(
    "https://raw.githubusercontent.com/DevMagic/frontend-intern-challenge/master/Assets/urls.json"
  )
    .then((response) => response.json())
    .then((data) => getTopFive(data))
    .catch((e) => console.log(e))
}

fetchData()

// Shorts url
const getShortUrl = async (url) => {
  if (url.search("is.gd") !== -1) {
    return "Não posso encurtar links desse domínio (is.gd)"
  }
  return await fetch(`https://is.gd/create.php?format=json&url=${url}`)
    .then((response) => response.json())
    .then((data) => data.shorturl)
    .catch((e) => console.log(e))
}

// Declaration of used DOM elements
const snackbar = document.querySelector("#snackbar")
const urlInput = document.querySelector(".url-input")
const buttonShorterOrCopy = document.querySelector("#main-button")
const anotherLinkButton = document.querySelector("#another-button")
urlInput.style.transition = "opacity 1s"
buttonShorterOrCopy.style.transition = "opacity 1s"
anotherLinkButton.style.transition = "opacity 1s"

// Validates input url
function validateURL(str) {
  var pattern = new RegExp(
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
buttonShorterOrCopy.addEventListener("click", (e) => {
  e.preventDefault()
  if (urlInput.value) {
    if (validateURL(urlInput.value)) {
      if (buttonShorterOrCopy.textContent === "Copiar") {
        urlInput.select()
        urlInput.setSelectionRange(0, 99999)
        document.execCommand("copy")
      } else {
        let shortURL = ""
        getShortUrl(urlInput.value).then((response) => (shortURL = response))
        urlInput.style.opacity = 0.3
        buttonShorterOrCopy.style.opacity = 0.3
        setTimeout(() => {
          urlInput.value = shortURL
          urlInput.style.opacity = 1
          buttonShorterOrCopy.style.opacity = 1
          buttonShorterOrCopy.textContent = "Copiar"
        }, 500)
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
  urlInput.style.opacity = 0.3
  buttonShorterOrCopy.style.opacity = 0.3

  setTimeout(() => {
    urlInput.value = ""
    buttonShorterOrCopy.textContent = "ENCURTAR"
    urlInput.style.opacity = 1
    buttonShorterOrCopy.style.opacity = 1
  }, 500)

  anotherLinkButton.style.opacity = 0
})
