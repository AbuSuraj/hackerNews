import { Component, OnInit } from '@angular/core';
import { TopStoriesService } from '../service/top-stories.service';
import { FormBuilder, FormGroup } from '@angular/forms';

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
  totalItems:any; 
  categoryForm!: FormGroup;
  selectedCategory = 'topstories';
  activeTab: string = 'topstories';

  constructor(private topStoriesService: TopStoriesService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getTopStories();
    this.getTotalItems();

  }

  getTotalItems(){
    this.topStoriesService.getTopStories(this.selectedCategory)
    .subscribe(storyIds => {
      this.total = storyIds.length;
    })
  }

  categoryChange(category:string){
    this.activeTab = category;
    this.selectedCategory = category;
    this.getTopStories();
    this.getTotalItems();
  }


  getTopStories(): void {
    this.topStoriesService.getTopStories(this.selectedCategory,this.currentPage, this.pageSize)
      .subscribe(storyIds => {
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
