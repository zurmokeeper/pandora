'use strict';
const pkg = require('../index');

exports[pkg.pluginName] = {
  enable: true,
  components: {
    logger: {
      path: require.resolve('@pandorajs/component-logger'),
    },
    metric: {
      path: require.resolve('@pandorajs/component-metric'),
    },
    trace: {
      path: require.resolve('@pandorajs/component-trace'),
    },
    instrumentEgg: {
      path: require.resolve('@pandorajs/component-instrument-egg'),
    },
    instrumentNode: {
      path: require.resolve('@pandorajs/component-instrument-node'),
    },
  },
  trace: {
    plugins: {
      http: {
        enabled: true,
        path: require.resolve('@opentelemetry/plugin-http'),
      },
      https: {
        enabled: true,
        path: require.resolve('@opentelemetry/plugin-https'),
      },
    },
  },
};
