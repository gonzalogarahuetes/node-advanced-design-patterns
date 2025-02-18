class FS_Proxy {
    constructor(fs_real) {
        this.fs = fs_real;
    }

    readFile(path, format, callback) {
        if(!path.match(/.txt$|.TXT$/)) {
            return callback(new Error("Cannot read other than txt files."))
        }

        this.fs.readFile(path, format, (error, data) => {
            if(error) {
                console.error(error);
                return callback(error)
            }

            return callback(null, data)
        })
    }
}

module.exports = new FS_Proxy();