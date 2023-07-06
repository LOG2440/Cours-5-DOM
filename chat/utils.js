const names = ['Olivia', 'Michel', 'Marie', 'Louis', 'Joel'];

export function getRandomName() {
    return names[Math.floor(Math.random() * names.length)];
}

export function getRandomText() {
    return `Voici un chiffre aléatoire : ${Math.floor(Math.random() * 20) + 1}`;
}