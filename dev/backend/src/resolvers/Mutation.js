const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Mutations = {
  async signup(parent, args, ctx, info) {
    args.email = args.email.toLowerCase();
    const password = await bcrypt.hash(args.password, 10);

    const user = await ctx.db.mutation.createUser(
      {
        data: {
          ...args,
          password,
          permissions: { set: ["USER"] }
        }
      },
      info
    );
    // create the JWT for them
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // set the jwt as a cookie on the response
    ctx.response.cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365 //1 year cookie
    });
    return user;
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
  },
  async createLoggedActivity(parent, args, ctx, info) {
    const loggedActivityArgs = { ...args };
    delete loggedActivityArgs.influencerId;
    const loggedActivity = await ctx.db.mutation.createLoggedActivity(
      {
        data: {
          influencer: {
            connect: {
              id: args.influencerId
            }
          },
          ...loggedActivityArgs
        }
      },
      info
    );

    return loggedActivity;
  },
  async createNote(parent, args, ctx, info) {
    const noteArgs = { ...args };
    delete noteArgs.influencerId;
    const note = await ctx.db.mutation.createNote(
      {
        data: {
          influencer: {
            connect: {
              id: args.influencerId
            }
          },
          ...noteArgs
        }
      },
      info
    );

    return note;
  }
};

module.exports = Mutations;
