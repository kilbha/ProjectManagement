import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
    default: false,
  },
  Role: {
    type: String,
    required: true,
    default: "Member",
  },
  Designation: {
    type: String,
    required: true,
  },
});
