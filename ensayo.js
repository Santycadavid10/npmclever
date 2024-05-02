const { addOauthHeader } = require("@clevercloud/client/cjs/oauth.js");
const { prefixUrl } = require("@clevercloud/client/cjs/prefix-url.js");
const { request } = require("@clevercloud/client/cjs/request.fetch.js");

module.exports.sendToApi = function sendToApi(requestParams) {
  // load and cache config and tokens
  const API_HOST = "https://api.clever-cloud.com";
  const tokens = {
    OAUTH_CONSUMER_KEY: "your OAUTH_CONSUMER_KEY",
    OAUTH_CONSUMER_SECRET: "your OAUTH_CONSUMER_SECRET",
    API_OAUTH_TOKEN: "your API_OAUTH_TOKEN",
    API_OAUTH_TOKEN_SECRET: "your API_OAUTH_TOKEN_SECRET",
  };

  return Promise.resolve(requestParams).then(prefixUrl(API_HOST)).then(addOauthHeader(tokens)).then(request);
  // chain a .catch() call here if you need to handle some errors or maybe redirect to login
};
