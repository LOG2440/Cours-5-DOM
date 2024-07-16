# Web Storage

L'API [Web Storage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) est un mécanisme qui permet de sauvegarder des informations simples sous la forme de paires clé-valeur.

Il existe 2 types d'espaces de stockage : `Local Storage` et `Session Storage` qui sont manipulés de la même manière, mais dont la durée de la sauvegarde varie.

## Types

La différence majeure entre `Local Storage` et `Session Storage` est la durée de vie des sauvegardes. Les 2 implémentent l'interface [Storage](https://developer.mozilla.org/en-US/docs/Web/API/Storage) et sont accessibles à travers les objets de `window` [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) et [sessionStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage)

Dans le cas de `Session Storage`, les informations sauvegardées sont accessibles jusqu'à la fin de la session, ex : fermeture de l'onglet. L'information persiste à travers un rechargement de la page et si la page est restaurée.

Dans le cas de `Local Storage`, les informations sont sauvegardées de manière plus permanente et sont accessibles, même si le navigateur complet a été fermé (sauf si l'espace de stockage a été modifié en mode `incognito`). Cet espace est partagé par les différentes pages du même domaine. Par exemple : `monSite.com/a` aura le même `localStorage` que `monSite.com/b`.

## Sauvegarde et récupération de l'information

Une donnée peut être sauvegardée dans l'espace de stockage à travers la fonction `setItem(key,value)` et récupérée à travers `getItem(key)`. Chaque type contient son propre ensemble d'informations sauvegardées.

La valeur de `key` doit être la même pour la sauvegrade et la récupération et elle est sensible à la case. À noter que la valeur de retour de `getItem(key)` pour une `key` inexistante est `null`.

Il est possible de retirer une paire clé-valeur à travers la fonction `removeItem(key)` ou vider l'espace de stockage au complet à travers la fonction `clear()`.

## Format de sauvegarde

Les données sont sauvegardées sous un format de type `string` (`UTF-16`). Dans le cas de sauvegarde d'un `object`, il faut le convertir en `string` à la sauvegarde et le remettre en `objet` lors de la récupération. Par exemple :

```js
const object = {id:10, title:'some item'};
localStorage.setItem('savedItem', object); // [Object object] dans le storage
localStorage.setItem('savedItem', JSON.stringify(object)); // {"id":10,"title":"some item"}

localStorage.getItem('savedItem'); // la chaîne {"id":10,"title":"some item"}
JSON.parse(localStorage.getItem('savedItem')); // l'objet {"id":10,"title":"some item"}
``` 

# Exemples

Ce répertoire contient 2 exemples d'utilisation du `Web Storage API`.

## Storage

Le répertoire [storage](./storage/) contient un exemple de l'utilisation de l'API : sauvegarde, récupération et supression de données dans un storage. L'exemple couvre également la différence entre `Local Storage` et `Session Storage`.

La page [index.html](./storage/index.html) contient 2 champs de saisie. Il est possible de sauvegarder leurs valeurs à travers le bouton `Sauvegarder`. 

Il est possible de récupérer les valeurs sauvegardées et les placer dans les champs à travers le bouton `Récupérer`. Si la page a été simplement rafraichie, les 2 informations seront encore là. Si elle a été fermée complétement et accédée à nouveau, seulement le stockage local sera encore présent.

Finalement, il est possible de vider les 2 espaces de stockage à travers le bouton `Tout vider`.

## Page Share

Le répertoire [page_share](./page_share/) contient un exemple de l'utilisation de l'API pour partager des données entre plusieurs pages du même domaine.

La page [index.html](./page_share/index.html) contient un formulaire de création de profil utilisateur. Une fois les 2 champs obligatoires (nom et courriel) remplis, vous pouvez soumettre le formulaire et les informations du profil seront sauvegardées dans `localStorage`.

La page [profile.html](./page_share/profile.html) contient les informations du profil généré récupérées à partir du `localStorage`. S'il n'y a aucune donnée disponible, la page affiche un message de redirection vers la page principale et cache l'affichage du profil.

### Génération d'avatar aléatoire

Vous pouvez générer un avatar aléatoire à l'aide du service [Gravatar](https://en.gravatar.com/) autant de fois que vous voulez avant de soumettre le formulaire. Notez que comme on utilise l'heure pour l'aspect "aléatoire", il faut au moins 1 seconde entre chaque génération.
