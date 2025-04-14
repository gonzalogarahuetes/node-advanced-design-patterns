import {once} from 'events';
import { messageService } from "../MessageService.js";


async function init() {
    messageService.authenticate();
    await once(messageService, "authenticated");
}

async function notifyUsers() {
    await messageService.sendMessage("Hello, users!")
}

init().then(() => {
    notifyUsers();
})