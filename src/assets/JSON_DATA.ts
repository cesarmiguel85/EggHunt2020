//Type can be 
//  -  'separate' pour les images en vertical --> on peut mettre autant qu'on veut
//  -  'horizontal' pour un defilement avec fleches horizontales --> on peut mettre autant qu'on veut
//  -  'image360' pour le viseur 360 --> 1 seule image (car on ne peut pas scroller vers le bas (ça tourne l'image 360))


export const jsondata = [
{
  area: "Barcelona: Barri Gotic [Spain]",
  type: 'image360',
  pictures: [{
      url: 'assets/areas/VR_barcelona_barriogotico.jpg',
      default_lat: -0.15,
      default_fov: 38,
      rectangles: [{
        code: 7,
        x: 5151,
        y: 687,
        width: 30,
        height: 40
      },
      {
        code: 8,
        x: 2315,
        y: 1084,
        width: 30,
        height: 40
      },
      {
        code: 9,
        x: 7884,
        y: 797,
        width: 30,
        height: 40
      }]

    }
  ]
},
{
  area: "Barcelona: Sagrada Familia [Spain]",
  type: 'image360',
  pictures: [{
      url: 'assets/areas/VR_arcelona_sagradafamilia.jpg',
      default_lat: -0.1,
      default_fov: 38,
      rectangles: [{
        code: 13,
        x: 2509,
        y: 918,
        width: 30,
        height: 40
      },
      {
        code: 14,
        x: 8312,
        y: 1256,
        width: 30,
        height: 40
      },
      {
        code: 15,
        x: 6436,
        y: 1090,
        width: 30,
        height: 40
      }]

    }
  ]
},
{
  area: "Bruges [Belgium]",
  type: 'image360',
  pictures: [{
      url: 'assets/areas/VR_bruges.jpg',
      default_lat: -0.15,
      default_fov: 38,
      rectangles: [{
        code: 19,
        x: 5514,
        y: 838,
        width: 30,
        height: 40
      },
      {
        code: 20,
        x: 8543,
        y: 1285,
        width: 30,
        height: 40
      },
      {
        code: 21,
        x: 689,
        y: 1238,
        width: 30,
        height: 40
      }]

    }
  ]
},
{
  area: "Ghent [Belgium]",
  type: 'image360',
  pictures: [{
      url: 'assets/areas/VR_ghent.jpg',
      default_lat: 0.2,
      default_fov: 38,
      rectangles: [{
        code: 22,
        x: 3708,
        y: 1392,
        width: 30,
        height: 40
      },
      {
        code: 23,
        x: 404,
        y: 1280,
        width: 30,
        height: 40
      },
      {
        code: 24,
        x: 7064,
        y: 1488,
        width: 40,
        height: 40
      }]

    }
  ]
},
{
  area: "Myra: amphitheatre [Turkey]",
  type: 'image360',
  pictures: [{
      url: 'assets/areas/VR_turkey_amphi_myra.jpg',
      default_lat: 0.2,
      default_fov: 38,
      rectangles: [{
        code: 25,
        x: 4256,
        y: 1242,
        width: 30,
        height: 40
      },
      {
        code: 26,
        x: 6078,
        y: 1405,
        width: 30,
        height: 30
      },
      {
        code: 27,
        x: 2039,
        y: 1440,
        width: 30,
        height: 40
      }]

    }
  ]
},
{
  area: "Verona: theatre [Italy]",
  type: 'image360',
  pictures: [{
      url: 'assets/areas/VR_verona.jpg',
      default_lat: 0.2,
      default_fov: 38,
      rectangles: [{
        code: 28,
        x: 4256,
        y: 1242,
        width: 30,
        height: 40
      },
      {
        code: 29,
        x: 6078,
        y: 1405,
        width: 30,
        height: 30
      },
      {
        code: 30,
        x: 2039,
        y: 1440,
        width: 30,
        height: 40
      }]

    }
  ]
}

];


export const variables = {
  //Si pas de base de données (false), toutes lesoptions sur l'app seront desactivée
  with_db: false,
  dbname: "",
  db_addParticpants: "",
  db_tableRanking: "",
  db_emailCheck: "",
  root: "https://cesarmiguel85.github.io/EggHunt2020",
  shareable: true,

}

