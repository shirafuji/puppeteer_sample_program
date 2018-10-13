import puppeteer = require('puppeteer');
import {Error} from '../../models/error'
import SearchResult from '../../models/search_result'

export default ((search_words: string, callback: (a: any, b: Error | null) => void) => {
  (async () => {
    try {
      const browser = await puppeteer.launch({headless: false})
      const page = await browser.newPage()
      await page.goto('https://www.yahoo.co.jp/')
      await page.type('input#srchtxt', search_words)
      await page.click('input#srchbtn')
      await page.waitForNavigation({waitUntil: 'load'});
      var urls: Array<any> = await page.evaluate(() => {
          const articleSelector = "h3 a"
          const adSelector = "h3 a.t"
          var articles = document.querySelectorAll(articleSelector)
          var urls: Array<any> = []
          for (var i = 0; i < articles.length; i++) {
            urls.push(articles[i].getAttribute('href'))
          }
          var ads = document.querySelectorAll(adSelector)
          for (var i = 0; i < ads.length; i++) {
            urls.map((url) => {
              if (url == ads[i].getAttribute('href')) {
                urls.splice(i, 1);
              }
            })
          }
          return urls
        })
      if (urls.length > 5) {
        urls.slice(0, 5);
        urls = urls.slice(0, 5)
      }
      var results: Array<any> = []
      for (var i = 0; i < urls.length; i++) {
        results.push(new SearchResult(i+1, urls[i]))
      }
      await browser.close()
      callback(results, null);
    } catch (e) {
      callback(null, {
        code: 500,
        message: e
      })
    }
  })();
})
