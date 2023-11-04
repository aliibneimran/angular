import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent {
  posts: Post[] = [];
  error = '';
  success = '';
  post: Post =  {id: 0,PostTitle: '',CategoryId: 0,SubCategoryId: 0,PostDetails: '',PostingDate: '',UpdationDate: '',Is_Active: 0,PostUrl: '',PostImage: '',viewCounter: 0,postedBy: '',lastUpdatedBy: ''};
  
        
  constructor(private postService: PostService) {
  }

  ngOnInit() {
    this.getPosts();
  }
  getPosts(): void {
    this.postService.getAll().subscribe(
      (data: Post[]) => {
        console.log(data);
        // this.Post = data;
        // this.success = 'successful retrieval of the list';
      },
      // (err) => {
      //   console.log(err);
      //   this.error = err;
      // }
    );
  }  
}
