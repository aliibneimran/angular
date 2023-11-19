import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private http:HttpClient){}
  onSubmit(data:any){
    this.http.post('http://localhost/wdpf55_angular/angular/angularnews/api/contact.php',data).subscribe((result)=>{
      // console.log(result);
      if(result){
        alert("Successfully Inserted");
      }else{
        alert("No fields can be blank");
      }
    })
  }
}
