const Mutation = {
  async createEvent(parent, args, ctx, info) {
    // if (!ctx.request.userId) {
    //   throw new Error('You must be logged in to do that!');
    // }

    const event = await ctx.db.mutation.createEvent(
      {
        data: {
          // This is how to create a relationship between the Event and the User
          // user: {
          //   connect: {
          //     id: ctx.request.userId,
          //   },
          // },
          ...args
        }
      },
      info
    );

    console.log(event);

    return event;
  }
};

module.exports = Mutation;
