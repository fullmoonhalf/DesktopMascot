export interface NewsItem {
  readonly id: string;
  readonly title: string;
  readonly url: string;
  readonly source: string;
  readonly summary?: string;
  /** ISO 8601 date-time string. */
  readonly publishedAt: string;
}