export const messages_fr = {

  //PAGE D'ACCUEIL
  home_title: "Bienvenue à la chasse aux oeufs de Pâques",
  home_subtitle: "",
  home_desc: "Ce n'est pas parce que nous sommes confinés que nous ne pouvons pas maintenir l'esprit des activités!\n En prenant plusieurs idées d'ici et de là, profitant d'un side-project personnel avec mon collègue Andres, je vous porpose une chasse aux oeufs de Pâques en mode 'évasion'. J'ai rassemblé les quelques photos 360 de mes derniers voyages (ce ne sont pas forcément celles que j'aurais prises pour ceci, mais je n'avais jamais pensé faire ceci quand je les avais prises). J'ai caché des oeufs dans les images qu'il faudra retrouver.\n\nUne occasion pour nviter à l'évasion et partager avec vous des endroit magnifiques de façon ludique 😉\n(Un merci spécial à Manu qui a pris beaucoup d'entre elles!)",
  //Si usage de Base de données, consentement
  home_disclaimer: "",
  home_type: "",
  home_start: "Démarrer la chasse!",

  //PAGE DES ZONES
  areas_title: "Chasse aux Oeufs de Pâques",
  //Carte de description du jeu
  areas_card_title: "C'est parti!",
  areas_card_desc: "Explorez chaque endroit puis cliquez sur les œufs pour les attraper dès que vous les verrez. \nIls sont colorés et pas trop compliqués à trouver, promis 😉",
  //Message quand tous les oeufs sont trouvés
  areas_checkdone: "Vous avez trouvé tous les oeufs de cet endroit, félicitations!",
  //Message oeufs restants
  areas_remaining: "Oeufs restants: ",

  //PAGE DES IMAGES
  imageviewer_title: "Lieu: ",
  imageviewer_found: "Oeufs: ",
  //Messages lors des click sur les oeufs (ok: nouvel, nok: deja trouvé)
  imageviewer_addegg_ok: "Vous avez trouvé un nouvel oeuf! Good job!",
  imageviewer_addegg_nok: "Vous avez déjà cet oeuf!",

  //PAGE DE FIN DU JEU
  finish_title: "FÉLICITATIONS!",
  finish_card_title: "Vous avez trouvé tous les oeufs!",
  finish_card_content: "J'espère que vous avez apprécié ce jeu et il vous a permis de vous évader ne serait-ce que quelques minutes!\n\nPeut-être vous avez des idées pour les prochaines vacances? 😉",
  finish_cardtime_title: "Voici votre score",
  finish_cardtime_content: "Vous avez terminé ce jeu en ",
  finish_ranking: "",
  finish_cardtime_saving:"",

  finish_share_title: "Partagez votre score sur LinkedIn! 👍🏻",
  finish_share_text1: "",
  finish_share_text2: "",

}


export const messages_en = {

  //PAGE D'ACCUEIL
  home_title: "Welcome to the Easter Egg Hunt",
  home_subtitle: "",
  home_desc: "The confinement should not prevent us from enjoying the essence of some pleasures!\n Borrowing some ideas from here and there, and thanks to a side-project with my colleague Andres, I present to you a virtual Easter Egg Hunt around travel and mind 'evasion'. I have gathered the 360º images from my past travels (they are not the best pictures for this, but I never expected I would use them for this purpose!). I hid some Easter Eggs in the image that you will have to find.\n\n This is an occasion to daydream and share with you some amazing places in a playful way 😉\n(Special thanks to Manu who took most of these pictures!)",
  //Si usage de Base de données, consentement
  home_disclaimer: "",
  home_type: "",
  home_start: "Start the hunt!",

  //PAGE DES ZONES
  areas_title: "Easter Egg Hunt",
  //Carte de description du jeu
  areas_card_title: "Let's go!",
  areas_card_desc: "Explore the places and look for the hidden eggs. Once you find them, click on them to catch them. \n They are colorful and easy to find, I promise 😉",
  //Message quand tous les oeufs sont trouvés
  areas_checkdone: "You found all the eggs in the area, congratulations!",
  //Message oeufs restants
  areas_remaining: "Remaining Eggs: ",

  //PAGE DES IMAGES
  imageviewer_title: "Place: ",
  imageviewer_found: "Eggs: ",
  //Messages lors des click sur les oeufs (ok: nouvel, nok: deja trouvé)
  imageviewer_addegg_ok: "You found a new egg! Good job!",
  imageviewer_addegg_nok: "You already have this one!",

  //PAGE DE FIN DU JEU
  finish_title: "CONGRATULATIONS!",
  finish_card_title: "You found all the hidden Easter eggs!",
  finish_card_content: "I hope you liked this little game and I wish it took your mind off the confinementor a second. \n\n Maybe you found your next holiday destination ? 😉",
  finish_cardtime_title: "This is your score",
  finish_cardtime_content: "You finished the game in ",
  finish_ranking: "",
  finish_cardtime_saving:"",

  finish_share_title: "Share your score and the game on LinkedIn! 👍🏻",
  finish_share_text1: "",
  finish_share_text2: "",

}