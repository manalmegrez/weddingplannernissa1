const WILAYAS = [
  "Adrar",
  "Aïn Defla",
  "Aïn Témouchent",
  "Alger",
  "Annaba",
  "Batna",
  "Béchar",
  "Béjaïa",
  "Béni Abbès",
  "Biskra",
  "Blida",
  "Bordj Badji Mokhtar",
  "Bordj Bou Arréridj",
  "Bouira",
  "Boumerdès",
  "Chlef",
  "Constantine",
  "Djanet",
  "Djelfa",
  "El Bayadh",
  "El Menia",
  "El M'Ghair",
  "El Oued",
  "El Tarf",
  "Ghardaïa",
  "Guelma",
  "Illizi",
  "In Guezzam",
  "In Salah",
  "Jijel",
  "Khenchela",
  "Laghouat",
  "Mascara",
  "Médéa",
  "Mila",
  "Mostaganem",
  "M'Sila",
  "Naâma",
  "Oran",
  "Ouargla",
  "Ouled Djellal",
  "Oum El Bouaghi",
  "Relizane",
  "Saïda",
  "Sétif",
  "Sidi Bel Abbès",
  "Skikda",
  "Souk Ahras",
  "Tamanrasset",
  "Tébessa",
  "Tiaret",
  "Timimoun",
  "Tindouf",
  "Tipaza",
  "Tissemsilt",
  "Tizi Ouzou",
  "Tlemcen",
  "Touggourt"
];

const CATEGORIES = [
  {id:"photo",name:"Photographie & Vidéo",icon:"📷",description:"Photos, vidéos et souvenirs de votre mariage."},
  {id:"salle",name:"Salles des fêtes",icon:"🏛️",description:"Salles et espaces pour célébrer votre grand jour."},
  {id:"beaute",name:"Coiffure & Maquillage",icon:"💄",description:"Coiffeuses, maquilleuses et beauté de la mariée."},
  {id:"tenue",name:"Location de tenues",icon:"👗",description:"Robes, caftans, karakous et tenues traditionnelles."},
  {id:"voiture",name:"Location des voitures & Chevaux",icon:"🚘",description:"Voitures pour cortège et transport des mariés."},
  {id:"traiteur",name:"Traiteur & Gâteaux",icon:"🍰",description:"Menus, pâtisseries et gâteaux de mariage."},
  {id:"deco",name:"Décoration florale",icon:"🌸",description:"Décoration, fleurs, tables et ambiance."},
  {id:"dj",name:"DJ & Animation",icon:"🎶",description:"DJ, musique, animation et sonorisation."}
];

