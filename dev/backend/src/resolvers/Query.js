const { forwardTo } = require("prisma-binding");

const Query = {
  items: forwardTo("db"),
  influencers: forwardTo("db"),
  influencersConnection: forwardTo("db"),
  influencer: forwardTo("db"),
  addresses: forwardTo("db"),
  socials: forwardTo("db"),
  sizes: forwardTo("db"),
  loggedActivities: forwardTo("db"),
  loggedActivitiesConnection: forwardTo("db"),
  notes: forwardTo("db"),
  notesConnection: forwardTo("db"),
  loggedInUser(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      return null;
    }
    return ctx.db.query.user(
      {
        where: {
          id: ctx.request.userId
        }
      },
      info
    );
  }
  // async items(parent, args, ctx, info) {
  //   const items = ctx.db.query.items();
  //   return items;
  // }
};

module.exports = Query;
