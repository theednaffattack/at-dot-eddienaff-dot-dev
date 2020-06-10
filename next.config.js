require("dotenv").config();
const internalIp = require("internal-ip");
const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require("next/constants");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.BUNDLE_ANALYZE === "true",
});

module.exports = {
  webpack(config, options) {
    config.module.rules.push({
      test: /\.graphql$/,
      exclude: /node_modules/,
      use: [options.defaultLoaders.babel, { loader: "graphql-let/loader" }],
    });

    config.module.rules.push({
      test: /\.graphqls$/,
      exclude: /node_modules/,
      loader: "graphql-tag/loader",
    });

    return config;
  },
};

const config = (phase) => {
  const clientIpAddress = internalIp.v4.sync();
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  // when `next build` or `npm run build` is used
  const isProd =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== "1";
  // when `next build` or `npm run build` is used
  const isStaging = PHASE_PRODUCTION_BUILD && process.env.STAGING === "1";

  const devPrefix = "http";
  const prodPrefix = "https";

  console.log(
    `isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}, graphQlPort: ${process.env.GRAPHQL_PORT}`
  );

  console.log(
    `${devPrefix}://${clientIpAddress}:${process.env.GRAPHQL_PORT}/graphql`
  );

  return {
    env: {
      GRAPHQL_URL: (() => {
        if (isDev) return process.env.DEV_GRAPHQL_ENDPOINT;
        if (isProd) {
          return `${prodPrefix}://${process.env.PRODUCTION_API_DOMAIN}/graphql`;
        }
        if (isStaging)
          return `https://${process.env.STAGING_SERVER_DOMAIN}/graphql`;
        return "GRAPHQL_URL:not (isDev,isProd && !isStaging,isProd && isStaging)";
      })(),

      WEBSOCKET_URL: (() => {
        if (isDev) {
          return `ws://${clientIpAddress}:${process.env.GRAPHQL_PORT}/subscriptions`;
        }
        if (isProd) {
          return `wss://${process.env.PRODUCTION_API_DOMAIN}/subscriptions`;
        }
        if (isStaging)
          return `wss://${process.env.STAGING_SERVER_DOMAIN}/subscriptions`;
        return "WEBSOCKET_URL:not (isDev,isProd && !isStaging,isProd && isStaging)";
      })(),
      MAPBOX_KEY: (() => `${process.env.MAPBOX_API_TOKEN}`)(),
    },
    webpack: (webpackConfig, options) => {
      webpackConfig.module.rules.push({
        test: /\.graphql$/,
        exclude: /node_modules/,
        use: [options.defaultLoaders.babel, { loader: "graphql-let/loader" }],
      });

      webpackConfig.module.rules.push({
        test: /\.graphqls$/,
        exclude: /node_modules/,
        loader: "graphql-tag/loader",
      });

      return webpackConfig;
    },
  };
};

module.exports = (phase) => withBundleAnalyzer(config(phase));
