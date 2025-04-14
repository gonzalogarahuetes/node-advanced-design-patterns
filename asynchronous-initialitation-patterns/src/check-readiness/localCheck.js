import {once} from 'events';
import { messageService } from '../MessageService.js';

messageService.authenticate()

async function notifyUsers() {
    if(!messageService.authenticated) {
        await once(messageService, "authenticated");
    }
    await messageService.sendMessage("Hello, user!")
}

notifyUsers()
setTimeout(() => {
    notifyUsers()
}, 1000);