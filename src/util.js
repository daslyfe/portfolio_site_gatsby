export const ut = {
  import: (require) =>
    require.keys().reduce((acc, next) => {
      acc[next.replace("./", "")] = require(next);
      return acc;
    }, {}),
  loadImages: (path) =>
    ut.import(require.context(path, true, /\.(png|jpe?g|gif|svg)$/)),
};
