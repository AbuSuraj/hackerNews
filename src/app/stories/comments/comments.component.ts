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
    this.topStoriesService.getCommentDetails(this.commentId).subscribe(comment => {
      this.comment = comment;
      console.log(this.comment);
      
    });
  }
}
