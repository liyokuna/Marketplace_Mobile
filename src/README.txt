IHM et Application Mobile

Marketplace est une application mobile développé en utilisant le framework Ionic.
Le but est de concevoir une application mobile cross-platform consistant  
à mettre en place une plateforme de vente des bons par les vendeurs des magasins, 
ajout des bons dans le panier par les utilisateurs et l'échange de ce dernier 
entre eux.

Cependant, tout au cours du projet, nous avons rencontré des difficultés. 
Nous avons perdu du temps dans l'installation des dépendances permettant à Ionic de marcher,
ensuite l'implémentation de la base de donnée s'est fait côté client, d'après le tutoriel
que nous avons suivi, mais Chrome, ni Mozilla ne supporte aucune base de donnée.
De ce fait, notre projet est statique.

Ainsi l'architecutre de notre projet est le suivant:

|src
	|app
	|assets
			|img
			|icon
	|pages
			|bienvenue
			|bon
			|connection
			|deconnexion
			|enregistrer
			|home
			|marcher
			|panier
			|parametre

Nous avons réalisé que les pages front-end concernant l'utilisateur.
Il s'agit d'ajouter un bon dans son panier, de l'échanger avec d'autre bon et de se déconnecter.

Vous trouver ainsi dans ce dossier les codes sources de notre réalisation, les dépendances utilisées 
et un fichier script bash.
