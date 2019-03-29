const { forwardTo } = require("prisma-binding");

const Query = {
  influencers: forwardTo("db"),
  influencer: forwardTo("db")
  // async items(parent, args, ctx, info) {
  //   const items = ctx.db.query.items();
  //   return items;
  // }
};

module.exports = Query;
