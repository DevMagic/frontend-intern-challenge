var data
var requestData = new XMLHttpRequest()

requestData.open("GET", "./javascript/urls.json", false);

requestData.onload = function () {
    const receivedData = JSON.parse(requestData.responseText);
    var id = receivedData.map(a => a.id)
    var hits = receivedData.map(a => a.hits)
    var shorturl = receivedData.map(a => a.shortUrl)
    data = new Array(id.length)

    for (var i = 0; i < data.length; i++) {
        data[i] = new Array(3);
    }

    for (i = 0; i < id.length; i++) {
        data[i][0] = id[i]
        data[i][1] = hits[i]
        data[i][2] = shorturl[i]

    }
}

requestData.send()

for (var i = 0; i < (data.length - 1); i++) {
    var a = new Array(3)
    if (data[i][1] < data[i + 1][1]) {
        a[0] = data[i][0]
        a[1] = data[i][1]
        a[2] = data[i][2]
        data[i][0] = data[i + 1][0]
        data[i][1] = data[i + 1][1]
        data[i][2] = data[i + 1][2]
        data[i + 1][0] = a[0]
        data[i + 1][1] = a[1]
        data[i + 1][2] = a[2]
    }
}

for (i = 0; i < 5; i++) {
    document.getElementById(`top${i + 1}`).innerHTML = data[i][2]
    document.getElementById(`click${i + 1}`).innerHTML = data[i][1]

}
var soma = 0
for (i = 0; i < data.length; i++) {
    soma = parseInt(soma + data[i][1])
}
document.getElementById("totalclicks").value = soma;