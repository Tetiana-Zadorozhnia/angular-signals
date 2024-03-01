import { Injectable, signal, effect } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  private apiKey =
    'live_kMyj7VwZO2qddfrmZCe95Wu7MOkydLFm8UWhbX5dB220tqMmmq3hyIdyx6EYqtJu';
  private apiUrl = 'https://api.thecatapi.com/v1';

  cats = signal<Cat[]>([]);

  constructor(private http: HttpClient) {}

  fetchCats() {
    const timestamp = new Date().getTime();
    const url = `${this.apiUrl}/images/search?limit=10&api_key=${this.apiKey}&timestamp=${timestamp}`;
    this.http.get<Cat[]>(url).subscribe((cats) => {
      this.cats.set(cats);
    });
  }
}

export interface Cat {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: any[];
}
