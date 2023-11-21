import { Component} from '@angular/core';
import { NewsService } from './news.Service';
import { Router } from '@angular/router';
import { ArchiveComponent } from '../archive/archive.component';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {
  searchQuery: string = '';

  constructor(private newsService: NewsService, private router: Router) {}

  onSubmit() {
    // Check if the search query is not empty before making the request
    if (this.searchQuery.trim() !== '') {
      this.newsService.searchNews(this.searchQuery).subscribe(
        (response) => {
          // Handle the news data returned from the API
          console.log(response);

          // Navigate to the archive page with the search results
          this.router.navigate(['/archive'], { state: { news: response } });
        },
        (error) => {
          console.error(error);
        }
      );
    }
  }
}

