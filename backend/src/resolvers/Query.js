const Query = {
  events: async (parent, args, { models }) => {
    const Events = await models.Event.find({});
    console.log(Events);
    return Events;
  }
};

module.exports = Query;
