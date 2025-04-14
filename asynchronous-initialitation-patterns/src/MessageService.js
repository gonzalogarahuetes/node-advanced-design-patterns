import { EventEmitter } from 'events';

class MessageService extends EventEmitter {
    authenticated = false;

    authenticate() {
        //simulate network delay to get a token
        setTimeout(() => {
            this.emit("authenticated", (this.authenticated = true))
        }, 1000);
    }

    async sendMessage(content) {
        if(!this.authenticated) {
            throw new Error("Not authenticated yet")
        }
        console.log('Message sent: ', content);
        
    }
}

export const messageService = new MessageService()