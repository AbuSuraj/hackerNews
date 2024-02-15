import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoriesComponent } from './stories/stories.component';
import { TopStoriesService } from './service/top-stories.service';
import { HttpClientModule } from '@angular/common/http';
import { CommentsComponent } from './stories/comments/comments.component';
import { ExtractTextPipe } from './pipe/extract-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StoriesComponent,
    CommentsComponent,
    ExtractTextPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule 
  ],
  providers: [TopStoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
