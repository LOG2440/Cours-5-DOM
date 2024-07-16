# Le DOM (_Document Object Model_) et la gestion des événements

Cet entrepôt contient un ensemble d'exemples simples des différentes notions vues sur les notions du DOM(_Document Object Model_) et la gestion des événements dans une page Web.

Voir la section [Exemple récapitulatif](#exemple-récapitulatif) à la fin du document pour un résumé des notions.

## Composition du DOM

Le fichier [index.html](./introduction/index.html) dans le dossier `introduction` contient un exemple simple d'une page web ainsi que la représentation des éléments HTML sous la forme d'objet JS qui implémenter les interfaces `Node` et `Element`.

Comme le DOM est présenté comme un graphe entre les différents noeuds, les fichiers [node.js](./introduction/node.js) et [element.js](./introduction/element.js) présentent quelques extraits de code JS qui illustre cette relation entre les noeuds ou éléments du DOM.

Le fichier [innerHTML.js](./introduction/innerHTML.js) présente un exemple du danger potentiel de l'utilisation de l'attribut `innerHTML` d'un élément HTML en tant que vecteur d'attaque potentiel.

## Modification du DOM

Le DOM est manipulable à travers le code JS dans une page Web. Il est possible de créer, modifier et supprimer n’importe quel élément du DOM. Le fichier [index.html](./dom_construction/index.html) dans `dom_construction` présente un exemple très simple de création d'élément HTML entiérement à travers du code JS.

Le projet de [boîte de clavardage](./chat/) est un exemple plus complet de comment manipuler le DOM. Consultez le fichier [README](./chat/README.MD) pour plus d'informations.

## Conteneurs vivants et statiques

Les éléments du DOM sont souvent traités à travers des collections qui en regroupent plusieurs.

Ils existent 2 types de collections : "vivantes" et "statiques".

### Collection vivante

Une collection vivante, comme celle retournée par la fonction `getElementsByTagName` est un collection dont le contenu peut changer en fonction de l'état du DOM après sa création.

Par exemple, rajouter un élément avec la balise `<p>` après la création d'une collection avec `getElementsByTagName(p)` ajouterai cet élément dans la collection automatiquement.

Consultez le fichier [live_collection.html](./collection/live_collection.html) pour un exemple concret.

### Collection statique

Une collection statique, comme celle retournée par la fonction `querySelectorAll` est un collection dont le contenu ne change pas en fonction de l'état du DOM après sa création.

Par exemple, rajouter un élément avec la balise `<p>` après la création d'une collection avec `querySelectorAll(p)` n'ajouterai pas cet élément dans la collection automatiquement.

Consultez le fichier [static_collection.html](./collection/static_collection.html) pour un exemple concret.


## Propriété `dataset`

Il est possible d'attacher des propriétés personnalisées à un élément HTML à travers des propriétés dont le nom commence par `data-`. Ces propriétés sont accessibles dans le code JS à travers la propriété `dataset` de l'élément du DOM.

Les propriétés du dataset peuvent être utilisées pour contenir des informations supplémentaires sur un élément dans le HTML directement.

Consultez les fichiers [index.html](./dataset/index.html) et [script.js](./dataset/script.js) pour un exemple concret.


## Gestion des événements 

Il est possible de "réagir" à certains événements de l'utilisateur sur la page web (clic de souris, clavier, cocher une case, etc.) en ajoutant des gestionnaires d'événements (_event listener_) à des éléments du DOM : boutons, champs de saisie, formulaires, etc.

L'ajout d'un événement peut se faire de plusieurs manières, notamment :
- ajout du code JS directement dans le HTML (déconseillé)
- associer le code à une fonction `onX` où `X` est le nom de l'événement. Ex : `onclick`
- utiliser la méthode `addEventListener(event,handler)` où `event` est le nom de l'événement et `handler` la fonction qui gère l'événement

La fonction de gestion peut recevoir un objet de type `Event` et qui contient des attributs différents en fonction du type d'événement. Ex : un `KeyboardEvent` contient l'attribut `key` qui indique la touche utilisée.

Il est possible de retirer un événement ajouté avec `addEventListener(event,handler)` à l'aide de la fonction `removeEventListener(event,handler)` si on utilise la même référence `handler` dans les 2 cas. Il n'est donc pas possible de retirer un gestionnaire utilisant une expression de fonction sans qu'elle soit assignée à une variable.

Un événement dans le DOM se propage en 2 phases :
- La phase de `capture` qui part de haut de l'hierarchie jusqu'à l'élément cible.
- La phase de `bubbling` qui part de l'élément cible jusqu'au haut de l'hierarchie.

Il est donc possible de capturer un événement sur un élément, même si celui-ci n'est pas la cible de l'événement en autant qu'il est un ancêtre de la cible. Il est également possible d'interrompre une des phases et arrêter la propagation de l'événement.

Consultez le fichier [bubbling.html](./events/bubbling.html) pour un exemple concret.

## Boucle d'événements

La détection des événements et l'appel des fonctions de rappel dépendent de la boucle d'événements (_event loop_) du navigateur.

Consultez le fichier [index.html](./event_loop/index.html) pour un exemple concret.

Les vidéos suivantes sont des bonnes références détaillées sur le sujet :
-[What the heck is the event loop anyway? | Philip Roberts | JSConf EU](https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=749s)
-[Jake Archibald on the web browser event loop,](https://www.youtube.com/watch?v=cCOL7MC4Pl0)

# Exemple récapitulatif

Le répertoire [chat](./chat/) contient un exemple récapitulatif des différentes notions présentées dans cet entrepôt en lien avec la modification du DOM et la gestion des événements. Consultez le fichier [README](./chat/README.MD) pour plus d'informations.

# Web Storage API

Web Storage est un API du navigateur connexe au DOM sans nécessairement manipuler la structure d'une page qui permet de sauvegarder et charger des données pour un domaine spécifique.

Consultez le fichier [README](./web_storage/README.MD) du répertoire [web_storage](./web_storage/) pour plus d'informations et les exemples de code.