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

  constructor(private topStoriesService: TopStoriesService) { }

  ngOnInit(): void {
    this.getCommentDetails(this.commentId);
  }

  getCommentDetails(commentId: number): void {
    this.topStoriesService.getCommentDetails(commentId).subscribe(comment => {
      this.comment = comment;
      console.log(this.comment);
      
      // Recursively fetch child comments
      // if (this.comment.kids && this.comment.kids.length > 0) {
      //   this.comment.kids.forEach((childCommentId: number) => {
      //     this.getCommentDetails(childCommentId);
      //   });
      // }
    });
  }
}
