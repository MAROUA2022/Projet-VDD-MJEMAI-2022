 # Visualisation surmortalité 2020 en Suisse  



Ce projet entre dans le cadre de la validation des crédits relatif au cours de Visualisation de données, dispensé par Monsieur Issac Pante, maître d'enseignement et de recherche en culture et édition numérique à la Faculté des lettres de l'université de Lausanne.

# Descriptif


La majorité des décès se répartissent entre un nombre restreint de causes : maladies cardiovasculaires, cancers, maladies de l’appareil respiratoire, accidents, actes de violence et démence. Depuis le début de la pandémie de SARS-CoV-2, des phases de surmortalité notables ont été enregistrées en Suisse au printemps et en automne 2020. 
Sur la base des données de l’OFS, la visualisation d’histogrammes répartissant les nombres des décès par mois et par cause, mettra en exergue la pandémie. La visualisation d’un « Pie Chart » axé sur le nombre des décès dont la cause principale est le Covid-19 montre le poids des maladies concomitantes à ces décès. 
 

# Etape du projet

Mon projet s’est construit sur la base des étapes suivantes : 

1.	Source des données :

Les données sont issues de l’Office Fédéral de la Statistique (OFS) 

•	Nombre de décès selon la cause principale avec le COVID-19 comme maladie concomitante (mal. conc.), par mois, selon le sexe :

  https://dam-api.bfs.admin.ch/hub/api/dam/assets/22984038/master

•	Maladies concomitantes pour les décès dont le COVID-19 est la cause principale, par mois, selon le sexe :

  https://dam-api.bfs.admin.ch/hub/api/dam/assets/22984034/master

2.	Traitement des données :

Les données de décès sont réparties en 3 fichiers Excel (Homme, Femme, Total) et converties en .csv afin de faciliter le traitement avec Phyton (transposition des données et sélection des causes de décès principales).  

3.	Langage de programmation :

La génération de la visualisation a été réalisée en HTML servant à ajouter du sens au contenu brut en le balisant, en CSS pour le design et le formatage du contenu balisé et en JavaScript pour rendre mon contenu et mon formatage interactif et dynamique. 

Dans mon projet de visualisation, deux types de graphiques ont été choisis : Histogramme et Diagramme circulaire (Pie Chart). 
Pour naviguer entre ces deux types de visualisation, un menu a été intégré permettant à l’utilisateur d’afficher les histogrammes des décès en 2020 par sexe (Homme, Femme, Homme & Femme) et également un focus sur le Covid-19 via un « Pie Chart » détaillant la répartition des maladies concomitantes aux décès dont le covid 19 est la cause principale. 

En matière de design et d’interactivité, il a été nécessaire d’identifier chaque cause de décès par un code couleur pour voir la variation mois par mois. En plus des indications des seuils de valeurs dans l’axe verticale de l’histogramme, le rendu visuel a été dynamisé par un curseur interactif pour afficher le nombre de décès pour chaque maladie selon le mois choisi. Le curseur permet aussi de cocher/décocher les maladies à afficher afin de mieux visualiser la cause de décès sur une année complète de janvier à décembre.


# Visualisation et conclusion
 
![NB décès Homme](https://user-images.githubusercontent.com/104840450/188247145-6977c13c-225b-4a56-92fb-5c6a5cc433d8.png)
Cette visualisation démontre aisément en termes d’analyses des données, l’apparition d’une nouvelle cause de décès au printemps 2020.  En effet, la répartition en nombre des causes classiques des décès hors Covid-19 (maladies cardiovasculaires, cancers, maladies de l’appareil respiratoire, accidents et traumatismes) a été homogène tout au long de l’année 2020.    
![NB décès par cause 2020](https://user-images.githubusercontent.com/104840450/188248414-97e6c8c5-3151-439f-8d41-c817b355211a.png)
L’effet du confinement très efficace pour les maladies infectieuses a réduit drastiquement les décès Covid-19, la surmortalité en automne et fin 2020 démontre la saisonnalité de la pandémie et l’apparition de nouveaux variants. 

L’analyse du Pie Chart démontre que 96% des décès Covid19 sont associés à des maladies concomitantes. 

![Pie Chart](https://user-images.githubusercontent.com/104840450/188248471-a5dfff6c-3020-48f7-8928-f060109ecd2c.png)
En conclusion, cette visualisation s’adresse à toute personne intéressée par l’analyse des effets de la pandémie sur la mortalité et plus généralement elle permet d’identifier les causes principales des décès en Suisse. Pour aller plus loin dans ce projet, cette visualisation peut être complétée par une vision par canton et par classe d’âge. 
Ce projet a été une expérience très enrichissante pour moi en termes de traitement de données et de programmation. Rendre le contenu dynamique a été complexe mais indispensable pour la clarté de la visualisation et au-delà des graphiques illustrant l’objectif de ce projet, la vérification des structures de données reste l’étape importante de début jusqu’à la fin pour assurer la fiabilité du message véhiculé à travers de cette visualisation.

