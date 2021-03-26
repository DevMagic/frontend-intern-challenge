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
  const response = await fetch(
    "https://raw.githubusercontent.com/DevMagic/frontend-intern-challenge/master/Assets/urls.json"
  ).catch((e) => console.log(e))
  const data = await response.json()

  getTopFive(data)
}

fetchData()
