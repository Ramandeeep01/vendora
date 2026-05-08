const JWT = require("jsonwebtoken");

const secret = process.env.JWT_SECRET;

function setUser(user) {
    payload = {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
        profileImageURL: user.profileImage,
    }
    const token = JWT.sign(payload, secret);
    return token;
};

function getUser(token) {
    const payload = JWT.verify(token, secret);
    return payload
};

module.exports = {
    setUser,
    getUser
}