//Type can be 
//  -  'separate' pour les images en vertical --> on peut mettre autant qu'on veut
//  -  'horizontal' pour un defilement avec fleches horizontales --> on peut mettre autant qu'on veut
//  -  'image360' pour le viseur 360 --> 1 seule image (car on ne peut pas scroller vers le bas (ça tourne l'image 360))


export const jsondata = [{
    area: "Lobby / Welcome",
    type: 'image360',
    pictures: [{
        url: 'assets/areas/VR_lobby2.jpg',
        rectangles: [{
          code: 1,
          x: 6235,
          y: 866,
          width: 20,
          height: 20
        },
        {
          code: 2,
          x: 7491,
          y: 863,
          width: 20,
          height: 20
        },
        {
          code: 3,
          x: 2802,
          y: 831,
          width: 20,
          height: 20
        }]

      }
    ]
  },
  {
    area: "Frame",
    type: 'image360',
    pictures: [{
        url: 'assets/areas/VR_frame2.jpg',
        rectangles: [{
          code: 7,
          x: 6235,
          y: 866,
          width: 20,
          height: 20
        },
        {
          code: 8,
          x: 7491,
          y: 863,
          width: 20,
          height: 20
        },
        {
          code: 9,
          x: 2802,
          y: 831,
          width: 20,
          height: 20
        }]

      }
    ]
  },
  {
    area: "Saint Germain",
    type: 'image360',
    pictures: [{
        url: 'assets/areas/VR_stgermain.jpg',
        rectangles: [{
          code: 13,
          x: 6235,
          y: 866,
          width: 20,
          height: 20
        },
        {
          code: 14,
          x: 7491,
          y: 863,
          width: 20,
          height: 20
        },
        {
          code: 15,
          x: 2802,
          y: 831,
          width: 20,
          height: 20
        }]

      }
    ]
  },
  {
    area: "Suite Eiffel",
    type: 'image360',
    pictures: [{
        url: 'assets/areas/VR_suite.jpg',
        rectangles: [{
          code: 19,
          x: 6235,
          y: 866,
          width: 20,
          height: 20
        },
        {
          code: 20,
          x: 7491,
          y: 863,
          width: 20,
          height: 20
        },
        {
          code: 21,
          x: 2802,
          y: 831,
          width: 20,
          height: 20
        }]

      }
    ]
  },
  {
    area: "Salon Trocadero",
    type: 'image360',
    pictures: [{
        url: 'assets/areas/VR_trocadero.jpg',
        rectangles: [{
          code: 22,
          x: 6235,
          y: 866,
          width: 20,
          height: 20
        },
        {
          code: 23,
          x: 7491,
          y: 863,
          width: 20,
          height: 20
        },
        {
          code: 24,
          x: 2802,
          y: 831,
          width: 20,
          height: 20
        }]

      }
    ]
  },
  {
    area: "Potager",
    type: 'image360',
    pictures: [{
        url: 'assets/areas/VR_potager.jpg',
        rectangles: [{
          code: 16,
          x: 6235,
          y: 866,
          width: 20,
          height: 20
        },
        {
          code: 17,
          x: 7491,
          y: 863,
          width: 20,
          height: 20
        },
        {
          code: 18,
          x: 2802,
          y: 831,
          width: 20,
          height: 20
        }]

      }
    ]
  }
];


export const variables = {
  //Si pas de base de données (false), toutes lesoptions sur l'app seront desactivée
  with_db: true,
  dbname: "eggHunt_PullmanTE",
  db_addParticpants: "https://cesarmiguel.duckdns.org/API/addParticipant.php",
  db_tableRanking: "https://cesarmiguel.duckdns.org/API/tableRanking.php",
  db_emailCheck: "https://cesarmiguel.duckdns.org/API/emailExist.php",
  root: "https://cesarmiguel85.github.io/WebEasterEggHunt",
  shareable: true,

}

export const messages = {

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
  areas_card_desc: "Explorez chaque endroit puis cliquez sur l’œuf pour l'attraper dès que vous le verrez.",
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
  finish_card_content: "J'espère que vous avez apprécié ce jeu et il vous a permis de vous évader ne serait-ce que quelques minutes!\n\nPeut-être vous avez des idées pour les prochains voyages? &#128521;",
  finish_cardtime_title: "Voici votre score",
  finish_cardtime_content: "Vous avez terminé ce jeu en ",
  finish_ranking: "",

  finish_share_title: "Partagez votre score sur LinkedIn! &#128077;",
  finish_share_text1: "",
  finish_share_text2: "",

  ranking_title: "",
  ranking_card_title: "",
  ranking_card_content: "",
}