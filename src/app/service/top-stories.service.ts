import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopStoriesService {
  private readonly hackerNewsUrl = 'https://hacker-news.firebaseio.com/v0';

  constructor(private http: HttpClient) { }

  getTopStories(): Observable<number[]> {
    return this.http.get<number[]>(`${this.hackerNewsUrl}/topstories.json`);
  }

  getStoryDetails(storyId: number): Observable<any> {
    return this.http.get<any>(`${this.hackerNewsUrl}/item/${storyId}.json`);
  }

  getCommentDetails(commentId: number): Observable<any> {
    return this.http.get<any>(`${this.hackerNewsUrl}/item/${commentId}.json`);
  }
}
