require("dotenv").config({ path: __dirname + "./variables.env" });
const mongoose = require("mongoose");

// Connect to our Database and handle any bad connections
mongoose.connect(`${process.env.DATABASE}`, { useNewUrlParser: true });
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on("error", err => {
  console.error(
    `Something broke trying to connect to the database 👉 ${err.message}`
  );
});

const Event = require("./models/Event");

const events = [
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
];

async function loadData() {
  try {
    await Event.insertMany(events);
    console.log("👍👍👍👍👍👍👍👍 Done!");
    process.exit();
  } catch (e) {
    console.log(
      "\n👎👎👎👎👎👎👎👎 Error! The Error info is below but if you are importing sample data make sure to drop the existing database first with.\n\n\t npm run blowitallaway\n\n\n"
    );
    console.log(e);
    process.exit();
  }
}

loadData();
