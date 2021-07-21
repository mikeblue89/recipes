import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  public folder: string;
  apiUrl='https://tasty.p.rapidapi.com';
  data: any;
  recipeList: any;
  constructor(private activatedRoute: ActivatedRoute, private api: ApiService) { }


  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.getRecipes();
  }

  getRecipes(){
    const endpoint =this.apiUrl+'/recipes/list?from=0&size=20&tags=under_30_minutes';
    const options = {
      headers:{
        'x-rapidapi-key': 'cadd9986femsh3ae5c3ddf79a0ccp1e749djsnca15acfd77e1',
        'x-rapidapi-host': 'tasty.p.rapidapi.com'
      }
    };

    this.api.getData(endpoint, options).subscribe(
      (response)=>{
        this.data = response;
        this.recipeList = [];
        this.data.results.forEach(element => {
          if(element.description){
            this.recipeList.push(element);
          }
        });
        console.log(this.recipeList);
      },
      (err)=>{
        console.log(err);
      }
    );
  }

}
