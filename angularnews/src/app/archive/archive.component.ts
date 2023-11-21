// archive.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchComponent } from '../search/search.component';
import { state } from '@angular/animations';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {
  newsResults: any; // Adjust the type based on the actual structure of your news data

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Retrieve the news results from the route state
    // this.newsResults = this.route.snapshot.state.news;
  }
}
