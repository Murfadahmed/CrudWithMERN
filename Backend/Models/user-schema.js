import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";
const userSchema = mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  skey: String,
  file: String,
});

autoIncrement.initialize(mongoose.connection);
// userSchema.plugin(autoIncrement.plugin,'user')



const User = mongoose.model("user", userSchema);

export default User;
