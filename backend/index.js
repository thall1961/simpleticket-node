require("dotenv").config({ path: "variables.env" });
const { GraphQLServer } = require("graphql-yoga");
const mongoose = require("mongoose");
const Event = require("./src/models/Event");
const Query = require("./src/resolvers/Query");
const Mutation = require("./src/resolvers/Mutation");

mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
const startDB = () =>
  mongoose.connect(`${process.env.DATABASE}`, { useNewUrlParser: true });

const db = startDB();

const models = {
  Event
};

const context = {
  models,
  db
};

const options = {
  port: 4000,
  endpoint: "/graphql",
  subscriptions: "/subscriptions",
  playground: "/playground"
};

const server = new GraphQLServer({
  typeDefs: "src/schema.graphql",
  resolvers: { Query, Mutation },
  context
});
server.start(options, ({ port }) =>
  console.log(`Server is running on port ${port}`)
);
