import mongoose from "mongoose";

export const Cat = mongoose.model("Cat", {
  name: String,
  test: String,
  alias: String,
});
