const GitProvider = require("./lib/provider/types/git");
const path = require("path");

const config = {
    provider: {
        type: GitProvider,
        option: {
            git: 'https://github.com/ada-cloud/template-service-of-config.git',
            branch: 'master',
            local: ''
        }
    }
};

module.exports = config;