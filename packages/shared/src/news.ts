import type { IsoDateString } from "./primitives.js";


export interface NewsItem {
  readonly id: string;
  readonly title: string;
  readonly url: string;
  readonly source: string;
  readonly summary?: string;
  readonly publishedAt: IsoDateString;
}
