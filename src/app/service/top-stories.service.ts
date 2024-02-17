import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopStoriesService {
  private readonly hackerNewsUrl = 'https://hacker-news.firebaseio.com/v0';

  constructor(private http: HttpClient) { }

  getTopStories(searchCategory:string, page?: number , pageSize?: number): Observable<number[]> {
    if(page && pageSize){
      const start = (page - 1) * pageSize;
      const end = start + pageSize;
      return this.http.get<number[]>(`${this.hackerNewsUrl}/${searchCategory}.json`)
                      .pipe(
                        map((ids: number[]) => ids.slice(start, end))
                      );
    }
    else {
        return this.http.get<number[]>(`${this.hackerNewsUrl}/${searchCategory}.json`)
    }
  }

  getStoryDetails(storyId: number): Observable<any> {
    return this.http.get<any>(`${this.hackerNewsUrl}/item/${storyId}.json`);
  }

  getCommentDetails(commentId: number): Observable<any> {
    return this.http.get<any>(`${this.hackerNewsUrl}/item/${commentId}.json`);
  }
}
