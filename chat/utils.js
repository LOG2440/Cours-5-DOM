// Phrases et noms générés par ChatGPI
const names = ['Olivia', 'Michel', 'Marie', 'Louis', 'Joel'];
const randomText = [
    "Qu'est-ce que JavaScript ?",
    "Quelle est la différence entre JavaScript et Java ?",
    "Comment déclarer une variable en JavaScript ?",
    "Quelle est la différence entre let, const et var en JavaScript ?",
    "Comment effectuer une boucle (loop) en JavaScript ?",
    "Qu'est-ce que la portée (scope) en JavaScript ?",
    "Comment vérifier le type d'une variable en JavaScript ?",
    "Qu'est-ce qu'une fonction en JavaScript ?",
    "Comment manipuler les tableaux (arrays) en JavaScript ?",
    "Comment ajouter un événement à un élément HTML en JavaScript ?"];
export function getRandomName() {
    return names[Math.floor(Math.random() * names.length)];
}

export function getRandomText() {
    return randomText[Math.floor(Math.random() * names.length)];
}

export const defaultMessages = [
    {
        username: "Michel",
        text: "Voici un message de moi",
        time: "13:32:03"
    },
    {
        username: "Marie",
        text: "Voici un message d'une autre personne",
        time: "13:33:27"
    },
]