import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent {
  posts:any = [];
  error = "";
  success = "";
  constructor(private http:HttpClient){}
  getAll() {
    this.http.get('https://aii.wdpf55.com/angular/api/newslist.php').subscribe((result=>{
      this.posts = result;
      console.log(this.posts)
    }));
  }
ngOnInit(){
  this.getAll();
}
}
