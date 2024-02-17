import { Component, Input, OnInit } from '@angular/core';
import { TopStoriesService } from 'src/app/service/top-stories.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input() commentId!: number;
  comment: any;
  showChildren: boolean = false;
  loading: boolean = true;
  childrenComments: any[] = [];  

  constructor(private topStoriesService: TopStoriesService) { }

  ngOnInit(): void {
    this.getCommentDetails(this.commentId);
  }

  getCommentDetails(commentId: number): void {
    this.topStoriesService.getCommentDetails(commentId).subscribe(comment => {
      this.comment = comment;
      this.loading = false;
     
      if (this.comment.kids && this.comment.kids.length > 0) {
      
        this.comment.kids.forEach((childCommentId: number) => {
          this.topStoriesService.getCommentDetails(childCommentId).subscribe(childComment => {
            this.childrenComments.push(childComment); 
            
          });
        });
      }
    });
  }

  toggleChildren(): void {
    this.showChildren = !this.showChildren;
  }
}
