import Server from "ada-cloud-hub/boot";
import config from "../config";

let server = new Server();
server.on('started', () => {
    let { type, option } = config.provider;
    server.context.provider = new type(option);
});
server.startup();