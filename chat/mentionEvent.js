export class MentionEvent extends Event {
    constructor(username, text) {
        super('mention');
        this.username = username;
        this.text = text;
    }
}
