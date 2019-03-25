const Mutations = {
  async createItem(parent, args, ctx, info) {
    //TODO: Check if they are logged in

    const item = await ctx.db.mutation.createItem(
      {
        data: {
          ...args
        }
      },
      info
    );

    return item;
  },
  async createInfluencer(parent, args, ctx, info) {
    const influencer = await ctx.db.mutation.createInfluencer(
      {
        data: {
          ...args
        }
      },
      info
    );

    return influencer;
  }
};

module.exports = Mutations;
