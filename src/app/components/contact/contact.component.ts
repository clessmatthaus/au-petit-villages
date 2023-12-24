import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
 

  name: string = ""
  email: string = ""
  subject: string = ""
  message: string = ""

  datas: string[] = []

  constructor(){}
  /*onSubmit(data: any){
    this.http.post('http://localhost:4200/assets/api/message.json', data)
    .subscribe((result)=>{
      console.log("resultat", result)
    })
  }*/
  ngOnInit(): void {
  }
   
  handleSubmit(){
    if(this.name && this.email && this.subject && this.message){
      this.datas.push(this.name)
      this.datas.push(this.email)
      this.datas.push(this.subject)
      this.datas.push(this.message)
      this.name = ""
      this.email = ""
      this.subject = ""
      this.message = ""
    }
  }
}
