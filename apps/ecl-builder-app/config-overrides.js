module.exports = function override(config) {
  // Polyfill Node's assert module, required by antlr4ts (via @aehrc/ecl-core).
  config.resolve.fallback = {
    ...config.resolve.fallback,
    assert: require.resolve("assert/"),
  };
  // Suppress source map warnings from @aehrc/ecl-core (ships sourcemaps
  // referencing .ts files not included in the npm package).
  config.ignoreWarnings = [
    ...(config.ignoreWarnings || []),
    { module: /@aehrc\/ecl-core/ },
  ];
  return config;
};
