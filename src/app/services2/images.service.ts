import { Injectable } from '@angular/core';
import { Articles } from '../models/article';
import { Tag } from '../models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  constructor() { }
  //finding article by id
  getArticleById(id:number):Articles{
    return this.getAll().find(article => article.id == id)!;
  }
  //finding article by tags
  getAllArticleByTag(tag:string):Articles[]{
      return tag=="Toutes"?
      this.getAll(): this.getAll().filter(article => article.tags?.includes(tag))
  }
  getAllTag():Tag[]{
    return [
      { name:'Toutes', count: 22 },
      { name:'Gaulois', count: 19 },
      { name:'Romain', count: 2 },
      { name:'Egyptien', count: 1 },
      { name:'Astérix', count: 4 },
      { name:'Obélix', count: 3 },
      { name:'Idéfix', count: 2 },
    ]
  }
  getAll():Articles[]{
    return[
      {
      id: 1,
      name: "Astérix",
      description: "A défaut de posséder l’impressionnant physique gonflé à l’hélium des héros forts en torse dessinés avant lui par Albert Uderzo, Astérix est le seul anti-héros qui ait jamais autant collectionné les succès et les exploits. Dans ses aventures, bien sûr, où sa ruse légendaire et la précieuse potion magique du druide Panoramix lui ont permis de se tirer des pires difficultés, en se couvrant souvent au passage de gloire.",
      imageUrl: "./assets/images/products/asterix .png",
      sold_price: 3999,
      regular_price: 4599 ,
      favorite: false,
      origins: ['Gaulois'],
      star: 4.5, 
      tags: ['Astérix', 'Gaulois']  
      },
      {
        id: 2,
        name: "Obélix",
        description: "Pas gros, tombé dedans quand il était petit, copain d’Astérix. Bien décidé à faire d’Astérix un anti-héros allant à l’encontre de tous les codes alors établis dans le monde de la BD, René Goscinny ne souhaitait surtout pas donner à son personnage principal un acolyte qui jouerait à ses côtés le rôle classique du faire-valoir.",
        imageUrl: "./assets/images/products/Obelix.png",
        sold_price: 3599,
        regular_price: 4599 ,
        favorite: false,
        origins: ['Gaulois'],
        star: 4.5, 
        tags: ['Obélix', 'Gaulois']    
        },
        {
          id: 3,
          name: "Panoramix",
          description: "Druide, inventeur de potions en tous genres et détenteur de la sagesse gauloise. Dans un village comme celui d’Astérix, peuplé de grands enfants qui ne pensent qu’à paresser, ripailler ou se bagarrer, il fallait bien une figure paternelle, un sage reconnu comme tel pour éviter à la communauté de sombrer dans une joyeuse mais réelle anarchie.",
          imageUrl: "./assets/images/products/Panoramix.png",
          sold_price: 4150,
          regular_price: 4789,
          favorite: false,
          origins: ['Gaulois'],
          star: 4.3, 
          tags: ['Panoramix', 'Gaulois']    
          },
          {
            id: 4,
            name: "Agecanomix",
            description: "Doyen du village. Agecanonix, doyen de la tribu, est la preuve vivante que la potion magique conserve! Agé de 93 ans, déjà vieillard dans «La Naissance d’Astérix», cet ancien de Gergovie (52 avant J.C.) est resté très vert.",
            imageUrl:"./assets/images/products/agecanomix.png",
            sold_price: 3799,
            regular_price: 5199,
            favorite: false,
            origins: ['Gaulois'],
            star: 4.2,  
            tags: ['Agecanomix', 'Gaulois']  
            },
            {
              id: 5,
              name: "Idéfix",
              description:"Agent de protection de l’environnement, guide dans les pyramides. Quel destin pour Idéfix qui n’était au départ, dans le scénario du Tour de Gaule, qu’un «petit chien de race indéterminée» se trouvant incidemment à la porte d’une charcuterie de Lutèce! A partir de cette note sur le scénario de René Goscinny, Albert s’est amusé à glisser, après en avoir parler avec son ami, le petit chien de Lutèce dans les cases suivantes de l’album. C’est la raison pour laquelle le chien ne participe pas directement à l’aventure. Seule la toute dernière vignette voit Obélix se pencher vers ce petit chien, comme pour lui signifier : «bienvenue au village».",
              imageUrl:"./assets/images/products/Idefix.png",
              sold_price: 3499,
              regular_price: 4050,
              favorite: false,
              origins: ['Gaulois'],
              star: 4.4, 
              tags: ['Idéfix', 'Gaulois']  
              },
              {
                id: 6,
                name: "Abraracourcix",
                description:"Chef du «Village des fous» Etre chef, voilà qui vous pose un homme, surtout quand il s’agit de présider aux destinées du seul village gaulois capable de résister encore et toujours aux légions romaines.",
                imageUrl:"./assets/images/products/abraracourcix.png",
                sold_price: 5299,
                regular_price: 5599,
                favorite: false,
                origins: ['Gaulois'],
                star: 4.2,
                tags: ['Abraracourcix', 'Gaulois']    
                },
                {
                  id: 7,
                  name: "Bonemine",
                  description:"Femme du chef du village.Fière d’être la femme du chef. Autoritaire, elle sait se faire entendre. Sous la femme au foyer se cache une véritable meneuse de troupes. Pour un instant, elle sera montée sur le bouclier Arverne en tant que chef du village. Pratique avec brio le rouleau à pâtisserie.",
                  imageUrl:"./assets/images/products/Bonemine.png",
                  sold_price: 3499,
                  regular_price: 4599,
                  favorite: false,
                  origins: ['Gaulois'],
                  star: 4.3,
                  tags: ['Bonemine', 'Gaulois']   
                  },
                  {
                    id: 8,
                    name: "Assurancetourix",
                    description:"Barde à la voix mondialement célèbre (à défaut d’être appréciée…) et instituteur respecté, Assurancetourix est une figure importante du village (il est ainsi membre du Conseil qui condamne Astérix à l’exil dans Astérix et le Chaudron). Pourtant, s’il est connu de tous, c’est surtout en tant qu’éternel souffre-douleur des habitants d’un village dont il est le représentant le plus marginal, vivant à l’écart dans une hutte bâtie au sommet d’un arbre.",
                    imageUrl:"./assets/images/products/assurancetourix.png",
                    sold_price: 4499,
                    regular_price: 4950,
                    favorite: false,
                    origins: ['Gaulois'],
                    star: 4.5, 
                    tags: ['Assurancetourix', 'Gaulois'] 
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
                      tags: ['ordralfabétix', 'Gaulois'] 
                      },
                      {
                        id: 10,
                        name: "tragicomix",
                        description: "Depuis sa toute première apparition dans Astérix le Gaulois, sous les yeux ébahis d’un «Caligulaminix» qui le découvre forgeant à main nue, Cétautomatix a beaucoup changé d’aspect, abandonnant les traits d’un gaulois blond et rondouillard pour ceux plus altiers qu’il arbore fièrement sous son légendaire tablier de cuir. Plus que tout autre, il symbolise ainsi le souci de perfection d’Albert Uderzo, qui n’a de cesse d’améliorer les graphismes de ses personnages.",
                        imageUrl:"./assets/images/products/tragicomix.png",
                        sold_price: 5599,
                        regular_price: 6550,
                        favorite: false,
                        origins: ['Gaulois'],
                        star: 4.7,  
                        tags: ['tragicomix', 'Gaulois'] 
                        },
                        {
                          id: 11,
                          name: "cetautomatix",
                          description: "Mélomane averti soucieux de protéger l’ouïe de ses condisciples, expert sanitaire en poissons. Depuis sa toute première apparition dans Astérix le Gaulois, sous les yeux ébahis d’un «Caligulaminix» qui le découvre forgeant à main nue, Cétautomatix a beaucoup changé d’aspect, abandonnant les traits d’un gaulois blond et rondouillard pour ceux plus altiers qu’il arbore fièrement sous son légendaire tablier de cuir.",
                          imageUrl:"./assets/images/products/cetautomatix.png",
                          sold_price: 7299,
                          regular_price: 7850,
                          favorite: false,
                          origins: ['Gaulois'],
                          star: 4.4,  
                          tags: ['cetautomatix', 'Gaulois'] 
                        },
                        {
                          id: 12,
                          name: "caius Bonus",
                          description: "Caius Bonus est le premier Centurion qui apparaît dans l’Univers d’Astérix et permet aux auteurs de poser les jalons de leur représentation de la hiérarchie romaine",
                          imageUrl:"./assets/images/products/Caus.png",
                          sold_price: 5299,
                          regular_price: 6850,
                          favorite: false,
                          origins: ['Romain'],
                          star: 4.7,
                          tags: ['caius Bonus', 'Romain']   
                          },
                          {
                            id: 13,
                            name: "Astérix",
                            description: "A défaut de posséder l’impressionnant physique gonflé à l’hélium des héros forts en torse dessinés avant lui par Albert Uderzo, Astérix est le seul anti-héros qui ait jamais autant collectionné les succès et les exploits. Dans ses aventures, bien sûr, où sa ruse légendaire et la précieuse potion magique du druide Panoramix lui ont permis de se tirer des pires difficultés, en se couvrant souvent au passage de gloire.",
                            imageUrl: "./assets/images/products/ast.jpg",
                            sold_price: 4999,
                            regular_price: 5599 ,
                            favorite: false,
                            origins: ['Gaulois'],
                            star: 4.5,   
                            tags: ['Astérix', 'Gaulois']  
                            },
                            {
                              id: 14,
                              name: "Astérix",
                              description: "A défaut de posséder l’impressionnant physique gonflé à l’hélium des héros forts en torse dessinés avant lui par Albert Uderzo, Astérix est le seul anti-héros qui ait jamais autant collectionné les succès et les exploits. Dans ses aventures, bien sûr, où sa ruse légendaire et la précieuse potion magique du druide Panoramix lui ont permis de se tirer des pires difficultés, en se couvrant souvent au passage de gloire.",
                              imageUrl: "./assets/images/products/ast2.jpg",
                              sold_price: 4699,
                              regular_price: 5599 ,
                              favorite: false,
                              origins: ['Gaulois'],
                              star: 4.5, 
                              tags: ['Astérix', 'Gaulois']    
                              },
                              {
                                id: 15,
                                name: "Astérix",
                                description: "A défaut de posséder l’impressionnant physique gonflé à l’hélium des héros forts en torse dessinés avant lui par Albert Uderzo, Astérix est le seul anti-héros qui ait jamais autant collectionné les succès et les exploits. Dans ses aventures, bien sûr, où sa ruse légendaire et la précieuse potion magique du druide Panoramix lui ont permis de se tirer des pires difficultés, en se couvrant souvent au passage de gloire.",
                                imageUrl: "./assets/images/products/ast3.jpg",
                                sold_price: 6599,
                                regular_price: 7199 ,
                                favorite: false,
                                origins: ['Gaulois'],
                                star: 4.5,   
                                tags: ['Astérix', 'Gaulois']  
                                },
                            {
                              id: 16,
                              name: "Obélix",
                              description: "Pas gros, tombé dedans quand il était petit, copain d’Astérix. Bien décidé à faire d’Astérix un anti-héros allant à l’encontre de tous les codes alors établis dans le monde de la BD, René Goscinny ne souhaitait surtout pas donner à son personnage principal un acolyte qui jouerait à ses côtés le rôle classique du faire-valoir.",
                              imageUrl: "./assets/images/products/obe.jpg",
                              sold_price: 4799,
                              regular_price: 5599 ,
                              favorite: false,
                              origins: ['Gaulois'],
                              star: 4.5,  
                              tags: ['Obélix', 'Gaulois']   
                              },
                              {
                                id: 17,
                                name: "Obélix",
                                description: "Pas gros, tombé dedans quand il était petit, copain d’Astérix. Bien décidé à faire d’Astérix un anti-héros allant à l’encontre de tous les codes alors établis dans le monde de la BD, René Goscinny ne souhaitait surtout pas donner à son personnage principal un acolyte qui jouerait à ses côtés le rôle classique du faire-valoir.",
                                imageUrl: "./assets/images/products/obe2.jpg",
                                sold_price: 4699,
                                regular_price: 5399 ,
                                favorite: false,
                                origins: ['Gaulois'],
                                star: 4.5, 
                                tags: ['Obélix', 'Gaulois']   
                                },
                                {
                                  id: 18,
                                  name: "Idéfix",
                                  description:"Agent de protection de l’environnement, guide dans les pyramides. Quel destin pour Idéfix qui n’était au départ, dans le scénario du Tour de Gaule, qu’un «petit chien de race indéterminée» se trouvant incidemment à la porte d’une charcuterie de Lutèce! A partir de cette note sur le scénario de René Goscinny, Albert s’est amusé à glisser, après en avoir parler avec son ami, le petit chien de Lutèce dans les cases suivantes de l’album. C’est la raison pour laquelle le chien ne participe pas directement à l’aventure. Seule la toute dernière vignette voit Obélix se pencher vers ce petit chien, comme pour lui signifier : «bienvenue au village».",
                                  imageUrl:"./assets/images/products/ide.jpg",
                                  sold_price: 3799,
                                  regular_price: 4250,
                                  favorite: false,
                                  origins: ['Gaulois'],
                                  star: 4.4,  
                                  tags: ['Idéfix', 'Gaulois'] 
                                  },
                                  {
                                    id: 19,
                                    name: "Jules César",
                                    description:"Général en chef craint et respecté pour les uns, Jules César, reconnaissable entre tous par le physique de statue que lui a donné Albert Uderzo, fait figure de personnage à part dans les aventures d’Astérix. Il faut dire que les créateurs d’Astérix ont bien pris soin de ne pas traiter de façon caricaturale cette figure historique dont les «Commentaires sur la guerre des Gaules» ont été pour eux une importante source d’inspiration.",
                                    imageUrl:"./assets/images/products/cesar.jpg",
                                    sold_price: 7499,
                                    regular_price: 8050,
                                    favorite: false,
                                    origins: ['Romain'],
                                    star: 4.9,  
                                    tags: ['Jules César', 'Romain'] 
                                    },
                                    {
                                      id: 20,
                                      name: "Cléopâtre",
                                      description:"A la fois colérique (ses vases en savent quelque chose), magnanime (elle sait reconnaître ses erreurs et gracier nos Gaulois préférés après les avoir jetés au cachot sur un malentendu), loyale, autoritaire, mais aussi sublimement belle, ou encore moqueuse avec César…",
                                      imageUrl:"./assets/images/products/cleopatre.jpg",
                                      sold_price: 6499,
                                      regular_price: 7550,
                                      favorite: false,
                                      origins: ['Egyptienne'],
                                      star: 4.9, 
                                      tags: ['Cléopâtre', 'Egyptien']  
                                      },
                                      {
                                        id: 21,
                                        name: "Abraracourcix",
                                        description:"Chef du «Village des fous» Etre chef, voilà qui vous pose un homme, surtout quand il s’agit de présider aux destinées du seul village gaulois capable de résister encore et toujours aux légions romaines.",
                                        imageUrl:"./assets/images/products/abra.jpg",
                                        sold_price: 5799,
                                        regular_price: 6599,
                                        favorite: false,
                                        origins: ['Gaulois'],
                                        star: 4.2,  
                                        tags: ['Abraracourcix', 'Gaulois'] 
                                        },
                                        {
                                          id: 22,
                                          name: "Panoramix",
                                          description: "Druide, inventeur de potions en tous genres et détenteur de la sagesse gauloise. Dans un village comme celui d’Astérix, peuplé de grands enfants qui ne pensent qu’à paresser, ripailler ou se bagarrer, il fallait bien une figure paternelle, un sage reconnu comme tel pour éviter à la communauté de sombrer dans une joyeuse mais réelle anarchie.",
                                          imageUrl: "./assets/images/products/pano.jpg",
                                          sold_price: 4850,
                                          regular_price: 5789,
                                          favorite: false,
                                          origins: ['Gaulois'],
                                          star: 4.3,   
                                          tags: ['Panoramix', 'Gaulois'] 
                                          },
  
                        
      ];
    
    }
  
}
