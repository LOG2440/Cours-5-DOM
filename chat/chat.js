export class ChatBus extends EventTarget { }

class Handler {
    constructor(bus) {
        this.eventBus = bus;
    }
}

export class NotificationHandler extends Handler {
    async subscribe() {
        const permission = await Notification.requestPermission();
        if (permission !== 'granted') return;

        this.eventBus.addEventListener('mention', (event) => {
            new Notification(`${event.username} :`, { body: event.text, });
        });
    }
}

export class ConsoleHandler extends Handler {
    subscribe() {
        this.eventBus.addEventListener('mention', (event) => {
            console.log(`${event.username}: ${event.text}`);
        });
    }
}

export const chatBus = new ChatBus();