const DEMO_PROVIDERS = [
 

  // =====================================================
  // 📍 TLEMCEN
  // =====================================================

  // 📸 Photographie & Vidéo
  {id:1,wilaya:"Tlemcen",category:"photo",name:"Studio Mariage Tlemcen",rating:4.8,reviews:42,address:"Tlemcen",phone:"+213 555 00 00 01",social:"Instagram",description:"Photographie et vidéo de mariage. Exemple de fiche de démonstration."},

  {id:2,wilaya:"Tlemcen",category:"photo",name:"CHOAYB Lab Photo",rating:4.7,reviews:7,address:"Mansourah, Tlemcen",phone:"+213 560 00 00 58",social:"",description:"Studio de photographie proposant des services de photographie, notamment pour les mariages."},

  {id:3,wilaya:"Tlemcen",category:"photo",name:"Studio Benabadji",rating:4.5,reviews:10,address:"Tlemcen",phone:"+213 661652519",social:"studio_benabadji",description:"Photographe spécialisé dans les reportages de mariage et les événements."},

  {id:4,wilaya:"Tlemcen",category:"photo",name:"Sisters Wedding Photography",rating:4.5,reviews:null,address:"Tlemcen / Algérie",phone:"+2130555838240",social:"sisters_wedding_photography",description:"Sister Wedding Photography, spécialisée dans la photographie professionnelle et événementielle."},
   {id:4,wilaya:"Tlemcen",category:"photo",name:"Studio MAGDEV",rating:4.5,reviews:12,address:"Meghnia ,Tlemcen / Algérie",phone:"+2130555838240",social:"sisters_wedding_photography",description:"Sister Wedding Photography, spécialisée dans la photographie professionnelle et événementielle."},
  // 🏛️ Salles des fêtes
  {id:23,wilaya:"Meghnia",category:"salle",name:"Salle des Fêtes Mansouri",rating:4,reviews:null,address:"meghnia",phone:"+213563472610",social:"Instagram/salle_des_fetes_mansouri",description:"Salle des fêtes destinée à l'organisation de mariages et événements."},
  {id:5,wilaya:"Tlemcen",category:"salle",name:"Belle Salle Tlemcen",rating:4.7,reviews:35,address:"Tlemcen",phone:"+213 555 00 00 02",social:"Facebook",description:"Salle de fêtes. Exemple de fiche de démonstration."},

  {id:6,wilaya:"Tlemcen",category:"salle",name:"Salle des Fêtes Afrah Tlemcen",rating:4.0,reviews:46,address:"Tlemcen",phone:"",social:"",description:"Salle des fêtes située à Tlemcen."},

  {id:7,wilaya:"Tlemcen",category:"salle",name:"Salle des fêtes Royal Afrah",rating:4.2,reviews:9,address:"Rue Ibn Khaldoun, Tlemcen",phone:"+213 550 61 06 53",social:"",description:"Salle des fêtes située à Tlemcen."},

  // 💄 Beauté
  {id:8,wilaya:"Tlemcen",category:"beaute",name:"Beauty Bride Tlemcen",rating:4.9,reviews:51,address:"Tlemcen",phone:"+213 555 00 00 03",social:"Instagram",description:"Coiffure et maquillage de mariée. Exemple de fiche de démonstration."},

  // 👗 Tenues
  {id:9,wilaya:"Tlemcen",category:"tenue",name:"Maison des Tenues",rating:4.6,reviews:27,address:"Tlemcen",phone:"+213 555 00 00 04",social:"Instagram",description:"Location de tenues traditionnelles. Exemple de fiche de démonstration."},

  {id:10,wilaya:"Tlemcen",category:"tenue",name:"دار زهرة للأزياء",rating:5.0,reviews:1,address:"Tlemcen",phone:"",social:"",description:"Boutique de tenues située à Tlemcen, référencée comme prestataire de mariage et vérifiée sur Silla."},

  {id:11,wilaya:"Tlemcen",category:"tenue",name:"Location de costumes Tlemcen",rating:5.0,reviews:6,address:"Tlemcen",phone:"+213 672 51 73 45",social:"",description:"Service de location de costumes à Tlemcen."},

  {id:12,wilaya:"Tlemcen",category:"tenue",name:"Location costume Tlemcen",rating:null,reviews:null,address:"Cité El Hanaa Les 400, Mansourah, Tlemcen",phone:"+213 790 88 32 56",social:"",description:"Service de location de costumes situé à Mansourah, Tlemcen."},


  // =====================================================
  // 📍 MAGHNIA
  // =====================================================

  // 📸 Photographie & Vidéo
  {id:26,wilaya:"Tlemcen",category:"photo",name:"ABH Studio",rating:null,reviews:null,address:"Tlemcen",phone:"",social:"Instagram",description:"Studio spécialisé dans la photographie et la vidéo de mariage et d'événements."},
  {id:13,wilaya:"Maghnia",category:"photo",name:"Studio Photographe Z.Yassin Maghnia",rating:null,reviews:null,address:"Maghnia, Tlemcen",phone:"+213 771 66 68 63",social:"",description:"Studio de photographie pour mariages, fiançailles, anniversaires et autres événements."},
  //decoration 
   
  {id:24,wilaya:"Tlemcen",category:"decoration",name:"Afrah Ritadj",rating:4,reviews:null,address:"Maghnia, Tlemcen",phone:"+213 770 62 52 30",social:"facebook: افراح رتاج",description:"Groupe spécialisé dans la décoration de mariages et événements à Maghnia."},
   //Cuisine
  {id:25,wilaya:"Tlemcen",category:"traiteur",name:"Emy Pastry Cake Wedding",rating:null,reviews:null,address:"Meghnia Tlemcen",phone:"+2130782610008",social:"Instagram :Emy's Pastry",description:"Prestataire spécialisé dans les gâteaux et créations pâtissières pour mariages et événements."},
   {id:27,wilaya:"Tlemcen",category:"traiteur",name:"Chahrazed Bou",rating:null,reviews:null,address:"Tlemcen",phone:"/",social:"Instagram / Facebook :Chahrazed Bou ",description:"Service traiteur spécialisé dans la préparation et l'organisation de prestations culinaires pour mariages et événements."},
  // =====================================================
  // 📍 ORAN
  // =====================================================

  // 📸 Photographie & Vidéo
  {id:14,wilaya:"Oran",category:"photo",name:"Studio Élégance Oran",rating:4.8,reviews:67,address:"Oran",phone:"+213 555 00 00 05",social:"Instagram",description:"Photographie et vidéo de mariage. Données de démonstration."},

  // 🏛️ Salles des fêtes
  {id:15,wilaya:"Oran",category:"salle",name:"قاعة الياسمين",rating:4.0,reviews:1,address:"Oran",phone:"",social:"",description:"Salle des fêtes référencée comme prestataire de mariage à Oran."},

  // 💄 Beauté
  // Ajouter ici les prestataires beauté vérifiés d'Oran.

  // 👗 Tenues
  {id:16,wilaya:"Oran",category:"tenue",name:"بوتيك لينا",rating:4.0,reviews:1,address:"Oran",phone:"",social:"",description:"Boutique de tenues référencée comme prestataire de mariage à Oran."},
  //location des voitures 
  {id:28,wilaya:"Tlemcen",category:"voiture",name:"YADI CAR Tlemcen",rating:4.8,reviews:584,address:"28 Rue Aïn Nedjar, Bd Pasteur, Tlemcen 13000",phone:"+213 661 28 75 11",social:"",description:"Agence de location de voitures à Tlemcen. Location de véhicules pour déplacements et événements."},
//location
{id:29,wilaya:"Oran",category:"voiture",name:"YadiCar car rental Oran",rating:4.8,reviews:322,address:"Rue Med Khemisti, Oran",phone:"+213 540 03 05 43",social:"",description:"Agence de location de voitures à Oran."},
{id:30,wilaya:"Oran",category:"voiture",name:"LOCAFLEX",rating:5.0,reviews:34,address:"Oran",phone:"+213 560 16 38 23",social:"",description:"Agence de location de voitures à Oran."},
{id:31,wilaya:"Oran",category:"voiture",name:"Go Oran Location",rating:4.7,reviews:40,address:"Oran",phone:"+213 549 01 25 36",social:"",description:"Service de location de voitures à Oran."},
{id:32,wilaya:"Oran",category:"voiture",name:"Location voiture Oran Didano",rating:4.5,reviews:177,address:"Rue Ouahouah Madani, Oran",phone:"+213 770 36 64 05",social:"",description:"Agence de location de voitures à Oran."},
{id:42,wilaya:"Oran",category:"decoration",name:"Sweet Event's",rating:null,reviews:null,address:"28 Hai Emir AEK Traverssa, Bir El Djir, Oran",phone:"",social:"",description:"Décoration de mariage avec bouquets de fleurs, décoration de salle, voiture des mariés, centres de table, scène et accessoires de réception."},
{id:43,wilaya:"Oran",category:"decoration",name:"Bilo Fleuriste",rating:null,reviews:null,address:"Oran",phone:"",social:"",description:"Décoration florale pour événements, bouquets, voiture des mariés et décoration de salle."},
{id:44,wilaya:"Oran",category:"decoration",name:"Narcisse",rating:null,reviews:null,address:"Oran",phone:"",social:"",description:"Prestataire de décoration florale et bouquets pour événements et mariages."},
{id:45,wilaya:"Oran",category:"decoration",name:"Lina Planner",rating:null,reviews:null,address:"Oran",phone:"",social:"",description:"Décoration de mariage avec bouquets, décoration de voiture des mariés et décoration de salle."},
{id:46,wilaya:"Oran",category:"fleur",name:"Fleuriste C' Tout Vert",rating:4.8,reviews:50,address:"Bir El Djir, Oran",phone:"+213 784 42 81 69",social:"",description:"Fleuriste à Bir El Djir proposant des compositions et services floraux."},
{id:47,wilaya:"Oran",category:"fleur",name:"Fleuriste 31",rating:5.0,reviews:28,address:"Oran",phone:"+213 781 55 46 82",social:"",description:"Fleuriste à Oran."},
{id:48,wilaya:"Oran",category:"gateau",name:"MANGO DZ",rating:null,reviews:null,address:"32 Rue Commandant Ferradj, Aïn El Turk, Oran",phone:"+213 540 73 57 43",social:"Instagram @mango._.dz",description:"Cake design, wedding cakes, layer cakes, pièces montées et gâteaux traditionnels personnalisés pour mariages et événements."},
{id:49,wilaya:"Oran",category:"gateau",name:"benammar cake boutique",rating:4.4,reviews:49,address:"Résidence Hasnaoui, Oran",phone:"+213 541 46 92 07",social:"",description:"Pâtisserie et créations sucrées à Oran."},
{id:50,wilaya:"Oran",category:"gateau",name:"LA ROSE SUCRÉE ORAN",rating:4.6,reviews:7,address:"Bir El Djir, Oran",phone:"+213 542 49 50 68",social:"",description:"Pâtisserie et créations sucrées à Bir El Djir."},
  // =====================================================
  // 📍 ALGER
  // =====================================================

  // 📸 Photographie & Vidéo
  {id:17,wilaya:"Alger",category:"photo",name:"استوديو فيجن",rating:4.5,reviews:2,address:"Alger",phone:"",social:"",description:"Studio de photographie référencé comme prestataire de mariage à Alger."},

  // 🏛️ Salles des fêtes
  {id:18,wilaya:"Alger",category:"salle",name:"Espace Prestige Alger",rating:4.7,reviews:84,address:"Alger",phone:"+213 555 00 00 06",social:"Instagram",description:"Espace événementiel. Données de démonstration."},

  // 💄 Beauté
  {id:19,wilaya:"Alger",category:"beaute",name:"صالون وردة",rating:4.7,reviews:3,address:"Alger",phone:"",social:"",description:"Salon de beauté référencé comme prestataire de mariage à Alger."},
  {id:22,wilaya:"Alger",category:"tenue",name:"Machta de Luxe",rating:4.4,reviews:32,address:"Café Chergui, en face de la station du tramway, 1er étage, Bordj El Bahri, Alger",phone:"+213 561 30 72 27 / +213 557 47 09 72",social:"Facebook / Instagram",description:"Location de robes traditionnelles et robes blanches, service d'habilleuse professionnelle, bijoux de luxe, retouches maquillage et coiffure, ainsi que repassage et entretien des tenues."},
   //location
   {id:33,wilaya:"Alger",category:"voiture",name:"ARC Location de voiture Aéroport Alger",rating:4.7,reviews:206,address:"12 Cité des Martyrs, Dar El Beïda, Alger",phone:"+213 561 54 28 38",social:"",description:"Agence de location de voitures avec service à l'aéroport d'Alger."},
   {id:34,wilaya:"Alger",category:"voiture",name:"Safar El Amir",rating:4.8,reviews:573,address:"Entrée du centre commercial City Center, Les Bananiers, Alger",phone:"+213 560 65 93 09",social:"",description:"Agence de location de voitures à Alger avec prise en charge possible à l'aéroport Houari Boumédiène."},
    {id:51,wilaya:"Alger",category:"decoration",name:"Zhor Event",rating:null,reviews:null,address:"Alger",phone:"",social:"",description:"Décoration de mariage, créations florales, art de la table et mises en scène personnalisées."},
{id:52,wilaya:"Alger",category:"decoration",name:"Frahkoum",rating:null,reviews:null,address:"Sidi M'Hamed, Alger",phone:"",social:"",description:"Prestataire événementiel proposant bouquets de fleurs et décoration de salle."},
{id:53,wilaya:"Alger",category:"decoration",name:"ZT Events",rating:null,reviews:null,address:"Bouzareah, Alger",phone:"",social:"",description:"Organisation d'événements avec décoration de salle, bouquets et décoration de voiture des mariés."},
{id:54,wilaya:"Alger",category:"gateau",name:"Sofi's Cake Design",rating:4.0,reviews:4,address:"Djasr Kasentina, Alger",phone:"+213 792 94 90 80",social:"",description:"Cake design et pâtisserie, avec service de wedding bakery."},
{id:55,wilaya:"Alger",category:"gateau",name:"حلويات ومرطبات",rating:4.2,reviews:54,address:"Cité Braïdia, Réghaïa, Alger",phone:"+213 551 09 90 35",social:"",description:"Pâtisserie et wedding bakery à Réghaïa."},
{id:56,wilaya:"Alger",category:"gateau",name:"Coin d'Alma",rating:4.4,reviews:122,address:"21 Rue Ahmed Ouaked, Dely Ibrahim, Alger",phone:"+213 783 00 63 71",social:"",description:"Pâtisserie proposant des créations sucrées et desserts à Dely Ibrahim."},
  // =====================================================
  // 📍 SÉTIF
  // =====================================================

  // 💄 Beauté
  {id:20,wilaya:"Sétif",category:"beaute",name:"Maison Beauté Sétif",rating:4.8,reviews:31,address:"Sétif",phone:"+213 555 00 00 07",social:"Facebook",description:"Beauté et préparation de la mariée. Données de démonstration."},
  {id:35,wilaya:"Sétif",category:"voiture",name:"Location de voitures 2AY",rating:4.8,reviews:113,address:"Travaux El-Maabouda, Sétif",phone:"+213 541 85 66 51",social:"",description:"Agence de location de voitures située à Sétif."},
  {id:36,wilaya:"Sétif",category:"voiture",name:"Location voiture Sétif YACINE Guettaf",rating:4.3,reviews:23,address:"Sétif",phone:"+213 671 28 08 91",social:"",description:"Service de location de voitures à Sétif."},
  {id:39,wilaya:"Sétif",category:"beaute",name:"Coiffeuse Maria",rating:4.5,reviews:2,address:"Sétif",phone:"+213 772 71 06 52",social:"",description:"Salon de coiffure et beauté à Sétif."},
{id:40,wilaya:"Sétif",category:"beaute",name:"صالون بيرلا",rating:4.0,reviews:1,address:"Sétif",phone:"",social:"",description:"Salon de beauté référencé comme prestataire mariage à Sétif."},
{id:41,wilaya:"Sétif",category:"beaute",name:"Maabouda",rating:4.7,reviews:3,address:"Maabouda, Sétif",phone:"",social:"",description:"Salon de coiffure et beauté à Sétif, notamment pour la préparation et la coiffure des occasions spéciales."},

  // =====================================================
  // 📍 CONSTANTINE
  // =====================================================

  // 🍰 Traiteur
  {id:21,wilaya:"Constantine",category:"traiteur",name:"Saveurs Mariage Constantine",rating:4.6,reviews:48,address:"Constantine",phone:"+213 555 00 00 08",social:"Instagram",description:"Traiteur et pâtisserie. Données de démonstration."}


];

const SAMPLE_REVIEWS = [
  {author:"Cliente",rating:5,comment:"Très belle expérience. Exemple d'avis pour la démonstration."},
  {author:"Cliente",rating:4,comment:"Prestataire à découvrir et à contacter pour vérifier les disponibilités."}
];
