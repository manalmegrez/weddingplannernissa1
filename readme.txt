WEDDING PLANNER ALGERIA
========================

Version : prototype catalogue autonome
Technologies : HTML5 / CSS3 / JavaScript vanilla

STRUCTURE
---------
index.html          page principale
css/style.css       design responsive
js/data.js          58 wilayas, catégories et données de démonstration
js/app.js           recherche, filtres, fiches prestataires
images/             dossier prévu pour vos photos
README.txt          ce fichier

INSTALLATION
------------
1. Décompressez le ZIP.
2. Ouvrez le dossier dans VS Code.
3. Double-cliquez sur index.html, ou utilisez l'extension "Live Server".
4. Choisissez une wilaya puis une catégorie.

IMPORTANT
---------
Les prestataires présents dans js/data.js sont des EXEMPLES DE DÉMONSTRATION.
Ils ne doivent pas être présentés comme des prestataires réellement vérifiés.

POUR AJOUTER UN PRESTATAIRE
---------------------------
Dans js/data.js, ajoutez un objet dans DEMO_PROVIDERS, par exemple :

{
  id: 20,
  wilaya: "Tlemcen",
  category: "photo",
  name: "Nom du prestataire",
  rating: 4.8,
  reviews: 25,
  address: "Adresse",
  phone: "+213 ...",
  social: "Instagram",
  description: "Description"
}

Catégories disponibles :
photo, salle, beaute, tenue, voiture, traiteur, deco, dj

ÉVOLUTION VERS UNE VRAIE APPLICATION
-------------------------------------
Pour une version professionnelle, il faudra ajouter :
- une base de données PostgreSQL/MySQL/SQLite
- un espace administrateur
- ajout/modification/suppression des prestataires
- upload des photos
- vrais liens Instagram/Facebook
- système d'avis
- vérification des prestataires
- recherche par wilaya + catégorie
- éventuellement réservation/contact WhatsApp

Les 58 wilayas incluses correspondent à la liste utilisée dans ce prototype.
