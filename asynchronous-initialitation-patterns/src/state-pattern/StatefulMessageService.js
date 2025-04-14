import { EventEmitter } from 'events';
import { ReadyState } from './readyState.js';
import { QueuingState } from './queuingState.js';

class MessageService extends EventEmitter {
    constructor() {
        super();
        this.state = new QueuingState(this);
    }

    authenticate() {
        //simulate network delay to get a token
        setTimeout(() => {
            this.authenticated = true;
            this.emit("authenticated");

            const prevState = this.state;
            this.state = new ReadyState();
            prevState.disable();
        }, 1000);
    }

    async sendMessage(content) {
        await this.state.sendMessage(content);
    }
}

export const messageService = new MessageService()