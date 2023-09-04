import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
  },
  status: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    required: true,
    default: "Member",
  },
  designation: {
    type: String,
  },
  orgName: {
    type: String,
    required: true,
  },
  addedOn: {
    type: String,
    required: true,
    default: new Date().toUTCString(),
  },
  timezoneOffset: {
    type: Number,
    required: true,
    default: new Date().getTimezoneOffset() / -60,
  },
});

const userModel = mongoose.model("users", UserSchema);

export default userModel;
