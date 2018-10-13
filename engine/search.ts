import search from '../providers/puppeteer/search'
import {Error} from '../models/error'

type searchRequest = {
  keywords: Array<string>;
  callback: (a: any, b: Error | null) => void;
}

export default (r: searchRequest) => {
  var search_words = r.keywords.join(' ')
  search(search_words, (results: any, err: Error | null) => {
    if (err) {
      r.callback(null, err);
    } else {
      r.callback(results, null);
    }
  })
}
