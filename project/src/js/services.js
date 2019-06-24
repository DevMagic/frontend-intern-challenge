import shortLink from '../js/json.js';
export class Service {
  name() {
    console.log(shortLink);
  }
  getTopFive() {
    const topFive = this.orderByTopHits().slice(0, 5);
    return topFive;
  }
  orderByTopHits() {
    const topHits = shortLink.sort((a, b) => {
      return b.hits - a.hits;
    });
    return topHits;
  }
  getTotalHits() {
    const initialValue = 0;
    const totalHits = shortLink.reduce((total, currentValue) => {
      return total + currentValue.hits;
    }, initialValue);
    return totalHits;
  }
  getShortUrl(url) {
    let shortUrl = shortLink.find(webSite => {
      if (webSite.url === url) return webSite.shortUrl;
    });
    return shortUrl;
  }
}
