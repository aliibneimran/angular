import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent  implements OnInit{
  posts:any = {};
  error = "";
  success = "";
  constructor(private route: ActivatedRoute, private http: HttpClient){}
  SingleNews(id:any) {
    this.http.post('http://localhost/wdpf55_angular/angular/angularnews/api/single_news.php',{id : id}).subscribe((result=>{
      this.posts = result;
      console.log(result)
    }));
  }
  ngOnInit(){
    let id = this.route.snapshot.params['id'];
    console.log(id);
    this.SingleNews(id);
  }
}
