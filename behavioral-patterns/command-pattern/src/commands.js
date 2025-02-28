const { writeFile, unlink } = require("fs");
const path = require("path");

class Exit {
    get name() {
        return `exit... 👋`
    }

    execute() {
        process.exit(0)
    }
}

class Create {
    constructor(fileName, fileContent) {
        this.fileName = fileName;
        this.fileContent = fileContent;
        this.fullPath = path.join(__dirname, fileName);
    }

    get name() {
        return `creating ${this.fileName}...`
    }

    execute() {
        writeFile(this.fullPath, this.fileContent, (func) => func);
    }

    undo() {
        unlink(this.fullPath, (func) => func)
    }
}

module.exports = { Create, Exit }