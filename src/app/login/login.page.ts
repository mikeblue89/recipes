/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormGroup, FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  endpoint = 'https://localhost:44399/api/Usuarios';
  user: FormGroup;
  email:any;
  password:any;
  constructor(private api: ApiService, private navCtrl:NavController) {
   }

  ngOnInit() {
  }

  postUser(){
    const url = this.endpoint+"/Login";
    const body = {
      options:{
        headers:{
          "accept": "*/*",
          "Content-Type": "application/json"
        }
      },
      params:{
        usuario: this.email,
        password: this.password
      }
    }

    this.api.postData(body,url).subscribe(
      (response)=>{
        this.navCtrl.navigateRoot("/main");
      },
      (err)=>{}
      );
  }

  getEmail(e){
    this.email= e.detail.value;
  }
  getPassword(e){
    this.password = e.detail.value;
  }

}
