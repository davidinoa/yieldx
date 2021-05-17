/* eslint-disable @typescript-eslint/naming-convention */
const { createProxyMiddleware } = require("http-proxy-middleware");
const authenticator = require("@bondhouse/bh-authenticator-node");
// eslint-disable-next-line import/no-extraneous-dependencies
const { ApolloServer } = require("apollo-server-express");
// eslint-disable-next-line import/no-extraneous-dependencies
const { UrlLoader } = require("@graphql-tools/url-loader");
// eslint-disable-next-line import/no-extraneous-dependencies
const { loadSchema } = require("@graphql-tools/load");

// eslint-disable-next-line func-names
module.exports = async function (app) {
  const useProxy = !process.env.USE_MOCKS;
  const proxyEndpoint = useProxy ? "/graphql" : "/graphql/live";
  // eslint-disable-next-line camelcase
  const {
    access_token: accessToken
  } = await new authenticator.Authenticator().provideCredentials();

  app.use(
    createProxyMiddleware(proxyEndpoint, {
      target: "https://dev.yieldx.app/",
      headers: { Authorization: `Bearer ${accessToken}` },
      secure: false,
      changeOrigin: true
    })
  );

  if (!useProxy) {
    await loadSchema("http://localhost:3000/graphql/live", {
      // load from endpoint
      loaders: [new UrlLoader()]
    })
      .then(schema => {
        const server = new ApolloServer({
          schema,
          mocks: {
            JSON: () => ({ jsonData: "cool" }),
            Portfolio: () => ({
              id: "784f98c2-2356-4a2b-a723-2c84c9723f82",
              createdAt: new Date().toISOString()
            }),
            WealthProjection: () => ({
              date: new Date().toISOString()
            })
          }
        });
        server.applyMiddleware({ app, path: "/graphql" });
        return schema;
      })
      .catch(e => {
        // eslint-disable-next-line no-console
        console.log(e);
      });
  }
  /*  */
  /* "https://dev.yieldx.app/graphql" */

  app.use(
    createProxyMiddleware("/apis", {
      target: "https://dev.yieldx.app/",
      // eslint-disable-next-line camelcase
      headers: { Authorization: `Bearer ${accessToken}` },
      secure: false,
      changeOrigin: true
    })
  );
  app.use(
    createProxyMiddleware("/iam/api", {
      target: "https://dev.yieldx.app/",
      // eslint-disable-next-line camelcase
      headers: { Authorization: `Bearer ${accessToken}` },
      secure: false,
      changeOrigin: true
    })
  );
  app.use(
    createProxyMiddleware("/yieldx/apis", {
      target: "http://localhost:5000/",
      // eslint-disable-next-line camelcase
      headers: { Authorization: `Bearer ${accessToken}` }
    })
  );
};
