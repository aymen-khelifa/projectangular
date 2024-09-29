import { Component } from '@angular/core';
import { Categorie } from '../models/Categorie';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent {title:string="";
  categories : Categorie[]=[{"id":1,"title":"Grand électroménager",
    "image":"assets/images/categorie_electromenager.jpg", "description":"our bien rédiger une description produit, il faut utiliser « l'art du story telling » et faire preuve d'authenticité : 86% des consommateurs3 choisissent une marque en fonction de ces critères. Le story telling consiste à raconter une histoire autour d'un produit dans le but de le promouvoir et créer un « lien émotionnel4 » fort avec le consommateur.",
    "available":true},
    {"id":2,"title":"Petit électroménager",
    "image":"assets/images/categorie_petit_electromenager.jpg", "description":"our bien rédiger une description produit, il faut utiliser « l'art du story telling » et faire preuve d'authenticité : 86% des consommateurs3 choisissent une marque en fonction de ces critères. Le story telling consiste à raconter une histoire autour d'un produit dans le but de le promouvoir et créer un « lien émotionnel4 » fort avec le consommateur.",
    "available":true,},
    {"id":3,"title":"Produits informatiques",
    "image":"assets/images/categorie_produits_informatiques.jpg", "description":"our bien rédiger une description produit, il faut utiliser « l'art du story telling » et faire preuve d'authenticité : 86% des consommateurs3 choisissent une marque en fonction de ces critères. Le story telling consiste à raconter une histoire autour d'un produit dans le but de le promouvoir et créer un « lien émotionnel4 » fort avec le consommateur.",
    "available":true},
    {"id":4,"title":"Smart Phones", "image":"assets/images/categorie_smartPhone.jpg",
    "description":"our bien rédiger une description produit, il faut utiliser « l'art du story telling » et faire preuve d'authenticité : 86% des consommateurs3 choisissent une marque en fonction de ces critères. Le story telling consiste à raconter une histoire autour d'un produit dans le but de le promouvoir et créer un « lien émotionnel4 » fort avec le consommateur.", "available":true},
    {"id":5,"title":"TV, images et son",
    "image":"assets/images/categorie_tv_image_son.jpg", "description":"",
    "available":false},
    {"id":6,"title":"Produits voiture", "image":"assets/images/produits_nettoyages.jpg",
    "description":"our bien rédiger une description produit, il faut utiliser « l'art du story telling » et faire preuve d'authenticité : 86% des consommateurs3 choisissent une marque en fonction de ces critères. Le story telling consiste à raconter une histoire autour d'un produit dans le but de le promouvoir et créer un « lien émotionnel4 » fort avec le consommateur.","available":false},
    ]
    afficheDescription(id:number){
      this.categories.forEach(element => {
        if (element.id == id) {
          alert(element.description)
        }
      })
    }
}
