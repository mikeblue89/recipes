/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  endpoint = 'https://localhost:44399/api/Usuarios';
  user: FormGroup;
  constructor(private api: ApiService) {
    this.user = new FormGroup({
      email: new FormControl(""),
      passsword: new FormControl("")
    });
   }

  ngOnInit() {
  }

  postUser(){
    const url = this.endpoint+"/Registro";
  }

  email(e){
    console.log(e.detail.value);
  }

}
