import BaseProvider from "./../base";

class FileProvider extends BaseProvider {
    constructor(option) {
        super(option);
        this._content = require(option.filePath);
    }

    get(path) {
        return Promise.resolve(this._content[path]);
    }

    update() {
        this._content = require(option.filePath);
    }
}

export default FileProvider;