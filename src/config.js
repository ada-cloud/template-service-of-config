import GitProvider from "./lib/provider/types/git";
import FileProvider from "./lib/provider/types/file";
import path from "path";

const config = {
    provider: {
        type: GitProvider,
        option: {
            git: 'https://github.com/ada-next/app-config.git',
            branch: 'master',
            local: '/Users/wangjinliang/adanext/config'
        }
    },
    _provider: {
        type: FileProvider,
        option: {
            filePath: path.resolve(__dirname, "./../config.json")
        }
    }
};

export default config;