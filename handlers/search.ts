import search from '../engine/search'
import {Error} from '../models/error'

export default ((req, res) => {
  console.log("GET Request: '/search', keywords:" + req.query.keywords.join(" "))
  search({
    keywords: req.query.keywords,
    callback: (results: any, err: Error | null): void => {
      if (err) {
        res.writeHead(err.code, {'content-type': 'application/json'});
        res.end(JSON.stringify(err))
      } else {
        res.writeHead(200, {'content-type': 'application/json'});
        res.end(JSON.stringify(results))
      }
    }
  })
})
