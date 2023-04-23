const mongoose = require("mongoose");

const UserDetailsScehma = new mongoose.Schema(
  {
    fname: String,
    email: { type: String, unique: true },
    phone:{type:Number},
    password: String,
    userType: String,
    collaborations:String
  },
  {
    collection: "UserInfo",
  }
);

mongoose.model("UserInfo", UserDetailsScehma);
