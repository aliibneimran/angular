import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent {
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
