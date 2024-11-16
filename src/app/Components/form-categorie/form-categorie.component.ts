import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Categorie } from 'src/app/models/Categorie';
@Component({
  selector: 'app-form-categorie',
  templateUrl: './form-categorie.component.html',
  styleUrls: ['./form-categorie.component.css']
})
export class FormCategorieComponent {
  categorie: Categorie = new Categorie();

  constructor(private activated:ActivatedRoute) {}
  onSubmit() {
    if (this.categorie) {
      console.log('Form data:', this.categorie);
       }
  }
  ngOnInit(): void {
    this.categorie = new Categorie();
    this.activated.params.subscribe({
      next:(param)=>{
        if (param['obj']!=undefined){
          console.log(JSON.parse(param['obj']))
          this.categorie=JSON.parse(param['obj'])
        }
      }
    })
  }


}
