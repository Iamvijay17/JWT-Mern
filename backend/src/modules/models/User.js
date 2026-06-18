import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    role:{
      type: String,
      enum: ["admin", "user"],
      default: "user"
    },
    age: {
      type: Number,
      required: [true, "Age is required"],
    },
  },
  {
    timestamps: true,
  },
);

export default User = mongoose.Collection("User", UserSchema);
