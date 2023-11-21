import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css']
})
export class EntertainmentComponent {
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
