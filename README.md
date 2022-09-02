# Projet VDD MJEMAI-2022
                                                Visualisation surmortalité 2020 en Suisse  



Ce projet entre dans le cadre de la validation des crédits relatif au cours de Visualisation de données, dispensé par Monsieur Issac Pante, maître d'enseignement et de recherche en culture et édition numérique à la Faculté des lettres de l'université de Lausanne.
________________________________________
Descriptif


La majorité des décès se répartissent entre un nombre restreint de causes : maladies cardiovasculaires, cancers, maladies de l’appareil respiratoire, accidents, actes de violence et démence. Depuis le début de la pandémie de SARS-CoV-2, des phases de surmortalité notable a été enregistrée en Suisse au printemps et en automne 2020. 
Sur la base des données de l’OFS, la visualisation d’histogrammes répartissant les nombres des décès par mois et par cause, mettra en exergue la pandémie. La visualisation d’un « Pie Chart » axé sur le nombre des décès dont la cause principale est le Covid-19 relève dans cette cause des décès la part des maladies concomitantes. 
________________________________________
Etape du projet

Mon projet s’est construit sur base des étapes suivantes : 

1.	Source des données :

Les données sont issues de l’Office Fédéral de la Statistique (OFS) 

•	Nombre de décès selon la cause principale avec le COVID-19 comme maladie concomitante (mal. conc.), par mois, selon le sexe :

  https://dam-api.bfs.admin.ch/hub/api/dam/assets/22984038/master

•	Maladies concomitantes pour les décès dont le COVID-19 est la cause principale, par mois, selon le sexe :

  https://dam-api.bfs.admin.ch/hub/api/dam/assets/22984034/master

________________________________________
2.	Traitement des données :

Les données de décès sont réparties en 3 fichiers Excel (Homme, Femme, Total) et converties en .csv afin de faciliter le traitement avec Phyton (transposition des données et sélection des causes de décès principales).  

________________________________________
3.	Langage de programmation :

La génération de la visualisation a été réalisée en HTML servant à ajouter du sens au contenu brut en le balisant, en CSS pour le design et le formatage du contenu balisé et en JavaScript pour rendre mon contenu et mon formatage interactif et dynamique. 

Dans mon projet de visualisation, deux types de graphiques ont été choisis : Histogramme et Diagramme circulaire (Pie Chart). 
Pour naviguer entre ces deux types de visualisation, un menu a été intégré permettant à l’utilisateur d’afficher les histogrammes des décès en 2020 par sexe (Homme, Femme, Total Homme & Femme) et également le focus Covid-19, le « Pie Chart » détaillant la répartition des maladies concomitantes des décès dont le covid 19 est la cause principale. 

En matière de design et d’interactivité, il a été nécessaire d’identifier chaque cause de décès par un code couleur pour voir la variation mois par mois. En plus des indications des seuils de valeurs dans l’axe verticale de l’histogramme, le rendu visuel a été dynamisé par un curseur interactif pour afficher le nombre de décès pour chaque maladie selon le mois choisi. Le curseur permet aussi de cocher/décocher les maladies à afficher afin de mieux visualiser la cause de décès sur une année complète de janvier à décembre.
