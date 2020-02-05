// const debug = require("debug")("simpleticket-node:server");
// const http = require("http");
// const createError = require("http-errors");
// const express = require("express");
// const graphqlHTTP = require("express-graphql");
// const { buildSchema } = require("graphql");
// const path = require("path");
// const cookieParser = require("cookie-parser");
// const logger = require("morgan");
// const mongoose = require("mongoose");
// const cors = require("cors");

// // import environmental variables from our variables.env file
// require("dotenv").config({ path: "variables.env" });

// // Connect to our Database and handle any bad connections
// mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
// mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
// mongoose.connection.on("error", err => {
//   console.error(
//     `Something broke trying to connect to the database 👉 ${err.message}`
//   );
// });

// // Register models
// require("./models/Event");

// const app = express();
// app.use(cors);

// // Construct a schema, using GraphQL schema language
// const schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);

// // The root provides a resolver function for each API endpoint
// const root = {
//   hello: () => {
//     return "Hello world!";
//   }
// };

// app.use(
//   "/graphql",
//   graphqlHTTP({
//     schema: schema,
//     rootValue: root,
//     graphiql: true
//   })
// );

// // view engine setup
// // app.set("views", path.join(__dirname, "views"));
// // app.set("view engine", "pug");

// app.use(logger("dev"));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());

// app.use(express.static(path.join(__dirname, "public")));

// // catch 404 and forward to error handler
// app.use((req, res, next) => {
//   next(createError(404));
// });

// // error handler
// app.use((err, req, res, next) => {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

// /**
//  * Get port from environment and store in Express.
//  */

// const port = normalizePort(process.env.PORT || 4000);
// app.set("port", port);

// /**
//  * Create HTTP server.
//  */

// const server = http.createServer(app);

// /**
//  * Listen on provided port, on all network interfaces.
//  */

// server.listen(port, () => {
//   console.log(
//     `Running a GraphQL API server at http://localhost:${
//       server.address().port
//     }/graphql`
//   );
// });

// /**
//  * Normalize a port into a number, string, or false.
//  */

// function normalizePort(val) {
//   const port = parseInt(val, 10);

//   if (isNaN(port)) {
//     // named pipe
//     return val;
//   }

//   if (port >= 0) {
//     // port number
//     return port;
//   }

//   return false;
// }

require("dotenv").config({ path: "variables.env" });
const { GraphQLServer } = require("graphql-yoga");
const mongoose = require("mongoose");
const Event = require("./models/Event");

const startDB = () => {
  mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });
  mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
  mongoose.connection.on("error", err => {
    console.error(
      `Something broke trying to connect to the database 👉 ${err.message}`
    );
  });
};

const models = {
  Event
};

const context = {
  startDB,
  models
};

const options = {
  port: 4000,
  endpoint: "/graphql",
  subscriptions: "/subscriptions",
  playground: "/playground"
};

const typeDefs = `
  type Query {
    events: [Event!]!
  }

  type Event {
    id: String!
    name: String!
  }
`;

const resolvers = {
  Query: {
    events: () => [
      {
        id: "8hg84ong4os84hgs",
        name: "Auction Night"
      },
      {
        id: "jtingrj90djgdgdf",
        name: "Gala"
      },
      {
        id: "jrngu7y5uhyurrgu",
        name: "Contest"
      }
    ]
  }
};

const server = new GraphQLServer({ typeDefs, resolvers, context });
server.start(options, ({ port }) =>
  console.log(`Server is running on port ${port}`)
);
