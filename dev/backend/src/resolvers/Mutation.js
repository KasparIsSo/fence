const Mutations = {
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
  },
  updateInfluencer(parent, args, ctx, info) {
    const updates = { ...args };
    delete updates.id;
    return ctx.db.mutation.updateInfluencer(
      {
        data: updates,
        where: {
          id: args.id
        }
      },
      info
    );
  },
  async createAddress(parent, args, ctx, info) {
    const addressArgs = { ...args };
    delete addressArgs.influencerId;
    const address = await ctx.db.mutation.createAddress(
      {
        data: {
          influencer: {
            connect: {
              id: args.influencerId
            }
          },
          ...addressArgs
        }
      },
      info
    );

    return address;
  },
  async createSocial(parent, args, ctx, info) {
    const socialArgs = { ...args };
    delete socialArgs.influencerId;
    const social = await ctx.db.mutation.createSocial(
      {
        data: {
          influencer: {
            connect: {
              id: args.influencerId
            }
          },
          ...socialArgs
        }
      },
      info
    );

    return social;
  },
  async createSize(parent, args, ctx, info) {
    const sizeArgs = { ...args };
    delete sizeArgs.influencerId;
    const size = await ctx.db.mutation.createSize(
      {
        data: {
          influencer: {
            connect: {
              id: args.influencerId
            }
          },
          ...sizeArgs
        }
      },
      info
    );

    return size;
  }
};

module.exports = Mutations;
