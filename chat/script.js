import { getRandomName, getRandomText } from "./utils.js";

const messageContainer = document.getElementById("messages");

document.getElementById("message-input").addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const time = new Date();
        const message = {
            username: "Moi",
            text: event.target.value,
            time: `${time.getHours()}:${time.getMinutes()}: ${time.getSeconds()}`
        };
        addMessage(message, 'self');
        event.target.value = "";
    }
});

document.getElementById("server-send").addEventListener('click', () => {
    const time = new Date();
    const message = {
        username: getRandomName(),
        text: getRandomText(),
        time: `${time.getHours()}:${time.getMinutes()}: ${time.getSeconds()}`
    };
    addMessage(message, 'other');
})

function addMessage(message, source) {
    const parent = createElementWithClasses("div", ["message", source === 'self' ? 'self' : 'other']);
    parent.setAttribute("id", messageContainer.childElementCount + 1);

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
    messageContainer.scrollTop = messageContainer.scrollHeight;
}

function createElementWithClasses(elementType, classes) {
    const element = document.createElement(elementType);
    element.classList.add(...classes);
    return element;
}