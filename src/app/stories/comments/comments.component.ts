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
     console.log(this.comment);
     
      if (this.comment.kids && this.comment.kids.length > 0) {
        // Fetch details for each child comment recursively
        this.comment.kids.forEach((childCommentId: number) => {
          this.topStoriesService.getCommentDetails(childCommentId).subscribe(childComment => {
            this.childrenComments.push(childComment); // Push the child comment details into the array

            console.log(this.childrenComments);
            
          });
        });
      }
    });
  }

  toggleChildren(): void {
    this.showChildren = !this.showChildren; // Toggle the visibility of children comments
  }
}
