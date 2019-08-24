import { Controller } from "ada-cloud-util/boost";
import { action, channel } from "ada-cloud-util/boost/annotation";
import Result from "ada-cloud-util/result";

class ConfigController extends Controller {

    @channel()
    channel = null;

    @action({ path: "/get" })
    get({ request, provider }) {
        let { path } = request.query;
        return provider.get(path).then(content => {
            return Result.getSuccessResult(content);
        });
    }

    @action({ path: "/update" })
    update({ provider }) {
        return provider.update().then(() => {
            return channel.postBroadcastMessage('cloud-config-change').then(() => {
                return Result.getSuccessResult();
            });
        });
    }
}

export default ConfigController;