import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent {
  constructor(private http:HttpClient){}
  getAll() {
    this.http.get('http://localhost/wdpf55_angular/angular/angularnews/api/newslist.php').subscribe((result=>{}));
  }

}