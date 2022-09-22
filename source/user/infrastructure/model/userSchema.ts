import { Schema, model } from "mongoose";


const userSchema = new Schema({
    name: {
        type: String,
      },
      email: {
        type: String,
        unique: true,
      },
      uuid: {
        type: String,
        unique: true,
      },
      password: {
        type: String,
        unique: true,
      },
    },
    {
      timestamps: true,
});

const UserModel = model("users", userSchema)

export default UserModel
