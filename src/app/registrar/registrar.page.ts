/* eslint-disable @typescript-eslint/type-annotation-spacing */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/quotes */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
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
  constructor(private api: ApiService, private navCtrl:NavController) { }

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

    };

    this.api.postData(body,url).subscribe(
      (response)=>{
        this.navCtrl.navigateRoot("/login");
      },
      (err)=>{
        console.log(err);
      }
    );
  }

}
