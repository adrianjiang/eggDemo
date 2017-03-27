exports.info = function* (ctx) {
  ctx.body = {
    name: `hello ${ctx.params.id}`,
  };
};