const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = Schema(
    {
        name: { type: String, required: true },
    },
);

export default mongoose.models["User"] || mongoose.model("User", UserSchema, "users");
