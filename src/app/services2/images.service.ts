import { Injectable } from '@angular/core';
import { Articles } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor() { }

  getAll():Articles[]{
    return[
      {
      id: 1,
      name: "Astérix",
      description: "Astérix est un personnage de fiction créé par Goscinny et Albert Udezo dans la bande dessinée Astérix en 1959",
      imageUrl: "./assets/images/products/asterix .png",
      sold_price: 3999,
      regular_price: 4599 ,
      favorite: false,
      origins: ['Gaulois'],
      star: 4.5,   
      },
      {
        id: 2,
        name: "Obélix",
        description: "Obélix est un personnage de fiction créé par Goscinny et Albert Udezo dans la bande dessinée Astérix en 1959. Il est le meilleur ami d'Astérix.",
        imageUrl: "./assets/images/products/Obelix.png",
        sold_price: 3599,
        regular_price: 4599 ,
        favorite: false,
        origins: ['Gaulois'],
        star: 4.5,   
        },
        {
          id: 3,
          name: "Panoramix",
          description: "Panoramix est le principal druide de la bande dessinée Asterix, de René Goscinny et Albert Uderzo.",
          imageUrl: "./assets/images/products/Panoramix.png",
          sold_price: 4150,
          regular_price: 4789,
          favorite: false,
          origins: ['Gaulois'],
          star: 4.3,   
          },
          {
            id: 4,
            name: "Agecanomix",
            description: "Agecanomix est un personnage de fiction. Le doyen de la tribu, Il est la preuve vivante que la potion magique conserve.",
            imageUrl:"./assets/images/products/agecanomix.png",
            sold_price: 3799,
            regular_price: 5199,
            favorite: false,
            origins: ['Gaulois'],
            star: 4.2,  
            },
            {
              id: 5,
              name: "Idéfix",
              description:"Idéfix est un chien de fiction de la bande dessinée Astérix, il s'agit de l'animal de compagnie d'Obélix",
              imageUrl:"./assets/images/products/Idefix.png",
              sold_price: 3499,
              regular_price: 4050,
              favorite: false,
              origins: ['Gaulois'],
              star: 4.4,  
              },
              {
                id: 6,
                name: "Abraracourcix",
                description:"Abaracourcix est un personnage de fiction. Chef du village d'Astérix et Obélix dans la bande dessinée d'Astérix.",
                imageUrl:"./assets/images/products/abraracourcix.png",
                sold_price: 5299,
                regular_price: 5599,
                favorite: false,
                origins: ['Gaulois'],
                star: 4.2,  
                },
                {
                  id: 7,
                  name: "Bonemine",
                  description:"Bonemine est la femme d'Abaracourcix et la soeur d'Homéopatix, elle est blonde, petite et rondelette.",
                  imageUrl:"./assets/images/products/Bonemine.png",
                  sold_price: 3499,
                  regular_price: 4599,
                  favorite: false,
                  origins: ['Gaulois'],
                  star: 4.3,  
                  },
                  {
                    id: 8,
                    name: "Assurancetourix",
                    description:"Assurancetourix est le barde du village d'Astérix et Obélix dans la bande dessinée d'Astérix.",
                    imageUrl:"./assets/images/products/assurancetourix.png",
                    sold_price: 4499,
                    regular_price: 4950,
                    favorite: false,
                    origins: ['Gaulois'],
                    star: 4.5,  
                    },
                    {
                      id: 9,
                      name: "ordralfabétix",
                      description:"Dans Le Domaine des Dieux, il doit faire face à une soudaine floraison de poissonneries. Dans Le Devin, il est le seul à ne pas sentir les odeurs nauséabondes distillés par Panoramix. A bien essayé dans Obélix et Compagnie de se reconvertir dans le menhir frais mais le marché n’était pas assez porteur. Toujours un poisson à la main pour défendre sa profession.",
                      imageUrl:"./assets/images/products/ardralfabelix.png",
                      sold_price: 5299,
                      regular_price: 6850,
                      favorite: false,
                      origins: ['Gaulois'],
                      star: 4.1,  
                      },
                      {
                        id: 10,
                        name: "tragicomix",
                        description: "Depuis sa toute première apparition dans Astérix le Gaulois, sous les yeux ébahis d’un «Caligulaminix» qui le découvre forgeant à main nue, Cétautomatix a beaucoup changé d’aspect, abandonnant les traits d’un gaulois blond et rondouillard pour ceux plus altiers qu’il arbore fièrement sous son légendaire tablier de cuir. Plus que tout autre, il symbolise ainsi le souci de perfection d’Albert Uderzo, qui n’a de cesse d’améliorer les graphismes de ses personnages..",
                        imageUrl:"./assets/images/products/tragicomix.png",
                        sold_price: 5599,
                        regular_price: 6550,
                        favorite: false,
                        origins: ['Gaulois'],
                        star: 4.7,  
                        },
                        {
                          id: 11,
                          name: "cetautomatix",
                          description: "Mélomane averti soucieux de protéger l’ouïe de ses condisciples, expert sanitaire en poissons..",
                          imageUrl:"./assets/images/products/cetautomatix.png",
                          sold_price: 7299,
                          regular_price: 7850,
                          favorite: false,
                          origins: ['Gaulois'],
                          star: 4.4,  
                        },
                        {
                          id: 12,
                          name: "caiusBonus",
                          description: "Caius Bonus est le premier Centurion qui apparaît dans l’Univers d’Astérix et permet aux auteurs de poser les jalons de leur représentation de la hiérarchie romaine",
                          imageUrl:"./assets/images/products/Caus.png",
                          sold_price: 5299,
                          regular_price: 6850,
                          favorite: false,
                          origins: ['Romain'],
                          star: 4.7  
                          }
  
                        
      ];
    
    }
  
}
