const { Schema, model } = require("mongoose");

const bcrypt = require("bcrypt");

const { setUser } = require("../Services/authentication");

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["buyer", "seller"],
        default: "buyer"
    },
},  {timestamps: true}
);

userSchema.pre("save", async function () {
    if (!this.isModified("password")) return;

    const saltRounds = 10; 
    const hashedPassword = await bcrypt.hash(this.password, saltRounds);

    this.password = hashedPassword;
});

userSchema.static("matchPasswordAndGenerateToken", async function(email, password) {
    const user = await this.findOne({ email });
    if (!user) throw new Error("User not found!");

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error("Incorrect Password");

    const token = setUser(user);
    return token;
});

const User = model("user", userSchema);

module.exports = User;