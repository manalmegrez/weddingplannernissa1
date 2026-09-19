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
  {id:"voiture",name:"Location de voitures & Cheval",icon:"🚘",description:"Voitures pour cortège et transport des mariés."},
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

  // =====================================================
  // 📍 SÉTIF
  // =====================================================

  // 💄 Beauté
  {id:20,wilaya:"Sétif",category:"beaute",name:"Maison Beauté Sétif",rating:4.8,reviews:31,address:"Sétif",phone:"+213 555 00 00 07",social:"Facebook",description:"Beauté et préparation de la mariée. Données de démonstration."},


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
