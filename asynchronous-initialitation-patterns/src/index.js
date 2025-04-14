// import { messageService } from "./MessageService.js";
// import { messageService } from "./command-pattern/QueuedMessageService.js";
import { messageService } from "./state-pattern/StatefulMessageService.js";

messageService.authenticate()
messageService.sendMessage("First message");
setTimeout(() => {
    messageService.sendMessage("Second message");
}, 1100);