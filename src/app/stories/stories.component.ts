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
  constructor(private topStoriesService: TopStoriesService) { }

  ngOnInit(): void {
    this.getTopStories();
  }

  getTopStories(){
    this.topStoriesService.getTopStories().subscribe(storyIds => {
      this.topStories = [];
      storyIds.slice(0, 10).forEach(storyId => {
        this.topStoriesService.getStoryDetails(storyId).subscribe(story => {
          this.topStories.push(story);
          this.loader = false;
        });
      });
      // console.log(this.topStories);
      
    });
  }

  toggleComments(story: any): void {
    story.showComments = !story.showComments;  
  }
}
