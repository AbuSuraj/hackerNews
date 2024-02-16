import { Component, OnInit } from '@angular/core';
import { TopStoriesService } from '../service/top-stories.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  topStories: any[] = [];
  loader = true;
  currentPage = 1;
  pageSize = 10;
  total = 500;
  page = 1;

  constructor(private topStoriesService: TopStoriesService) { }

  ngOnInit(): void {
    this.getTopStories();
  }

  getTopStories(): void {
    this.topStoriesService.getTopStories(this.currentPage, this.pageSize)
      .subscribe(storyIds => {
        // this.totalItems = storyIds.length;
        this.topStories = [];
        storyIds.forEach(storyId => {
          this.topStoriesService.getStoryDetails(storyId).subscribe(story => {
            this.topStories.push(story);
            this.loader = false;
          });
        });
      });
  }

getData(page: number){
  this.currentPage = page;
  this.getTopStories();
}

  public labels: any = {
    previousLabel: '<',
    nextLabel: '>',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
}; 


  toggleComments(story: any): void {
    story.showComments = !story.showComments;  
  }

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.getTopStories();
  }
}
