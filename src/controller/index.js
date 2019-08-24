import { Controller } from "ada-cloud-util/boost";
import { action } from "ada-cloud-util/boost/annotation";

class ConfigController extends Controller {

    @action({ path: "/get" })
    get({ request, provider }) {
        let { path } = request.query;
        return provider.get(path).then(content => {
            return this.success(JSON.parse(content));
        });
    }

    @action({ path: "/update" })
    update({ channel, provider }) {
        return provider.update().then(() => {
            return channel.postBroadcastMessage('cloud-config-change').then(() => {
                return this.success();
            });
        });
    }
}

export default ConfigController;