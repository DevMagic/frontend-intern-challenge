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
    listItem.classList.add("collection-item")
    urlItem = document.createElement("a")
    urlItem.setAttribute(
      "href",
      links.find((link) => link.hits === hit).shortUrl
    )
    urlItem.setAttribute("class", "shortened-url")
    urlItem.innerHTML = links.find((link) => link.hits === hit).shortUrl
    listItem.append(urlItem)
    listElement.append(listItem)
    listItem.innerHTML += hit
    listContainer.appendChild(listElement)
  })
}

const fetchData = () => {
  fetch(
    "https://raw.githubusercontent.com/DevMagic/frontend-intern-challenge/master/Assets/urls.json"
  )
    .then((response) => response.json())
    .then((data) => getTopFive(data))
}

fetchData()

const getShortLink = (length) => {
  const characters = "abcdefghijlmnopqrstvxzABCDEFGHILMNOPQRSTUVXZ123456789"
  let result = ""
  var charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

const buttonEncurtar = document.querySelector("#main-button")
const urlInput = document.querySelector(".url-input")
urlInput.style.transition = "all 1s"
buttonEncurtar.style.transition = "all 1s"

buttonEncurtar.addEventListener("click", (e) => {
  e.preventDefault()
  if (buttonEncurtar.textContent === "COPIAR") {
    urlInput.select()
    urlInput.setSelectionRange(0, 99999)
    document.execCommand("copy")
  } else {
    const shortURL = `https://chr.dc/${getShortLink(5)}`
    urlInput.style.opacity = 0.3
    buttonEncurtar.style.opacity = 0.3
    setTimeout(() => {
      urlInput.value = shortURL
      urlInput.style.opacity = 1
      buttonEncurtar.style.opacity = 1
      buttonEncurtar.textContent = "COPIAR"
    }, 500)
  }

  return false
})
