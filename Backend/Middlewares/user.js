const {getUser} = require("../Services/authentication");

function checkAuthenticationCookie(cookieName) {
  return (req, res, next) => {
    const token = req.cookies[cookieName];

    if (!token) {
      req.user = null;  
      return next();   
    }

    try {
      const userPayload = getUser(token);
      req.user = userPayload;
    } catch (err) {
      req.user = null;
    }

    next();
  };
}

function restrictTo(role) {
    return function (req, res, next) {
        if (!req.user) return res.status(401).json({ message: "Not logged in" });

        if (req.user.role !== role) {
            return res.status(403).json({ message: "Unauthorized" });
        }

        next();
    };
}

module.exports = {  
    checkAuthenticationCookie,
    restrictTo
};