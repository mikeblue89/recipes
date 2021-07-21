/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {
  email: any;
  password: any;
  endpoint = 'https://localhost:44399/api/Usuarios';
  constructor(private api: ApiService) { }

  ngOnInit() {
  }
  getEmail(e){
    this.email=e.detail.value;
  }
  getPassword(e){
    this.password=e.detail.value
  }
  registrar(){
    const url = this.endpoint+"/Registro";
    const body = {
      usuario: this.email,
      password: this.password
    };

    this.api.postData(body,url).subscribe(
      (response)=>{
        console.log(response);
      },
      (err)=>{
        console.log(err);
      }
    );
  }

}