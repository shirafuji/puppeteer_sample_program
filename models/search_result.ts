export default class SearchResult {
  rank: number;
  url: string;
  constructor (rank: number, url: string) {
    this.rank = rank;
    this.url = url;
  }
}
