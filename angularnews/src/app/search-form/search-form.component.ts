import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {
  @Output() search = new EventEmitter<string>();
  searchQuery: string = '';

  onSubmit() {
    this.search.emit(this.searchQuery);
  }
}
