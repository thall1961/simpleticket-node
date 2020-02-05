const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const slug = require("slugs");

const eventSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    slug: String
  },
  { timestamps: true }
);

eventSchema.pre("save", async function(next) {
  if (!this.isModified("name")) {
    next(); // skip it
    return; // stop this function from running
  }
  this.slug = slug(this.name);
  // find other events that have a slug of
  // const slugRegEx = new RegExp(`^(${this.slug})((-[0-9]*$)?)$`, "i");
  // const eventsWithSlug = await this.constructor.find({ slug: slugRegEx });
  // if (eventsWithSlug.length) {
  //   this.slug = `${this.slug}-${eventsWithSlug.length + 1}`;
  // }
  next();
  // TODO make more resiliant so slugs are unique
});

module.exports = mongoose.model("Event", eventSchema);
