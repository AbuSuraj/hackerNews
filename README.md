# HackerNews
- It is a responsive web application built with Angular, featuring dynamic tab navigation and pagination for browsing Hacker News stories and comments.
- It offers users the ability to explore different story categories and view comments, with responsive design ensuring accessibility across devices.
## How to use this project

1. Clone the GitHub repository to your local machine.

   ```bash
   git clone https://github.com/AbuSuraj/hackerNews.git

2. Navigate to the project directory.

   ```
    cd hackerNews

3. Install the project dependencies using npm.
   ``` 
   npm install.
4. Run the following command
   ```
   npm run start
## Project live site link:
https://daily-hacker-news.netlify.app/
## Used Features
 - `Services:` TopStoriesService is used to fetch data from the Hacker News API using HTTP requests, encapsulating data retrieval logic and promoting code modularity and maintainability in Angular components.
 -  `Pipe:` I used to extract text content from an HTML string.
 - `Input():` decorator to communicate with parent to child. (CommentsComponent to receive the commentId value from its parent component.).
 - `pagination:` utilised `ngx-pagination` to handle large data comming from api. 
The pagination logic works by determining the start and end points using the current page and page size. It then retrieves the corresponding subset of story IDs from the Hacker News API.
- `responsive:` My app adjusts seamlessly to various screen sizes, providing an optimal user experience across devices




## Additional Feature:
-  The assignment initially required implementing only the top stories and their comments. However, I extended the functionality to include five additional categories. I implemented tabs so that when users click on a tab, it displays news corresponding to the selected category.
- when clicking on url in a story it will open a new tab, and navigate to this link. 
## Implementation Details
### stories component
- `Data Fetching Logic:` 
Retrieves story IDs for a specific category from the Hacker News API.
Iterates through the fetched IDs to obtain detailed information about each story.
Manages loading states to indicate when data retrieval is in progress.
- `Pagination Logic:`
Calculates the start and end indices based on the current page and page size.
Slices the array of story IDs accordingly to fetch a subset of stories for the current page.
- `Tab Navigation Logic:`
Associates each tab with a specific story category.
Updates the active tab and reloads stories based on the selected category.
Ensures the UI reflects the active tab state to provide visual feedback to users.
- `nesting of comments:` In the CommentsComponent, I fetch comment details using TopStoriesService upon receiving a comment ID. If a comment has children, I recursively retrieve details for each child comment, populating the childrenComments array for rendering.


