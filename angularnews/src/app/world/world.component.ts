import { HttpClient } from '@angular/common/http';
import { Component} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent{
  posts:any = [];
  error = "";
  success = "";
  constructor(private http:HttpClient){}
  getAll() {
    this.http.get('http://localhost/wdpf55_angular/angular/angularnews/api/newslist.php').subscribe((result=>{
      this.posts = result;
      console.log(this.posts)
    }));
  }
ngOnInit(){
  this.getAll();
}
}