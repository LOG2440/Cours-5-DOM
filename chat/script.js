import { getRandomName, getRandomText, defaultMessages } from "./utils.js";

const messageContainer = document.getElementById("messages");

/// Générér les 2 messages automatiquement
messageContainer.innerHTML = "";
addMessage(defaultMessages[0], 'self');
addMessage(defaultMessages[1], 'other');

/**
 * Ajoute un message dans le DOM
 * @param {{username:string, text:string, time:string}} message message avec nom d'utilisateur et le temps de création
 * @param {'self'|'other'} source indique si le message vient de nous ou de quelqu'un d'autre
 */
function addMessage(message, source) {
    const parent = createElementWithClasses("div", ["message", source]);
    parent.setAttribute("id", `message-${messageContainer.childElementCount + 1}`);

    const messageInfo = createElementWithClasses("div", ["message-info"]);
    parent.appendChild(messageInfo);

    const username = createElementWithClasses("span", ["username"]);
    username.textContent = `${message.username}: `;
    messageInfo.appendChild(username);

    const text = createElementWithClasses("span", ["text"]);
    text.textContent = message.text;
    messageInfo.appendChild(text);

    const time = createElementWithClasses("p", ["message-time"]);
    time.textContent = message.time;
    parent.appendChild(time);

    messageContainer.appendChild(parent);
    // ramener la barre de défilement en bas à chaque message
    messageContainer.scrollTop = messageContainer.scrollHeight;
}

/**
 * Utilitaire de création d'élément HTML avec des classes
 * @param {string} elementType le nom de la balise à créer
 * @param {string[]} classes liste de classes à ajout à l'élément
 * @returns {HTMLElement} élément HTML créé
 */
function createElementWithClasses(elementType, classes) {
    const element = document.createElement(elementType);
    element.classList.add(...classes);
    return element;
}

/// Gestion des événements
document.getElementById("message-input").addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const time = new Date().toTimeString().split(' ')[0];
        const message = {
            username: "Moi",
            text: event.target.value,
            time
        };
        addMessage(message, 'self');
        event.target.value = "";
    }
});

document.getElementById("server-send").addEventListener('click', () => {
    const time = new Date().toTimeString().split(' ')[0];
    const message = {
        username: getRandomName(),
        text: getRandomText(),
        time
    };
    addMessage(message, 'other');
});

/// Propagation des événements
messageContainer.addEventListener("click", (event) => {
    // Ignore un click sans CTRL d'appuyé
    if (!event.getModifierState("Control"))
        return;

    // On copie le texte dans le presse-papier
    // window est optionnel
    if (event.target.classList.contains("text")) {
        window.navigator.clipboard.writeText(event.target.textContent);
    }
});

/// Ajout et retrait des gestionnaires dynamique
document.getElementById("copy-checkbox").addEventListener('change', (event) => {
    const messageInput = document.getElementById("message-input");

    const copyToInput = function (event) {
        // Prévenir l'affichage du menu contextuel avec bouton droit
        event.preventDefault();

        // readText est asynchrone et on doit attendre la fin de son exécution
        window.navigator.clipboard.readText().
            then(text => this.value = text);
    };
    if (event.target.checked) {
        messageInput.addEventListener('contextmenu', copyToInput);
    }
    else {
        messageInput.removeEventListener('contextmenu', copyToInput);
    }
});