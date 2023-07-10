# Exemple récapitulatif

Ce répertoire contient un exemple récapitulatif des différentes notions sur la manipulation du DOM et la gestion des événements.

## Application de clavardage

La page principale présente un système de clavardage avec une boîte de messages, un champs de saisie pour l'utilisateur. 

Le bouton `Émuler un message` permet d'émuler un message d'un autre utilisateur dans le clavardage (ceci serait un message provenant d'un serveur externe dans un vrai système).

La case à cocher `"Coller" Rapide` permet d'activer ou désactiver la fonctionnalité de coller le contenu du presse-papier avec le bouton droit de la souris dans le champs de saisie.

## Création d'éléments du DOM

Chaque message dans la boîte de messages est généré à l'aide de la fonction `addMessage(message,source)` qui prend un objet `message` et utilise sont contenu pour générer la structure HTML suivante :

```html
<div class="message ${source}" id="${id-quelconque}">
    <div class="message-info">
        <span class="username">${message.username}: </span>
        <span class="text">${message.text}</span>
    </div>
    <p class="message-time">${message.time}</p>
</div>
```

Afin de minimiser la duplication de code, chaque éléments de la structure est créé avec la fonction utilitaire suivante qui prend le type de l'élément et un tableau avec les classes CSS à ajouter :
```js
function createElementWithClasses(elementType, classes) {
    const element = document.createElement(elementType);
    element.classList.add(...classes);
    return element;
}
```
Chaque message se fait assigner un `id` unique qui est généré en fonction du nombre de messages déjà existants. **Note** : dans un vrai système de messagerie, l'id serait généré par le serveur autoritaire.

## Gestion des événements

### Événement du clavier

Le code attache un gestionnaire de l'événement `keydown` au champs de saisie pour les message. Ce gestionnaire vérifie si la touche appuyée est `Enter` et, si c'est le cas, génère un nouveau message qui contient le contenu du champs de saisie comme texte.

Cet événement se produit à chaque touche appuyée lorsque le champs de saisie possède le focus de la page. Il est également possible d'implémenter le même fonctionnement avec l'événement [input](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event) ou [change](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event). À noter que `change` est lancé si l'élément perd le focus également.

### Événement de la souris

Le code attache un gestionnarie de l'événement `click` sur les élément suivants :
- le bouton `Émuler un message` qui génère un message aléatoire d'un auteur aléatoire à chaque clic.
- la boîte de messages qui vérifie si le clic a eu lieu sur le texte d'un message avec le bouton `control` appuyé et copie de texte du message. Voir la section sur la [propagation](#propagation-des-événements).

Le code attache un gestionarie de l'événement `change` sur la case à cocher qui ajoute ou retire un gestionnaire de l'événement `contextmenu` (bouton droit de la souris) sur le champs de saisie pour les messages.

### Propagation des événements

Un événement dans le DOM se propage en 2 phases :
- La phase de `capture` qui part de haut de l'hierarchie jusqu'à l'élément cible.
- La phase de `bubbling` qui part de l'élément cible jusqu'au haut de l'hierarchie.

Dans cet exemple, l'élément cible est l'élément `<span>` du texte et le gestionnaire est sur la boîte de message qui est un ancêtre de l'élément cible. De cette manière, il y a un seul gestionnaire d'événement au lieu de rajouter un nouveau gestionnaire à chaque élément `<span>`.

Le code suivant vérifie que l'élément cible est bel est bien celui avec la classe `text` :

```js
if (event.target.classList.contains("text")){
    ...
}
```

Le code suivant vérifie que l'événement du clic a été affectuée avec le bouton de modification `control` appuyé :
```js
if (!event.getModifierState("Control")) 
    return;
```

### Retrait d'un événement

La case à cocher `"Coller" Rapide` permet d'ajouter ou retirer un gestionnaire sur l'événement `contextmenu` du champs de saisie en fonction de l'état de sa propriété `checked`.

Si `checked` est `true`, un clic droit dans le champs de saisie colle le contenu du presse-papier de l'utilisateur. Ce contenu peut provenir de la copie d'un message ou de n'importe quel autre texte copié par l'utilisateur.

Le gestionnaire de l'événement est rajouté et retiré à l'aide des fonctions `addEventListener` et `removeEventListener`. Rappel : il faut que la référence vers la fonction de rappel soit la même dans les 2 fonctions pour pouvoir retirer un gestionnaire d'événement.

### Bloquage de l'état par défaut

Par défaut, un clic droit affiche un menu contextuel (d'ou le nom de l'événement `contextmenu`). Comme on ne veut pas voir ce menu lorsqu'on colle du texte avec l'option `"Coller" Rapide`, on peut désactiver ce comportement de la manière suivante :

```js
event.preventDefault();
```

Ce bloquage a lieu seulement si le gestionnaire de l'événement est ajouté sur le champs de saisie. Voir la section [retrait d'un événement](#retrait-dun-événement) pour plus d'informations.