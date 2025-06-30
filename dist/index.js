/*!
 * @phucbm/lerp v1.0.0
 * A lightweight TypeScript utility function for linear interpolation
 * @license MIT
 */


// src/index.ts
function lerp(start, end, fraction = 0.1) {
  return start * (1 - fraction) + end * fraction;
}
var index_default = lerp;
export {
  index_default as default,
  lerp
};
//# sourceMappingURL=index.js.map