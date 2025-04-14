import { EventEmitter } from 'events';

class MessageService extends EventEmitter {
    authenticated = false;
    commandsQueue = [];

    authenticate() {
        //simulate network delay to get a token
        setTimeout(() => {
            this.authenticated = true;
            this.emit("authenticated");
            this.commandsQueue.forEach(command => command());
            this.commandsQueue = [];
        }, 1000);
    }

    async sendMessage(content) {
        if(!this.authenticated) {
            console.log("Requested queue: ", content);
            return new Promise((resolve, reject) => {
                const command = () => {
                    this.sendMessage(content).then(resolve, reject);
                }
                this.commandsQueue.push(command);
            })
        }
        console.log('Message sent: ', content);
        
    }
}

export const messageService = new MessageService()